---
title: "Isaac Sim 3-2. 정밀 제어 설정"
excerpt: "root_joint Property에서 Solver Iteration, Sleep Threshold, Stabilization Threshold 값을 조정해 시뮬레이션 정밀도를 높이는 방법."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "physics"]
thumbnail-img: /assets/img/posts/isaac-sim-3-2-solver-precision/1.png
---

> 시뮬레이션 Solver 설정 값 업데이트 방법

ur10e_robot 에 대한 시뮬레이션 값 조정을 위해선 base model 의 root_joint Property 값에서 수정할 수 있음 ( 아래 총 4개의 값 수정 필요 )

> 공식 문서에는 mimic joint 또는 자유도가 높으면 solver 값을 높이라고 되어있음.
> 
> [Articulations — PhysX SDK Documentation](https://nvidia-omniverse.github.io/PhysX/physx/5.6.0/docs/Articulations.html#articulation-drive-stability) 참고 링크

`Position Iteration Solver` : 위치 솔버 ( 기하학적 결합 조건 계산 )

`Velocity Iteration Solver` : 속도, 충돌 솔버 ( 속도 변화, 마찰력, 충돌 계산 )

`Sleep Threshold` : 로봇이 움직이지 않을 때 멈추는 시간 낮추기 ( [Rigid Body Dynamics — PhysX SDK Documentation](https://nvidia-omniverse.github.io/PhysX/physx/5.6.0/docs/RigidBodyDynamics.html#sleeping) )

`Stabilization Threshold` : 끊기는 현상 없이 부드럽고 정확하게 움직일 수 있도록 만드는 설정 ( [Articulations — PhysX SDK Documentation](https://nvidia-omniverse.github.io/PhysX/physx/5.6.0/docs/Articulations.html#articulation-drive-stability) )

![root_joint Physics 속성의 Solver 값](/assets/img/posts/isaac-sim-3-2-solver-precision/1.png)

해당 값을 수정하면 해당 USD 파일이 위치한 configuration/ 폴더 안 _physics 파일이 업데이트 되며, 해당 파라미터 값 설정 시 문제가 있다면 해당 문서 참고 [Best Practices Guide — PhysX SDK Documentation](https://nvidia-omniverse.github.io/PhysX/physx/5.6.0/docs/BestPractices.html#jointed-objects-are-unstable)

![configuration 폴더 안 _physics 파일](/assets/img/posts/isaac-sim-3-2-solver-precision/2.png)
