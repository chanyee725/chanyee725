---
title: "Gazebo 1. ROS package 만들기"
excerpt: "템플릿 레포를 복사해 나만의 ROS package를 만들고 colcon build까지 해 본 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2"]
thumbnail-img: /assets/img/posts/gazebo-1-ros-package/1.png
---

## 나만의 ROS package를 만들어보자

- 영상을 보고 ROS package를 만들었다.
- 템플릿을 복사해서 사용할 수 있기에 편리하다.

## 복사한 레포 내가 원하는 이름으로 변경하기

템플릿 레포 링크를 타고 들어가서 `use this template` 를 누르고 내가 원하는 이름으로 fork한다.

## package colcon build 하기

( 내가 이 분야는 처음이라 그런지 package build하기가 정확한 명칭인지? 잘 모르겠다. )

내가 원하는 폴더에 들어가 mkdir src를 하여 src 폴더를 만들고 src 폴더안에 내가 fork 받은 레포의 주소를 복사하여 clone을 한다.

그리고 내가 원하는 폴더로 `cd ..`을 한 번 하여 아래와 같이 명령어를 입력한다.

```bash
colcon build --symlink-install
```

그럼 아래와 같이 출력이 뜨며 잘 build가 된 것을 확인할 수 있다.

![colcon build 출력](/assets/img/posts/gazebo-1-ros-package/1.png)
