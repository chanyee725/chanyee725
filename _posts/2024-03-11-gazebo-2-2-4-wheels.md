---
title: "Gazebo 2-2-4. 바퀴 만들기"
excerpt: "continuous joint로 좌우 바퀴를 만들고 cylinder를 x축 기준으로 돌려 방향을 맞춘 뒤 joint_state_publisher로 rviz에 띄운 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "xacro", "rviz2"]
thumbnail-img: /assets/img/posts/gazebo-2-2-4-wheels/1.png
---

```robot_core.xacro
<joint name="left_wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child link="left_wheel"/>
</joint>
```

joint를 만들어주었다.

parent는 chassis로 해도 되지만 정 중앙에 있는 base_link에서 좌표만 조절하면 간단히 뒷 부분에 바퀴를 연결할 수 있기 때문에 parent를 base_link로 설정하였다.

그리고 type에는 continuous가 있는데 이는 회전운동을 하며 무한하게 회전을 할 수 있다.

그래서 바퀴에 `<joint name="left_wheel_joint" type="continuous">`를 지정해주었다.

## 왼쪽 바퀴

```robot_core.xacro
<link name="left_wheel">
    <visual>
        <geometry>
            <cylinder radius="0.05" length="0.04"/>
        </geometry>
        <material name="black"/>
    </visual>
</link>
```

왼쪽 바퀴는 cylinder: 병 뚜껑 모양으로 반지름은 0.5cm 높이는 0.4cm로 하였다.

하지만 cylinder는 기본적으로 z축을 따라 방향이 지정되어있다.

![z축 방향으로 서 있는 cylinder](/assets/img/posts/gazebo-2-2-4-wheels/1.png)

이런 모양으로 되어있는데 x축을 90도 돌려 아래 사진처럼 만들어주어야한다.

![x축 기준으로 돌린 cylinder](/assets/img/posts/gazebo-2-2-4-wheels/2.png)

그럼 z축이 바깥 방향을 보고 y축이 아래를 보도록 왼쪽 바퀴는 x축을 기준으로 -90도 돌려주어야한다.

또한 왼쪽 바퀴는 z축이 회전하는 방향이 되며 시계 반대 방향으로 돈다.

그럼 left_wheel이 회전하는 축(axis)은 z축이 된다.

그 점을 모두 생각하고 코드를 작성하면 아래처럼 작성할 수 있다.

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
</link>
```

## 오른쪽 바퀴

반대로 오른쪽 바퀴는 위 왼쪽 바퀴의 값에서 -만 붙여주자

```robot_core.xacro
<!-- 오른쪽 -->
<joint name="right_wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child link="right_wheel"/>
    <origin xyz="0 -0.175 0" rpy="${pi/2} 0 0"/>
    <axis xyz="0 0 -1"/>
</joint>

<link name="left_wheel">
    <visual>
        <geometry>
            <cylinder radius="0.05" length="0.04"/>
        </geometry>
        <material name="black"/>
    </visual>
</link>
```

## rviz에서 확인하기

![바퀴가 보이지 않는 rviz 화면](/assets/img/posts/gazebo-2-2-4-wheels/3.png)

실행을 시키고 보면 아무것도 뜨지가 않는다.

그 이유는 바퀴 때문인데 관절 상태를 찾을 수 없고, 바퀴가 얼마나 많이 회전했는지 알 수 없기 때문이다.

아래 명령어를 실행하면 해결된다.

```bash
ros2 run joint_state_publisher joint_state_publisher
```

![joint_state_publisher 실행 후 바퀴가 보이는 rviz 화면](/assets/img/posts/gazebo-2-2-4-wheels/4.png)
