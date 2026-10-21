# 공부 기록

로봇 학습(VLA)을 공부하며 한 것과 배운 것을 남기는 블로그. Jekyll + [Beautiful Jekyll](https://beautifuljekyll.com) 6.0.1 (MIT, `LICENSE`), GitHub Pages가 `main` 브랜치를 그대로 빌드한다.

## 글 쓰기

1. `templates/post.md`를 `_posts/YYYY-MM-DD-이름.md`로 복사한다.
2. 머리말의 `title`, `excerpt`(목록에 보일 한 줄), `tags`를 고친다. 썸네일은 `assets/img/`에 넣고 `thumbnail-img`에 경로를 적는다.
3. 위쪽 메뉴의 VLA · 논문 · 수학은 같은 이름의 태그로 모인다.

## 로컬 미리보기

```bash
./scripts/serve.sh   # http://localhost:4000/  (끄기: Ctrl+C)
```

`_config.yml`을 고쳤을 때만 껐다가 다시 실행한다.

## 손댄 곳

- 설정: `_config.yml` (메뉴, 색, 글꼴)
- 스타일: `assets/css/custom.css` (Pretendard, 첫 화면, 목록, 이전·다음)
- 첫 화면: `index.html`, 글 목록: `posts.html`
- 테마 안의 영어 문구 일부를 한국어로 바꿨다 (`_layouts/`, `_includes/`)

공개 사이트다. 회사 내부 정보, 사람 이름, 연락처는 쓰지 않는다.
