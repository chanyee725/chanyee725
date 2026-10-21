---
title: "Carla Docs First steps"
excerpt: "CARLA 공식 문서 First steps를 따라 클라이언트 연결, 맵 로드, NPC 스폰, Ego 차량과 카메라 센서, 오토파일럿까지 실습한 기록."
category: Robotics
series: "CARLA"
tags: ["carla", "python"]
thumbnail-img: /assets/img/posts/carla-first-steps/1.png
---

## 준비 단계

1. 칼라를 실행한다. → **`cd carla/ && make launch`**
2. Unreal Engine가 켜졌다면 Play 버튼을 누르고 잠시 기다린다.  ![Unreal Engine에서 Play 누르기](/assets/img/posts/carla-first-steps/1.png)
3. 터미널을 열어 주피터 노트북을 실행한다.  ![주피터 노트북](/assets/img/posts/carla-first-steps/2.png)

## 공부 시작

CARLA 공식 문서의 First steps를 보면서 공부했고, First steps를 공부할 때 보면 도움이 되는 영상도 같이 참고했다.

## First steps 목차

![First steps 목차](/assets/img/posts/carla-first-steps/3.png)

### launching CARLA and connecting the client

```python
import carla
import random

client = carla.Client('localhost', 2000)
world = client.get_world()
```

최신 버전이라 뒤에 -dirty가 붙으면서 버전이 맞지 않다고 뜨는데, 경고니까 그냥 무시하고 넘어간다.

client 개체는 클라이언트와 서버의 연결을 유지하는 역할을 하며 명령을 적용하고 데이터를 로드하거나 내보내는 여러 기능을 가지고 있다.

코드를 보면 localhost와 2000이 있는데, 2000은 기본으로 설정되어 있는 것이며 localhost는 컴퓨터의 IP를 적어서 사용할 수 도있다.

→ world는 어떤 값을 가지고 있는지 궁금해서 print를 해보면 World(id=134123…)과 같이 출력된다.

### Loading a map

```python
client.load_world('Town05')
```

왜인지는 모르겠으나 실행하면 에러가 났는데, 그냥 실행시키고 기다리니까 맵이 로드되었다.

→ 컴퓨터가 별로 좋지 않아서 그런것 같다.

### Spectator navigation

코드를 실행하면 아래와 같이 관전자의 위치가 특정한 곳으로 이동하게 된다.

```python
spectator = world.get_spectator()

transform = spectator.get_transform()

location = transform.location
rotation = transform.rotation

spectator.set_transform(carla.Transform())
```

![관전자 위치 이동](/assets/img/posts/carla-first-steps/4.png)

### Adding NPCs

```python
vehicle_blueprints = world.get_blueprint_library().filter('*vehicle*')
```

→ Carla에 있는 모든 자동차의 청사진을 가지고온다.

```python
spawn_points = world.get_map().get_spawn_points()

for i in range(0,50):
    world.try_spawn_actor(random.choice(vehicle_blueprints), random.choice(spawn_points))
```

위 `vehicle_blueprints` 에 있는 자동차 50대를 랜덤하게 월드에 스폰한다.

또한 시뮬레이션에서 내가 제어할 차량을 `Ego 차량` 이라고 부른다.

Ego가 무슨뜻인진 모르겠지만 그렇게 부른다고 나와있다.

```python
ego_vehicle = world.spawn_actor(random.choice(vehicle_blueprints), random.choice(spawn_points))
```

위가 원래 코드인데 이렇게 하면 내가 만든 ego차량이 어떤 것 인지 모르기에 아래와 같이 코드를 수정해주었다.

```python
tesla = world.get_blueprint_library().find('vehicle.tesla.model3')

ego_vehicle = world.spawn_actor(tesla, random.choice(spawn_points))

spectator = world.get_spectator()
transform = carla.Transform(ego_vehicle.get_transform().transform(carla.Location(x=-4,z=2.5)),ego_vehicle.get_transform().rotation)
spectator.set_transform(transform)
```

위 코드는 tesla model3를 Ego차량으로 지정하고 랜덤하게 스폰한 뒤 차량뒤에 관전자를 스폰하는 코드이다.

또한 여기에 센서를 추가해서 이미지도 모을 수 있다.

![Ego 차량 뒤의 관전자 시점](/assets/img/posts/carla-first-steps/5.png)

### Add sensors

내가 지정한 Ego 차량에 카메라를 달아볼 것이다.

```python
camera_init_trans = carla.Transform(carla.Location(z=1.5))

camera_bp = world.get_blueprint_library().find('sensor.camera.rgb')

camera = world.spawn_actor(camera_bp, camera_init_trans, attach_to=ego_vehicle)
```

위 코드는 RGB카메라를 Ego 차량에 붙이는 코드이다.

또한 카메라를 붙였기 때문에 사진을 촬영할 수도 있어야하는데, `listen` 함수를 사용하여 구현할 수 있다.

```python
camera.listen(lambda image: image.save_to_disk('out/%06d.png' % image.frame))
```

out이라는 폴더안에 이미지를 저장하는 람다식 형태의 코드가 된다.

![out 폴더에 저장된 이미지 목록](/assets/img/posts/carla-first-steps/6.png)

![저장된 카메라 이미지](/assets/img/posts/carla-first-steps/7.png)

이렇게 사진이 저장되는 모습을 볼 수 있다.

### Animate vehicles with traffic manager

지금까지는 모든 차량들이 스폰된 상태에서 가만히 있었지만 이제는 모두 움직이게 할 것이다.

모든 차량에 오토파일럿을 켜준다고 생각하면 편하다.

```python
for vehicle in world.get_actors().filter('*vehicle*'):
    vehicle.set_autopilot(True)
```

실행해 보면 모든 차량이 잘 움직인다.

### Assign a vehicle as the Ego Vehicle

Ego 차량은 Carla를 사용할 때 가장 중요한 개념이다.

Ego Vehicle을 정의하려면 Ego Vehicle를 생성할 때 `role_name` 차량 `carla.Actor` 객체의 청사진 속성을 설정해야한다고 한다.

```python
ego_bp = world.get_blueprint_library().find('vehicle.lincoln.mkz_2020')

ego_bp.set_attribute('role_name', 'hero')

ego_vehicle = world.spawn_actor(ego_bp, random.choice(spawn_points))
```

이 아래부분은 따로 정리하지 않겠다.
