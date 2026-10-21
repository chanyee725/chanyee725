---
title: "Gazebo 2-2. robot_core.xacro 만들기"
excerpt: "robot_core.xacro 파일을 만들고 링크와 조인트가 무엇인지 정리한 뒤, 로봇 몸체를 단계별로 만든 과정의 시작점."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "xacro"]
thumbnail-img: /assets/img/posts/gazebo-2-2-robot-core-xacro/1.png
---

맨 처음 robot_core.xacro 파일을 만들고 텍스트를 넣으면 아래와 같이 글들이 흰색으로 보일 것이다.

![문법 강조 없이 흰색으로 보이는 xacro 파일](/assets/img/posts/gazebo-2-2-robot-core-xacro/1.png)

이럴 경우 vscode 기준 오른쪽 아래 있는 `plain text` 버튼을 눌러 `xml을 입력`해주자.

그러면 아래처럼 깔끔하게 된다.

![xml로 문법 강조된 xacro 파일](/assets/img/posts/gazebo-2-2-robot-core-xacro/2.png)

## 조인트..? 링크..?

영상에서는 이 파일에 모든 링크와 조인트가 다 들어간다고 하였다.

링크는 무엇이고 조인트가 무엇인지 조금만 정리하고 가겠다..

- **조인트(Joint)**: 로봇의 부품을 연결하는 관절이라고 한다. 
  - 부품들 사이에서 상호작용을 하는 역할을 하고 이동하는 방향 회전등을 정할 수 있다.
  - 주요한 조인트 타입으로는 회전 관절, 이동 관절, 고정 관절 등이 있다.
- **링크(Link)**: 로봇의 부품을 나타낸다. 
  - 각 부품은 링크에 해당하며, 이 링크들은 조인트를 통해 연결된다.

## 단계별로 만들기

- [Gazebo 2-2-1. 재료 색상 정의하기](/posts/gazebo-2-2-1-material-colors)
- [Gazebo 2-2-2. base_link & joint 만들기](/posts/gazebo-2-2-2-base-link-joint)
- [Gazebo 2-2-3. rviz2로 로봇 확인하기](/posts/gazebo-2-2-3-rviz2-check)
- [Gazebo 2-2-4. 바퀴 만들기](/posts/gazebo-2-2-4-wheels)
- [Gazebo 2-2-5. caster wheel 만들기](/posts/gazebo-2-2-5-caster-wheel)
- [Gazebo 2-2-6. collision 추가하기](/posts/gazebo-2-2-6-collision)
- [Gazebo 2-2-7. 관성 코드 추가 & 질량 추가](/posts/gazebo-2-2-7-inertia-mass)

## 전체 코드

전체 코드 (robot_core.xacro)

```
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro">

    <xacro:include filename="inertial_macros.xacro"/>

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

    <!-- base_link -->
    <link name="base_link">

    </link>

    <!-- (base_link, chassis) joint 정의 -->
    <joint name="chassis_joint" type="fixed">
        <parent link="base_link"/>
        <child link="chassis"/>
        <origin xyz="-0.1 0 0"/>
    </joint>

    <!-- chassis 정의 -->
    <link name="chassis">
        <visual>
            <origin xyz="0.15 0 0.075"/>
            <geometry>
                <box size="0.3 0.3 0.15"/> <!-- 0.3m 0.3m 0.15m -->
            </geometry>
            <material name="white"/>
        </visual>
        <collision>
            <origin xyz="0.15 0 0.075"/>
            <geometry>
                <box size="0.3 0.3 0.15"/>
            </geometry>
        </collision>
        <xacro:inertial_box mass="0.5" x="0.3" y="0.3" z="0.15">
            <origin xyz="0.15 0 0.75" rpy="0 0 0"/>
        </xacro:inertial_box>
    </link>
    <gazebo reference="chassis">
        <material>Gazebo/White</material>
    </gazebo>

    <!-- 휠 부분 -->
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
        <xacro:inertial_cylinder mass="0.1" length="0.04" radius="0.05">
            <origin xyz="0 0 0" rpy="0 0 0"/>
        </xacro:inertial_cylinder>
    </link>
    <gazebo reference="left_wheel">
        <material>Gazebo/Black</material>
    </gazebo>

    <!-- 오른쪽 -->
    <joint name="right_wheel_joint" type="continuous">
        <parent link="base_link"/>
        <child link="right_wheel"/>
        <origin xyz="0 -0.175 0" rpy="${pi/2} 0 0"/>
        <axis xyz="0 0 -1"/>
    </joint>

    <link name="right_wheel">
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
        <xacro:inertial_cylinder mass="0.1" length="0.04" radius="0.05">
            <origin xyz="0 0 0" rpy="0 0 0"/>
        </xacro:inertial_cylinder>
    </link>

    <gazebo reference="right_wheel">
        <material>Gazebo/Black</material>
    </gazebo>

    <!-- (Chassis, CASTER WHEEL) joint -->
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
        <collision>
            <geometry>
                <sphere radius="0.05"/>
            </geometry>
        </collision>
        <xacro:inertial_sphere mass="0.1" radius="0.05">
            <origin xyz="0 0 0" rpy="0 0 0"/>
        </xacro:inertial_sphere>
    </link>

    <gazebo reference="caster_wheel">
        <material>Gazebo/Orange</material>
        <mu1 value="0.001"/> <!-- 마찰 -->
        <mu2 value="0.001"/>
    </gazebo>

</robot>
```
