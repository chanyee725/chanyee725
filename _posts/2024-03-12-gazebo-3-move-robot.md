---
title: "Gazebo 3. 가상에서 로봇 움직여보기"
excerpt: "use_sim_time으로 Gazebo에 로봇을 띄우고, launch 파일로 명령을 묶은 뒤 diff_drive 플러그인과 teleop으로 움직여 본 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2"]
thumbnail-img: /assets/img/posts/gazebo-3-move-robot/1.png
---

가상에서 Gazebo를 움직이려면 `use_sim_time:=true` 로 설정하면 된다.

```bash
ros2 launch bssm_daux rsp.launch.py use_sim_time:=true
```

![use_sim_time으로 launch한 출력](/assets/img/posts/gazebo-3-move-robot/1.png)

- use_sim_time은 가상환경의 시간을 사용하는 것? 찾아보니 이런 느낌으로 나왔다.
- 동기화 느낌이라고 보면 될 것 같다.

그리고 위에서 나의 로봇을 gazebo에 띄우려면 아래 명령어를 입력한다.

```bash
ros2 launch gazebo_ros gazebo.launch.py
```

만약 실행이 잘 되지 않는다면 아래 명령어를 실행하고 다시 시도해보자

```bash
sudo apt install ros-foxy-gazebo-ros-pkgs
```

그럼 아래처럼 gazebo 창이 잘 뜨는 것을 확인할 수 있다.

![빈 gazebo 창](/assets/img/posts/gazebo-3-move-robot/2.png)

다음으로 gazebo에 내 로봇을 띄우려먼 아래 명령어를 입력한다.

```bash
ros2 run gazebo_ros spawn_entity.py -topic robot_description -entity bot_name
```

![spawn_entity 실행 출력](/assets/img/posts/gazebo-3-move-robot/3.png)

![gazebo에 로봇이 뜬 모습](/assets/img/posts/gazebo-3-move-robot/4.png)

잘 나온다.

## 아 귀찮다..

![지금까지 입력한 명령어들](/assets/img/posts/gazebo-3-move-robot/5.png)

지금까지 gazebo에 로봇을 띄울려면 위와 같은 명령어를 모두 입력해야한다.

그래서 너무 귀찮다는 것인데, 이를 하나의 파일 `launch_sim.launch.py` 을 만들고 아래 코드를 복붙해서 넣어주자.

```launch_sim.launch.py
import os

from ament_index_python.packages import get_package_share_directory

from launch import LaunchDescription
from launch.actions import IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource

from launch_ros.actions import Node

def generate_launch_description():
    package_name='bssm_daux' #<--- CHANGE ME

    # ros2 launch bssm_daux rsp.launch.py use_sim_time:=true 실행 명령어
    rsp = IncludeLaunchDescription(
                PythonLaunchDescriptionSource([os.path.join(
                    get_package_share_directory(package_name),'launch','rsp.launch.py'
                )]), launch_arguments={'use_sim_time': 'true'}.items()
    )

    # ros2 launch gazebo_ros gazebo.launch.py 커맨드 실행 명령어
    gazebo = IncludeLaunchDescription(
                PythonLaunchDescriptionSource([os.path.join(
                    get_package_share_directory('gazebo_ros'), 'launch', 'gazebo.launch.py')]),
             )

    # ros2 run gazebo_ros spawn_entity.py -topic robot_description -entity bot_name 실행 명령어
    spawn_entity = Node(package='gazebo_ros', executable='spawn_entity.py',
                        arguments=['-topic', 'robot_description',
                                   '-entity', 'my_bot'],
                        output='screen')

    # 전체 실행
    return LaunchDescription([
        rsp,
        gazebo,
        spawn_entity,
    ])
```

colcon build를 진행하고 아래 명령어를 실행시킨다.

```bash
ros2 launch bssm_daux launch_sim.launch.py
```

![launch_sim 실행 출력](/assets/img/posts/gazebo-3-move-robot/6.png)

![launch_sim으로 뜬 gazebo 화면](/assets/img/posts/gazebo-3-move-robot/7.png)

실행이 잘 된다.

## 로봇 컨트롤 플러그인 추가하기

`robot_control.xacro` 파일을 만들고 아래와 같이 적어준다.

```robot_control.xacro
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro" name="robot">

    <gazebo>
        <plugin name="diff_drive" filename="libgazebo_ros_diff_drive.so">
            <!-- Wheel information -->
            <left_joint>left_wheel_joint</left_joint>
            <right_joint>right_wheel_joint</right_joint>
            <wheel_separation>0.35</wheel_separation> <!-- 바퀴 분리 -->
            <wheel_diameter>0.1</wheel_diameter> <!-- 바퀴 직경 -->

            <!-- Limits -->
            <max_wheel_torque>200</max_wheel_torque> <!-- 토크 설정 -->
            <max_wheel_acceleration>4.0</max_wheel_acceleration> <!-- 가속력 -->

            <!-- Output -->
            <odometry_frame>odom</odometry_frame> <!-- 주행 거리 측정 -->
            <robot_base_frame>base_link</robot_base_frame> <!-- 몰랑 -->

            <publish_odom>true</publish_odom> <!-- 거리 측정 메시지 -->
            <publish_odom_tf>true</publish_odom_tf> <!-- odom tf -->
            <publish_wheel_tf>true</publish_wheel_tf> <!-- 자동차 휠 좌표 ㅌ-->

        </plugin>
    </gazebo>

</robot>
```

그리고 아래 명령어를 실행하여 로봇을 움직여보자

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```

![teleop_twist_keyboard로 로봇을 움직이는 화면](/assets/img/posts/gazebo-3-move-robot/8.png)
