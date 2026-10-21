---
title: "Isaac Sim 3-7. EE 추가 방법"
excerpt: "Add Reference로 그리퍼 USD를 불러오고 Robot Assembler로 ur10e 끝에 End Effector를 붙이는 방법."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "gripper"]
thumbnail-img: /assets/img/posts/isaac-sim-3-7-add-end-effector/1.png
---

> End Effector 추가 방법에 대해 설명
> 
> 튜토리얼 링크 : [Tutorial 6: Setup a Manipulator — Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/robot_setup_tutorials/tutorial_import_assemble_manipulator.html)

앞에서 만든 USD 파일을 사용하여 EE 추가 방법에 대하여 설명함

File → Add → Add Reference 순서대로 실행하여 USD 파일을 가져옴

Open 사용 시 하나만 가져와짐

아래 사진처럼 가져오면 되며, base 가 될 ur10e 모델을 Set as Default Prim 으로 설정해줘야 함

![ur10e를 Set as Default Prim으로 설정](/assets/img/posts/isaac-sim-3-7-add-end-effector/1.png)

설정하면 아래와 같이 2개의 model 이 활성화 된 것을 확인할 수 있으며, 불러온 Gripper는 ur10e 모델 안에 추가됨

추가된 그리퍼는 오른쪽 사진에 빨간색 네모 박스 부분에 연결할 예정

![ur10e 모델 안에 추가된 그리퍼](/assets/img/posts/isaac-sim-3-7-add-end-effector/2.png)

![그리퍼를 연결할 위치](/assets/img/posts/isaac-sim-3-7-add-end-effector/3.png)

Gripper 를 빨간색 부분에 붙이기 위해 아래 순서를 따라 진행

Tools → Robotics → Asset Editors → Robot Assembler

![Tools → Robotics → Asset Editors → Robot Assembler](/assets/img/posts/isaac-sim-3-7-add-end-effector/4.png)

Robot Assembler 창이 켜지면 Base Robot과 Attach Robot 이 뜨는데 해당 값에는 연결할 Link 이름을 선택해주면 되며, 다 했다면 Assembly Namespace 에 해당 Joint 의 이름을 적어주고, Begin Assembling Process 클릭

![Robot Assembler 설정](/assets/img/posts/isaac-sim-3-7-add-end-effector/5.png)

옮겨진 것을 확인 후 각도를 올바르게 수정하여 **Assemble and Simulate** → **End Simulation And Finish** 순으로 클릭하면 완료

![그리퍼 위치와 각도 조정](/assets/img/posts/isaac-sim-3-7-add-end-effector/6.png)

![그리퍼가 붙은 ur10e](/assets/img/posts/isaac-sim-3-7-add-end-effector/7.png)
