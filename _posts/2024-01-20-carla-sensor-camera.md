---
title: "CARLA 센서 - 카메라"
excerpt: "CARLA에서 Ego 차량에 RGB 카메라를 붙이고 관전자를 카메라 위치로 옮겨 보는 기초 사용법."
category: Robotics
series: "CARLA"
tags: ["carla", "sensor"]
thumbnail-img: /assets/img/posts/carla-sensor-camera/1.png
---

첫 번째는 가장 기초적인 RGB 카메라에 대한 사용법 부터 알아보도록 하겠다.

## RGB 카메라 사용 법

```python
import carla
import math
import random
import time
import numpy as np
import cv2

client = carla.Client('localhost', 2000)
world = client.get_world()

bp_lib = world.get_blueprint_library()
spawn_points = world.get_map().get_spawn_points()

vehicle_bp = bp_lib.find('vehicle.tesla.model3') # 테슬라 모델 3를 Ego로 설정
vehicle = world.try_spawn_actor(vehicle_bp, random.choice(spawn_points))

spectator = world.get_spectator()
transform = carla.Transform(vehicle.get_transform().transform(carla.Location(x=-4,z=2)),vehicle.get_transform().rotation)
spectator.set_transform(transform)
```

위 코드는 칼라와 연결을 해서 Ego 차량을 설정하고, 관전자를 Ego 차량뒤에 소환하는 코드이다.

실행화면

![Ego 차량 뒤로 이동한 관전자](/assets/img/posts/carla-sensor-camera/1.png)

조금 어둡지만 차량뒤에 관전자가 이동한 모습을 볼 수 있다.

```python
camera_bp = bp_lib.find('sensor.camera.rgb')
camera_init_trans = carla.Transform(carla.Location(z=2))
camera = world.spawn_actor(camera_bp, camera_init_trans, attach_to=vehicle)
```

차량에 RGB 카메라를 z=2인 위치에 부착하는 코드이다.

코드를 조금 뜯어보자면

`camera_bp` 라는 변수에는 RGB 카메라에 대한 블루프린트 라이브러리 이름이 들어있다.

`camera_init_trans` 라는 변수에는 카메라의 위치를 z=2로 설정한다.

`camera`는 `vehicle`에 `camera_bp`를 `camera_init_trans`에서 지정한 위치에 카메라를 스폰하겠다.

이때 vehicle는 위에서 설정한 Ego 차량인 테슬라 모델 3가 된다.

만약 내가 카메라를 설정한 위치로 이동해보고 싶다면 아래 코드를 실행해보자.

코드

```
spectator.set_transform(camera.get_transform())
```

맨 위에서 정의한 관전자 변수를 카메라의 위치를 얻고 이동하는 코드이다.

![카메라 위치로 이동한 관전자](/assets/img/posts/carla-sensor-camera/2.png)
