---
title: "Gazebo 2-1. xacro 파일 잘 되는지 확인하기"
excerpt: "robot.urdf.xacro에 base_link 하나만 두고 launch로 잘 실행되는지 확인한 뒤 robot_core.xacro를 include하도록 바꾼 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "xacro"]
thumbnail-img: /assets/img/posts/gazebo-2-1-xacro-check/1.png
---

```robot.urdf.xacro
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro"  name="robot">

    <!-- Example link -->
    <link name="base_link"></link>

</robot>
```

위 코드는 `robot.urdf.xacro` 파일이다.

xacro 파일이 잘 실행이 되는지 확인하기 위해선 아래와 같은 명령어를 실행한다.

```bash
ros2 launch bssm_daux rsp.launch.py
```

그럼 내가 만든 link의 name인 `base_link`가 잘 만들어진 것을 확인할 수 있다.

![launch 실행 결과에 base_link가 보이는 화면](/assets/img/posts/gazebo-2-1-xacro-check/1.png)

이제 잘 되는지 확인을 했으니 지금 파일은 아래 처럼 수정하고 `robot_core.xacro` 파일을 만들어 보도록 하겠다.

```robot.urdf.xacro
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro"  name="robot">

    <xacro:include filename="robot_core.xacro">

</robot>
```

다음 글: [Gazebo 2-2. robot_core.xacro 만들기](/posts/gazebo-2-2-robot-core-xacro)
