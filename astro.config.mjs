// @ts-check
import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"

import { CATEGORIES } from "./src/categories.ts"

export default defineConfig({
  site: "https://chanyee725.github.io",
  base: "/Docs",
  integrations: [
    starlight({
      title: "공부 기록",
      defaultLocale: "root",
      locales: { root: { label: "한국어", lang: "ko" } },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/chanyee725/Docs" }],
      customCss: ["pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css", "./src/styles/custom.css"],
      components: {
        PageTitle: "./src/components/PageTitle.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
        ThemeSelect: "./src/components/ThemeToggle.astro",
        Pagination: "./src/components/Pagination.astro",
      },
      routeMiddleware: "./src/route-data.ts",
      sidebar: CATEGORIES.map((c) => ({ label: c.label, items: [{ autogenerate: { directory: c.dir } }] })),
    }),
  ],
})
