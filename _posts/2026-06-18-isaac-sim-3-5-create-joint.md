---
title: "Isaac Sim 3-5. Joint 생성 방법"
excerpt: "두 Material 사이에 Revolute Joint를 만들고 회전축을 정한 뒤 Play로 잘 연결됐는지 확인하는 방법."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "joint"]
thumbnail-img: /assets/img/posts/isaac-sim-3-5-create-joint/1.png
---

> 2개의 Material 사이 Joint 를 생성하는 방법

현재 아래 사진과 같이 자동차 모양을 한 Material 들의 형상이 있으며, 아직 Joint 로 연결되지 않은 상태

Cylinder 는 총 2개, Cube 는 1개가 존재하며, 빨간색 동그라미 부분에 Revolute Joint 를 생성하여 연결해주려 함

![Joint를 만들 위치 (Cylinder, Cube)](/assets/img/posts/isaac-sim-3-5-create-joint/1.png)

먼저 연결할 Material 를 먼저 클릭 한 뒤 연결될 Material 를 클릭하여 아래 가이드에 따라 새로운 Revolute Joint 를 생성

![Create → Physics → Joint → Revolute Joint](/assets/img/posts/isaac-sim-3-5-create-joint/2.png)

생성된 Joint 는 연결할 대상의 Material 하위 Tree 에 생성되며, 알아보기 쉽게 이름을 수정 후 Joint 들을 담을 폴더 Joints/ 생성하여 모든 Joint 를 해당 폴더로 이동

![Material 하위에 생성된 Joint](/assets/img/posts/isaac-sim-3-5-create-joint/3.png)

![Scope로 Joints 폴더 생성](/assets/img/posts/isaac-sim-3-5-create-joint/4.png)

![Joints 폴더로 옮긴 Joint](/assets/img/posts/isaac-sim-3-5-create-joint/5.png)

추가된 Joint 는 어디로 회전할 지 수정을 해줘야 하는데, 나는 Axis 를 Z 로 설정함

![Revolute Joint Axis 설정](/assets/img/posts/isaac-sim-3-5-create-joint/6.png)

Joint 가 잘 연결되었는지 확인을 위해 Play 버튼을 누를 후 Shift 를 누르고 좌클릭으로 Cube Material 를 잡아당기면 아래 처럼 움직이는 것을 확인 가능

![Play 후 Cube를 잡아당겨 Joint 확인](/assets/img/posts/isaac-sim-3-5-create-joint/7.gif)
