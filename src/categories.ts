// 카테고리 = src/content/docs 아래 폴더 하나. 사이드바 순서도 이 순서다.
export const CATEGORIES = [
  { dir: "daily", label: "일지" },
  { dir: "vla", label: "VLA·로봇" },
  { dir: "papers", label: "논문" },
  { dir: "math", label: "수학·이론" },
  { dir: "dev", label: "개발·설정" },
  { dir: "english", label: "영어" },
  { dir: "retro", label: "회고" },
] as const

export const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(CATEGORIES.map((c) => [c.dir, c.label]))

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat("ko-KR", { timeZone: "Asia/Seoul", year: "numeric", month: "numeric", day: "numeric" }).format(d)
