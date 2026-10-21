---
title: "Isaac Sim 트러블슈팅 2. Mimic Joint 떨림 및 IK 불안정 현상 해결"
excerpt: "Mimic Joint 떨림과 IK 불안정을 PhysX Solver Iteration(Position 64, Velocity 4)을 높여 해결한 기록."
category: 트러블슈팅
series: "Isaac Sim"
tags: ["isaac-sim", "ik", "troubleshooting"]
---

## 1. 발생 환경 (Environment)

- **Simulator:** Omniverse Isaac Sim
- **Target Component:** Mimic Joint가 포함된 로봇 파트 (예: Adaptive Gripper)
- **Task:** 역기구학(IK, Inverse Kinematics) 제어 및 물리 시뮬레이션

## 2. 문제 현상 (Issue & Symptom)

- 시뮬레이션 구동 중 **Mimic Joint 부위에서 지속적인 떨림(Jittering/Oscillation) 현상이 발생**함.
- 조인트의 물리적 불안정성이 로봇의 다른 링크로 전파되어, **전체적인 IK(Inverse Kinematics) 연산과 추종성까지 함께 불안정해지는 문제**로 이어짐.

## 3. 원인 분석 (Root Cause)

- **물리 엔진의 구속 조건 해석 미달 (Solver Convergence Issue):** 
  - Mimic Joint는 특정 조인트의 움직임이 다른 조인트의 움직임에 종속되도록 물리적 구속 조건(Constraint, Gear ratio 등)을 강제하는 방식입니다.
  - 기본으로 설정된 물리 엔진(PhysX)의 Solver Iteration(반복 연산 횟수) 값으로는 1프레임 내에 이 복잡한 종속 관계의 오차를 0으로 수렴(Converge)시키지 못합니다.
  - 결과적으로 미처 해결되지 못한 잔여 충돌/구속 오차가 조인트의 미세한 진동(떨림)으로 나타나게 됩니다.

## 4. 해결 방법 (Resolution)

- **PhysX Solver Iterations 상향 조정:** 
  - 물리 엔진이 1프레임당 구속 조건을 더 정확하게 계산하도록 관절(Articulation) 또는 Rigid Body의 Solver 값을 다음과 같이 높여주었습니다.
  - **Position Iteration:** `64` (기본값 대비 대폭 상향하여 위치 오차 최소화)
  - **Velocity Iteration:** `4` (속도 제어 안정성 확보)

## 5. 결과 (Result)

- Solver 값을 상향 조정한 후, 엔진이 Mimic Joint의 구속 조건을 충분히 계산해 내면서 **조인트의 떨림 현상이 완전히 사라짐.**
- 그리퍼 파트가 안정화됨에 따라, 이를 포함한 **전체 로봇의 IK 제어 역시 의도한 대로 부드럽고 안정적으로 동작**함.
