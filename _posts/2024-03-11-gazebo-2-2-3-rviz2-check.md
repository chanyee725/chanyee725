---
title: "Gazebo 2-2-3. rviz2로 로봇 확인하기"
excerpt: "launch 후 rviz2에서 TF와 RobotModel을 추가해 만든 로봇의 링크와 축, 모델을 확인하는 방법."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "rviz2"]
thumbnail-img: /assets/img/posts/gazebo-2-2-3-rviz2-check/1.png
---

```bash
ros2 launch bssm_daux rsp.launch.py
```

```bash
rviz2
```

위 두 명령을 실행하자.

그럼 rviz라는 새로운 창이 뜨게되는데 아래와 같이 따라하여 나의 로봇을 확인해보자

> **Fixed Frame는 base_link로 설정해야한다.**

## TF로 link, axis 확인하기

![rviz2에서 TF 이름과 축이 표시된 화면](/assets/img/posts/gazebo-2-2-3-rviz2-check/1.png)

왼쪽 아래 있는 Add → TF 더블 클릭 → show Names 체크 하면 위처럼 뜬다.

- 빨간색이 x, 초록색이 y, 파란색이 z이다.

## RobotModel로 모델 확인하기

![rviz2에서 RobotModel이 표시된 화면](/assets/img/posts/gazebo-2-2-3-rviz2-check/2.png)

Fixed Frame는 base_link로 설정해야한다.

왼쪽 아래 있는 Add → RobotModel 더블 클릭 → Description Topic 옆 칸에 /robot_description 입력
