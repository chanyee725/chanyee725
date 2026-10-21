---
title: "Gazebo 2-2-1. 재료 색상 정의하기"
excerpt: "robot_core.xacro에서 material로 링크에 쓸 색상을 정의한 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "xacro"]
---

```robot_core.xacro
<!-- 색상 정의 -->
    <material name="white">
        <color rgba="1 1 1 1"/>
    </material>

    <material name="orange">
        <color rgba="1 0.3 0.1 1"/>
    </material>

    <material name="blue">
        <color rgba="0.2 0.2 1 1"/>
    </material>

    <material name="black">
        <color rgba="0 0 0 1"/>
    </material>
```

material는 재료의 뜻을 가진다.

즉, 내가 사용하려는 link의 색을 정의할 수 있다.
