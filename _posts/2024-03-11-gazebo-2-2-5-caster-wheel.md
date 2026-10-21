---
title: "Gazebo 2-2-5. caster wheel 만들기"
excerpt: "chassis에 fixed joint로 구 모양 caster wheel을 붙이고 rviz에서 확인한 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "xacro", "rviz2"]
thumbnail-img: /assets/img/posts/gazebo-2-2-5-caster-wheel/1.png
---

```robot_core.xacro
<joint name="caster_wheel_joint" type="fixed">
    <parent link="chassis"/>
    <child link="caster_wheel"/>
    <origin xyz="0.24 0 0"/>
</joint>

<!-- Caster Wheel-->
<link name="caster_wheel">
    <visual>
        <geometry>
            <sphere radius="0.05"/>
        </geometry>
        <material name="orange"/>
    </visual>
</link>
```

앞에서 정리한 내용들은 이제 조금씩 생략하겠다.

`<origin xyz="2.4 0 0"/>`을 해주는 이유는 지금까지 xyz축을 많이 조정했기 때문에 현재 x의 위치가 오른쪽 하단 부분이라 왼쪽으로 가게끔 0.24를 해주었다.

- sphere는 구를 뜻한다.

그리고 colcon build → rviz 실행

![caster wheel이 붙은 로봇을 rviz에서 본 화면](/assets/img/posts/gazebo-2-2-5-caster-wheel/1.png)
