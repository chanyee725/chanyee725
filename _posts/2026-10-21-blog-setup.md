---
title: 이 블로그를 만든 방법
excerpt: Jekyll과 Beautiful Jekyll로 GitHub Pages에 기록용 블로그를 만든 과정.
category: 개발
tags: [개발, 블로그]
thumbnail-img: /assets/img/blog-setup.svg
---

## 구성

- Jekyll + Beautiful Jekyll 테마. GitHub Pages가 레포를 그대로 빌드해서 올린다.
- 글 하나 = `_posts/YYYY-MM-DD-이름.md` 파일 하나.
- 글 목록 오른쪽의 분류 폴더와 태그로 글을 걸러 본다.

## 새 글 쓰기

1. `templates/post.md`를 `_posts/`에 복사하고 파일명을 `날짜-이름.md`로 바꾼다.
2. 제목과 태그를 고치고 내용을 쓴다.
3. 썸네일이 있으면 `assets/img/`에 넣고 `thumbnail-img`에 경로를 적는다.
