---
title: "Gazebo 2. URDF로 모델 만들기"
excerpt: "source ./install/setup.bash가 무엇인지 알아보고, bashrc에 등록해 매번 source 하지 않게 만든 기록."
category: Robotics
series: "Gazebo"
tags: ["gazebo", "ros2", "urdf"]
---

이번 정리는 영상을 참고하여 만들었다.

## source ./install/setup.bash가 뭐지

항상 시작할 때 `source ./install/setup.bash` 를 실행하고 커맨드를 작성하길래 뭔지 찾아봤다.

- 리눅스나 유닉스 기반 시스템에서 bash 셸 스크립트 파일을 실행하는 명령어.
- 특정 스크립트 파일에 포함된 환경 변수, 함수, 별칭 등을 현재 셸 세션에 적용한다.

그래서 colcon build와는 차이점이 무엇인지 알아보니

- colcon build는 ROS 2에서 사용되는 빌드 도구라고 한다.

음 근데 계속해서 `source ~` 를 하기 귀찮으니 `gedit ~/.bashrc` 을 하여 셸이 시작될 때 마다 자동으로 되게끔 만들겠다.

```~/.bashrc
source ~/Desktop/<workspace>/install/setup.bash
```

## 이어지는 글

- [Gazebo 2-1. xacro 파일 잘 되는지 확인하기]({% post_url 2024-03-12-gazebo-2-1-xacro-check %})
- [Gazebo 2-2. robot_core.xacro 만들기]({% post_url 2024-03-12-gazebo-2-2-robot-core-xacro %})
