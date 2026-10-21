---
title: "Gazebo 2-2-6. collision 추가하기"
excerpt: "각 링크의 visual 코드를 복사해 collision을 추가하고 rviz에서 충돌 모델만 켜서 확인한 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "xacro", "rviz2"]
thumbnail-img: /assets/img/posts/gazebo-2-2-6-collision/1.png
---

그냥 모든 코드에 복붙을 조금 다르게 해주면 된다.

```robot_core.xacro
<!-- 왼쪽 -->
    <joint name="left_wheel_joint" type="continuous">
        <parent link="base_link"/>
        <child link="left_wheel"/>
        <origin xyz="0 0.175 0" rpy="-${pi/2} 0 0"/>
        <axis xyz="0 0 1"/>
    </joint>

    <link name="left_wheel">
        <visual>
            <geometry>
                <cylinder radius="0.05" length="0.04"/>
            </geometry>
            <material name="black"/>
        </visual>
        <collision>
            <geometry>
                <cylinder radius="0.05" length="0.04"/>
            </geometry>
        </collision>
    </link>

...
```

이런식으로 수정

![collision 모델만 켠 rviz 화면](/assets/img/posts/gazebo-2-2-6-collision/1.png)

잘 됬는지 확인하려면 RobotModel에서 visual Enabled 체크 해제 후 Collision Enabled 체크
