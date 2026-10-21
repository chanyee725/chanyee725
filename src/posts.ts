import { getCollection } from "astro:content"

// date가 있는 글 = 블로그 글. 최신순.
export async function getPosts() {
  return (await getCollection("docs", (e) => !!e.data.date && !e.data.draft)).sort(
    (a, b) => b.data.date!.getTime() - a.data.date!.getTime(),
  )
}

export type Post = Awaited<ReturnType<typeof getPosts>>[number]

// 태그별 글 수, 많은 순
export function tagCounts(posts: Post[]) {
  const counts = new Map<string, number>()
  for (const p of posts) for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1)
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
}

export const base = import.meta.env.BASE_URL.replace(/\/$/, "")
export const tagHref = (tag: string) => `${base}/tags/${encodeURIComponent(tag)}/`

// 목록 미리보기: 머리말 description이 없으면 본문 앞부분
export const excerpt = (body = "") =>
  body
    .split("\n")
    .filter((l) => l.trim() && !/^(#|import |<|---|```|\|)/.test(l.trim()))
    .map((l) => l.replace(/^\s*(?:[-*+]|\d+\.)\s+/, "").replace(/[*_`>]|\[([^\]]*)\]\([^)]*\)/g, "$1"))
    .join(" ")
    .slice(0, 200)
