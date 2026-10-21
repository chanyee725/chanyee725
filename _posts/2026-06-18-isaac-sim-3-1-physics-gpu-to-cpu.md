---
title: "Isaac Sim 3-1. 물리 엔진 HW 설정 방법 (GPU to CPU)"
excerpt: "Physics Scene을 추가하고 Enable GPU Dynamics를 끈 뒤 Broadphase Type을 MBP로 바꿔 물리 엔진을 CPU로 돌리는 방법."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "physics"]
thumbnail-img: /assets/img/posts/isaac-sim-3-1-physics-gpu-to-cpu/1.png
---

> 물리 엔진을 GPU → CPU 로 변경하는 방법

해당 설정은 학습을 돌리지 않거나, 물체가 많이 없을 때 하면 좋음

![Create → Physics → Physics Scene 메뉴](/assets/img/posts/isaac-sim-3-1-physics-gpu-to-cpu/1.png)

Create → Physics → Physics Scene 클릭 후

Stage 에 PhysicsScene 가 추가 되었는지 확인

![Stage에 추가된 PhysicsScene](/assets/img/posts/isaac-sim-3-1-physics-gpu-to-cpu/2.png)

추가가 되었다면, PhysicsScene 클릭 후 Property 화면에서 Enable GPU 부분 찾기

![PhysicsScene Property의 Enable GPU Dynamics](/assets/img/posts/isaac-sim-3-1-physics-gpu-to-cpu/3.png)

체크 해제 후 Broadphase Type 을 MBP 로 수정

![Enable GPU Dynamics 해제 후 Broadphase Type MBP](/assets/img/posts/isaac-sim-3-1-physics-gpu-to-cpu/4.png)
