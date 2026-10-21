---
title: "Isaac Sim 5. Python Scripting and Tutorials"
excerpt: "USD의 Prim, Simulation, Application, Stage 개념과 Python Scripting 문서 정리 목록."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "python", "usd"]
---

> 참고 링크 : [Python Scripting and Tutorials — Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/python_scripting/index.html)

문서 이미지 (비공개)

모든 usd 는 primitive ( prim ) 으로 정의 된다.

`Simulation` (Sim): Prim들의 속성(위치, 회전 등)을 변경하면서 시간에 따라 물체를 움직이게 하는 역할

`Application`: 시뮬레이션 전체를 관리하는 프로그램으로, 렌더링, 사용자 입력, GUI 등을 담당합니다.

`Stage`: USD 개념으로, 모든 Prim이 존재하고 서로 관계를 맺는 논리적 공간(컨테이너)입니다. Prim들은 Stage 위에서 위치와 관계를 정의받습니다.

## Concepts

- [Core API Overview]({% post_url 2026-06-18-isaac-sim-5-1-core-api-overview %})

## Scripts

- [Scene Setup Snippets — Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/python_scripting/environment_setup.html) ( 양이 많아 위 링크에서 항목 찾기 )
