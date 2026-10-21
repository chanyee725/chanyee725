import { defineRouteMiddleware } from "@astrojs/starlight/route-data"

type Entry = { type: "link" | "group"; label: string; entries?: Entry[] }

const count = (e: Entry): number => (e.type === "link" ? 1 : (e.entries ?? []).reduce((n, x) => n + count(x), 0))

// 사이드바: 글이 없는 카테고리는 숨기고, 이름 옆에 글 수를 붙이고, 일지는 최신 날짜가 위로 오게 뒤집는다
export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute
  const sidebar = (route.sidebar as Entry[]).filter((e) => e.type !== "group" || count(e) > 0)
  for (const group of sidebar) {
    if (group.type !== "group") continue
    if (group.label === "일지") group.entries?.reverse()
    group.label = `${group.label} (${count(group)})`
  }
  route.sidebar = sidebar as typeof route.sidebar
})
