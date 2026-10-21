# 공부 기록

로봇 학습(VLA)을 공부하며 한 것과 배운 것을 남기는 블로그. Astro + Starlight, GitHub Pages로 배포한다.

```bash
npm install
npm run dev      # http://localhost:4321/Docs/
npm run build
```

- 글: `src/content/docs/<카테고리>/<파일>.md`. 카테고리 목록은 `src/categories.ts`.
- 새 글은 `templates/post.md`를 복사해서 쓴다. 머리말 `date`가 있어야 홈 최신글에 나온다.
- 썸네일: `public/thumbnails/`에 넣고 머리말에 `thumbnail: /thumbnails/파일명`.
- 공개 사이트다. 회사 내부 정보, 사람 이름, 연락처는 쓰지 않는다.
