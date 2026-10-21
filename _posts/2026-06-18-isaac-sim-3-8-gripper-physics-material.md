---
title: "Isaac Sim 3-8. Gripper Material 물리 설정"
excerpt: "Rigid Body Material(fingertip_material)을 만들어 마찰 값을 정하고 2F-85 그리퍼 손끝에 적용하는 방법."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "gripper", "physics"]
thumbnail-img: /assets/img/posts/isaac-sim-3-8-gripper-physics-material/1.png
---

> 그리퍼에 물리 값을 설정하는 방법에 대해 설명함

Scene 에는 그리퍼가 추가 되어있다고 가정함

그리퍼 끝 쪽에 설정될 물리 Material 설정을 위해 새로운 Physics Material 추가

Create → Physics → Physics Material → Rigid Body Material 이후 이름은 fingertip_material 으로 수정

![추가한 fingertip_material](/assets/img/posts/isaac-sim-3-8-gripper-physics-material/1.png)

물리 설정 값은 아래와 같이 변경해주고 Gripper 끝 부분에 적용해주면 됨

현재 그리퍼 2F-85 기준으로 left, right_inner_finger Material 의 Materials on selected models 에 앞에서 추가한 fingertip_material 적용

![Rigid Body Material 물리 값](/assets/img/posts/isaac-sim-3-8-gripper-physics-material/2.png)

![inner_finger에 fingertip_material 적용](/assets/img/posts/isaac-sim-3-8-gripper-physics-material/3.png)
