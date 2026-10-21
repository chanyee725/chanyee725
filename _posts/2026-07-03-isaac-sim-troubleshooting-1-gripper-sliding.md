---
title: "Isaac Sim 트러블슈팅 1. Mycobot 280pi 그리퍼 밀림 현상 해결"
excerpt: "Mycobot 280pi와 Adaptive Gripper가 뒤로 밀리는 현상을 링크와 조인트의 Mass 값을 조정해 해결한 기록."
category: 트러블슈팅
series: "Isaac Sim"
tags: ["isaac-sim", "mycobot", "troubleshooting"]
---

## 1. 발생 환경 (Environment)

- **Simulator:** Omniverse Isaac Sim
- **Robot Model:** Elephant Robotics Mycobot 280pi
- **End Effector:** Adaptive Gripper
- **Task:** 로봇 학습(RL/Motion Planning) 환경 구축

## 2. 문제 현상 (Issue & Symptom)

- Isaac Sim 환경 내에 Mycobot 280pi 모델과 Adaptive Gripper를 로드하여 시뮬레이션을 실행했을 때, 로봇 베이스가 고정되지 않고 **로봇 전체 또는 그리퍼 파트가 뒤로 밀리는 현상(Sliding)이 발생**함.
- 정상적인 로봇 제어 및 강화학습/모션 플래닝 테스트를 진행할 수 없는 상태.

## 3. 원인 분석 (Root Cause)

- **물리 엔진의 질량 불균형 (Physics Instability):** 
  - Isaac Sim(PhysX 엔진)에서 로봇을 구성하는 각 링크(Link)와 조인트(Joint)의 Rigid Body 속성 중 질량(Mass) 값이 비정상적으로 작거나 크게 설정된 경우 발생.
  - 특히, 베이스 모델(Mycobot)과 부착된 엔드 이펙터(Adaptive Gripper) 간의 질량 비율(Mass Ratio) 차이가 크거나 관성 텐서(Inertia Tensor)가 물리적 현실성과 어긋날 때, 시뮬레이터가 충돌 및 반발력을 계산하는 과정에서 불안정성이 발생하여 모델이 튕기거나 밀려남.

## 4. 해결 방법 (Resolution)

- **Rigid Body 질량(Mass) 파라미터 튜닝:** 
  - 로봇 본체(Robot Joint)와 그리퍼 파트(Gripper Joint)의 Property 탭으로 이동하여 Physics (Rigid Body) 속성 확인.
  - 물리 시뮬레이션이 안정적으로 계산될 수 있도록 (또는 실제 하드웨어 스펙에 근접하도록) **로봇 조인트 및 그리퍼 조인트의 Mass 값을 적절한 비율로 상향/하향 조정**함.

## 5. 결과 (Result)

- Mass 값 수정 후 시뮬레이션을 재실행한 결과, 물리 엔진 연산이 안정화됨.
- 더 이상 로봇이 뒤로 밀리지 않고 **정위치에 안정적으로 고정**되며, 의도한 대로 조인트 제어 및 학습 환경 구동이 가능해짐.
