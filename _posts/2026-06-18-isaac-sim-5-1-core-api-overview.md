---
title: "Isaac Sim 5-1. Core API Overview"
excerpt: "pxr 패키지로 Physics Scene, PhysX 설정, Ground Plane, Cube와 Rigid Body를 코드로 만드는 Core API 예제를 주석으로 정리."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "python"]
---

> 참고 링크 : [Core API Overview — Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/python_scripting/core_api_overview.html)

코드에 대한 설명은 주석으로 대체

```python
from pxr import UsdPhysics, PhysxSchema, Gf, PhysicsSchemaTools, UsdGeom
import omni # 이건 설명하지 않음 

"""
`pxr` : 픽사에서 raw usd 파일을 제어하기 위해 만든 pkg 명

`UsdPhysics` : 기본 Physics 스키마 ( Rigid body, Collider, Joint 기본 설정 ) 

`PhysxSchema` : PhysX 엔진에 사용되는 API ( Solver 등 ) 

`Gf` : 수학 관련 패키지 

`PhysicsSchemaTools` : Physics 편의 함수 ( Joint 생성 ) 

`UsdGeom` : 기하학
"""
```

```python
stage = omni.usd.get_context().get_stage()  # 현재 stage 에 있는 모든걸 가져옴 

# Setting up Physics Scene
gravity = 9.8  # 중력 값은 9/8로 설정
scene = UsdPhysics.Scene.Define(stage, "/World/physics") # World/ 하위에 Physics Material 추가
scene.CreateGravityDirectionAttr().Set(Gf.Vec3f(0.0, 0.0, -1.0))  # 중력은 아래로 향하도록 설정 
scene.CreateGravityMagnitudeAttr().Set(gravity)  # 중력 적용 
```

```python
# PhysX 스키마 적용
PhysxSchema.PhysxSceneAPI.Apply(stage.GetPrimAtPath("/World/physics"))

# PhysX 설정 객체 가져오기
physxSceneAPI = PhysxSchema.PhysxSceneAPI.Get(stage, "/World/physics")

physxSceneAPI.CreateEnableCCDAttr(True)
physxSceneAPI.CreateEnableStabilizationAttr(True)
physxSceneAPI.CreateEnableGPUDynamicsAttr(False)
physxSceneAPI.CreateBroadphaseTypeAttr("MBP")
physxSceneAPI.CreateSolverTypeAttr("TGS")
```

설명

`CreateEnableCCDAttr` : 연속 충돌 감지 설정 ( 대부분 True 로 설정 )

- CCD : Continuous Collision Detection

`CreateEnableStabilizationAttr` : Material 안정화?

- 물체 떨림 안정화

`CreateEnableGPUDynamicsAttr` : GPU 활성화

- False : Cpu 사용

`CreateBroadphaseTypeAttr` : Broadphase 알고리즘 선택

- Broadphase 알고리즘은 충돌 가능성을 찾는 알고리즘임

| Type | 이름 | 특징 | 추천 상황 |
|---|---|---|---|
| MBP | Multi-Box Pruning | 움직이는 물체가 많을 때 안정적 | 대부분 추천 |
| SAP | Sweep and Prune | 정지한 물체가 많을 때 빠름 | 정적인 장면 |
| ABP | Automatic Box Pruning | MBP의 자동 버전 | PhysX에서 좋음 |

`CreateSolverTypeAttr` : 접촉, 마찰, Joint 제약 계산 엔진 설정

| Solver | 이름 | 특징 | 추천도 |
|---|---|---|---|
| TGS | Temporal Gauss-Seidel | 수렴이 빠르고 안정적, 고질량 비율 처리 좋음, Joint 정확도 높음 | 보통 많이 사용함 |
| PGS | Projected Gauss-Seidel | 오래된 방식, TGS 보다 약간 빠를 수 있음 | 구버전 호환용 |

```python
# Setting up Ground Plane
PhysicsSchemaTools.addGroundPlane(
    stage,                     # 현재 stage 에 추가 
    "/World/groundPlane",      # 생성 위치 
    "Z",                       # 수평으로 생성
    15,                        # 15 x 15 m 
    Gf.Vec3f(0,0,0),           # 중심 위치 
    Gf.Vec3f(0.7)              # 색상 
)
```

```python
path = "/World/Cube"                          # 생성 위치 
cubeGeom = UsdGeom.Cube.Define(stage, path)   # Cube 생성 
cubePrim = stage.GetPrimAtPath(path)          # Prim 가져오기 

size = 0.5                                    # 사이즈 설정
cubeGeom.CreateSizeAttr(size)

offset = Gf.Vec3f(0.5,0.2,1.0)                # 위치 이동
cubeGeom.AddTranslateOp().Set(offset)
```

```python
# Cube Prim 에 RigidBody 설정 
rigid_api = UsdPhysics.RigidBodyAPI.Apply(cubePrim)
rigid_api.CreateRigidBodyEnabledAttr(True)

UsdPhysics.CollisionAPI.Apply(cubePrim)
```

```python
import numpy as np
from isaacsim.core.api.objects import DynamicCuboid

# 새로운 Cube 추가
DynamicCuboid(
   prim_path="/new_cube_2",
   name="cube_1",
   position=np.array([0, 0, 1.0]),
   scale=np.array([0.6, 0.5, 0.2]),
   size=1.0,
   color=np.array([255, 0, 0]),
)
```
