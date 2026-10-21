---
title: "Gazebo 2-2-2. base_link & joint 만들기"
excerpt: "base_link와 chassis를 fixed joint로 잇고, chassis 원점을 뒤쪽 하단으로 옮겨 300×300×150mm 몸체를 만든 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "xacro", "rviz2"]
thumbnail-img: /assets/img/posts/gazebo-2-2-2-base-link-joint/1.png
---

## base_link

base_link는 그냥 이름을 봤을 때 딱 느낌이 온다.

아 이 친구가 파이썬에서 `main.py` 같은 친구구나 처럼 말이다.

base_link는 로봇의 가장 중앙에 두면 좋다고 하며, 300mm x 300mm x 150mm 크기의 로봇을 만들어 보자.

![300×300×150mm 로봇 몸체 치수](/assets/img/posts/gazebo-2-2-2-base-link-joint/1.png)

이것을 m로 변환하면 0.3 x 0.3 x 0.15가 된다.

## joint를 만들어보자

```robot_core.xacro
<joint name="chassis_joint", type="fixed">
				<parent link="base_link"/>
        <child link="chassis"/>
 </joint>
```

생각보다 코드가 이해하기 편해서 놀랍다.

일단 차대(chassis)와 base_link를 joint 하기 위해 chassis_joint를 만들어준다.

- **parent**: 부모 링크라고 불리며 자식 링크와 연결되고 로봇의 고정된 부분을 나타낸다.
- **child**: 자식 링크라고 불리며 부모 링크에 연결되고 로봇의 이동 가능한 부분을 나타낸다.

내가 위에서 설명한 글을 보면 base_link는 가만히 있고, 로봇의 chassis가 움직이는 것을 알 수 있다.

그리고 **joint name="~", type="fixed"** 로 되어있는데, fixed는 고정 조인트를 의미한다.

- 두 링크(부모와 자식)의 상대적인 위치와 방향이 변하지 않는다.

## Chassis의 원점을 뒤쪽 하단으로 설정해보자

![chassis 원점 위치](/assets/img/posts/gazebo-2-2-2-base-link-joint/2.png)

중앙에 있는 chassis의 기본 원점을 x축으로 -1칸 가야하기 때문에 아래와 같이 코드를 추가해준다.

```robot_core.xacro
<joint name="chassis_joint", type="fixed">
    <parent link="base_link"/>
    <child link="chassis"/>
    <origin xyz="-0.1 0 0"/> <!-- 수정한 부분 -->
</joint>
```

## chassis를 만들어보자

```robot_core.xacro
<link name="chassis">
    <visual>
        <geometry>
                <box size="0.3 0.3 0.15"/> <!-- 0.3m 0.3m 0.15m -->
        </geometry>
        <material name="white"/>
    </visual>
</link>
```

- **visual**: 로봇의 시각적 표현
- **geometry**: 어떤 형태로 표현될지 정의 (안에서 box로 정의함)

chassis를 만들고 나면 한 가지 문제점이 생긴다.

내가 원하는 chassis의 위치는 뒤쪽 하단인데 이 흰색 box를 넣는다면 chassis의 원점을 중심으로 중앙에 배치되므로 이를 수정해야한다.

**Before**

![수정 전 chassis 위치](/assets/img/posts/gazebo-2-2-2-base-link-joint/3.png)

**After**

![수정 후 chassis 위치](/assets/img/posts/gazebo-2-2-2-base-link-joint/4.png)

따라서 네모 부분의 정 중앙에서 오른쪽 아래로 가려면 전 위치(before)의 좌표(바퀴가 있는 정 중앙에서 -1칸 이동한 좌표가 현재 좌표) 에서 x축으로 반 칸인 0.15를 이동해야한다.

그리고 y축은 그대로 z축은 반 칸 0.075 를 아래로 이동하면 된다.

따라서 수정한 코드는 아래와 같다.

```robot_core.xacro
<link name="chassis">
    <visual>
        <origin xyz="0.15 0 0.075"/> <!-- 수정한 코드 -->
        <geometry>
            <box size="0.3 0.3 0.15"/> <!-- 0.3m 0.3m 0.15m -->
        </geometry>
        <material name="white"/>
    </visual>
</link>
```

마지막으로 colcon build과 로봇 상태 게시자를 확인해보자

```bash
colcon build --symlink-install
```

![base_link와 chassis가 뜨는 모습](/assets/img/posts/gazebo-2-2-2-base-link-joint/5.png)

base_link와 chassis가 잘 뜨는 모습이다.

(xml 파일 다룰 땐 꼭 마지막 `/` 을 잘 쓰자.. 안닫힌 코드를 찾는다고 20분 날렸다..)
