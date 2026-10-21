import { docsLoader } from "@astrojs/starlight/loaders"
import { docsSchema } from "@astrojs/starlight/schema"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

// 글 머리말에 date(작성일), tags, thumbnail(목록 썸네일, public/ 기준 경로)을 더 받는다
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        date: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        thumbnail: z.string().optional(),
      }),
    }),
  }),
}
