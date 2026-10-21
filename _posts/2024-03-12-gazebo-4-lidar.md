---
title: "Gazebo 4. LiDAR 사용해보기"
excerpt: "lidar.xacro로 레이 센서를 붙이고 LaserScan 데이터를 rviz2에서 확인한 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf", "lidar", "rviz2"]
thumbnail-img: /assets/img/posts/gazebo-4-lidar/1.png
---

## lidar.xacro 파일 만들기

```lidar.xacro
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro" >

    <joint name="laser_joint" type="fixed">
        <parent link="chassis"/>
        <child link="laser_frame"/>
        <origin xyz="0.1 0 0.175" rpy="0 0 0"/>
    </joint>

    <link name="laser_frame">
        <visual>
            <geometry>
                <cylinder radius="0.05" length="0.04"/>
            </geometry>
            <material name="red"/>
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

    <gazebo reference="laser_frame">
        <material>Gazebo/Red</material>

        <sensor name="laser" type="ray">
            <pose> 0 0 0 0 0 0 </pose>
            <visualize>true</visualize>
            <update_rate>10</update_rate>
            <ray>
                <scan>
                    <horizontal>
                        <samples>360</samples> <!-- 360도 -->
                        <min_angle>-3.14</min_angle>
                        <max_angle>3.14</max_angle>
                    </horizontal>
                </scan>
                <range>
                    <min>0.3</min> <!-- 3m ~ 12 -->
                    <max>12</max>
                </range>
            </ray>
            <plugin name="laser_controller" filename="libgazebo_ros_ray_sensor.so">
                <ros>
                    <argument>~/out:=scan</argument>
                </ros>
                <output_type>sensor_msgs/LaserScan</output_type>
                <frame_name>laser_frame</frame_name>
            </plugin>
        </sensor>
    </gazebo>

</robot>
```

![LiDAR가 달린 로봇을 gazebo에서 본 모습](/assets/img/posts/gazebo-4-lidar/1.png)

![gazebo에서 레이가 퍼지는 모습](/assets/img/posts/gazebo-4-lidar/2.png)

마지막으로 rviz2도 같이 실행해서 LiDAR 데이터를 확인해보자

위 코드에서 output type으로는 LaserScan로 이름은 scan으로 하여 rviz에서 Add → Laser → topic: /Scan 으로 설정하면 아래처럼 된다.

만약 빨간색이 잘 보이지 않는다면 Size(m)을 0.05 이상으로 설정해주자

![rviz2에서 본 LaserScan 데이터](/assets/img/posts/gazebo-4-lidar/3.png)
