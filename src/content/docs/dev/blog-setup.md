---
title: 이 블로그를 만든 방법
date: 2026-10-21
tags: [블로그, astro]
thumbnail: /thumbnails/blog-setup.svg
---

## 구성

- Astro + Starlight. 폴더 하나가 카테고리 하나다 (`src/content/docs/daily/`, `math/` …).
- 글은 마크다운 파일. 머리말에 `title`, `date`, 필요하면 `thumbnail`을 적는다.
- `main`에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 올린다.

## 새 글 쓰기

1. `templates/post.md`를 카테고리 폴더에 복사한다.
2. 제목과 날짜를 고치고 내용을 쓴다.
3. 썸네일이 있으면 `public/thumbnails/`에 넣고 경로를 적는다.
