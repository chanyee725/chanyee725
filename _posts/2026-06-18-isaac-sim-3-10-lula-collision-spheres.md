---
title: "Isaac Sim 3-10. Lula Collisions spheres 추가 방법"
excerpt: "Lula Robot Description Editor로 ur10e 링크에 충돌용 구(Collision sphere)를 생성하는 방법."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "collision"]
thumbnail-img: /assets/img/posts/isaac-sim-3-10-lula-collision-spheres/1.png
---

> Robot Collisions spheres 추가 방법
> 
> 튜토리얼 링크 : [Tutorial 8: Generate Robot Configuration File — Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/robot_setup_tutorials/tutorial_generate_robot_config.html)

Isaac Sim Sample 에 만들어진 usd 파일 사용

( 경로 : `Isaac Sim/Samples/Rigging/Manipulator/Configure_Manipulator/ur10e/ur/ur_gripper.usd` )

![Content 브라우저의 ur_gripper.usd](/assets/img/posts/isaac-sim-3-10-lula-collision-spheres/1.png)

Lula collisions 를 적용하기 위해 visuals, collisions Instantiable 기능 비활성화

![Instanceable 비활성화](/assets/img/posts/isaac-sim-3-10-lula-collision-spheres/2.png)

Instantiable 비활성화 후 Play 버튼 클릭 → tools → Robotics → Lula Robot Description Editor 추가

이후, 새로 열린 창에서 /ur, /upper_arm_link 선택

![Tools → Robotics → Lula Robot Description Editor](/assets/img/posts/isaac-sim-3-10-lula-collision-spheres/3.png)

![Select Articulation /ur, Select Link /upper_arm_link](/assets/img/posts/isaac-sim-3-10-lula-collision-spheres/4.png)

Mimic joint 를 제외한 joint 는 Activate Joint 로 설정 값 변경

![Joint Status를 Active Joint로 변경](/assets/img/posts/isaac-sim-3-10-lula-collision-spheres/5.png)

이후 아래 쪽 Link Sphere Editor 로 내려와 아래 사진과 같이 설정 해주면 총 5개의 구가 해당 Prim 에 생김

생성을 종료 하려면 GENERATE SPHERES 버튼 클릭

![Link Sphere Editor 설정](/assets/img/posts/isaac-sim-3-10-lula-collision-spheres/6.png)

추가 된 모습

![upper_arm_link에 추가된 Collision sphere](/assets/img/posts/isaac-sim-3-10-lula-collision-spheres/7.png)
