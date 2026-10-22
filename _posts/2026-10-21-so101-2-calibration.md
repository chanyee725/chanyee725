---
title: "SO-101 2. Calibration"
excerpt: "LeRobot으로 SO-101 Leader/Follower 포트를 찾고 Calibration 하는 커맨드."
category: Robotics
series: "SO-101"
tags: ["so-101", "lerobot", "calibration"]
---

> 참고 링크 : [SO-101 — LeRobot Documentation](https://huggingface.co/docs/lerobot/so101)

## 포트 권한

```bash
sudo usermod -aG dialout $USER   # 적용하려면 로그아웃 후 다시 로그인
```

## 포트 찾기

```bash
lerobot-find-port
```

## Follower Calibration

```bash
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=so101_follower_arm
```

## Leader Calibration

```bash
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=so101_leader_arm
```

> `id`는 Teleoperation 때도 같은 값을 써야 저장된 Calibration을 불러온다.

## Calibration 결과

Calibration 결과는 `~/.cache/huggingface/lerobot/calibration/` 아래에 JSON으로 저장된다.

### Follower

```json
{
    "shoulder_pan": {
        "id": 1,
        "drive_mode": 0,
        "homing_offset": -1541,
        "range_min": 814,
        "range_max": 3526
    },
    "shoulder_lift": {
        "id": 2,
        "drive_mode": 0,
        "homing_offset": 988,
        "range_min": 7,
        "range_max": 4091
    },
    "elbow_flex": {
        "id": 3,
        "drive_mode": 0,
        "homing_offset": -859,
        "range_min": 0,
        "range_max": 4094
    },
    "wrist_flex": {
        "id": 4,
        "drive_mode": 0,
        "homing_offset": -1142,
        "range_min": 120,
        "range_max": 2400
    },
    "wrist_roll": {
        "id": 5,
        "drive_mode": 0,
        "homing_offset": -568,
        "range_min": 0,
        "range_max": 4095
    },
    "gripper": {
        "id": 6,
        "drive_mode": 0,
        "homing_offset": 1838,
        "range_min": 2039,
        "range_max": 3578
    }
}
```

### Leader

```json
{
    "shoulder_pan": {
        "id": 1,
        "drive_mode": 0,
        "homing_offset": 2033,
        "range_min": 823,
        "range_max": 3408
    },
    "shoulder_lift": {
        "id": 2,
        "drive_mode": 0,
        "homing_offset": 1973,
        "range_min": 5,
        "range_max": 4090
    },
    "elbow_flex": {
        "id": 3,
        "drive_mode": 0,
        "homing_offset": 730,
        "range_min": 0,
        "range_max": 4094
    },
    "wrist_flex": {
        "id": 4,
        "drive_mode": 0,
        "homing_offset": 1811,
        "range_min": 125,
        "range_max": 2360
    },
    "wrist_roll": {
        "id": 5,
        "drive_mode": 0,
        "homing_offset": 1644,
        "range_min": 0,
        "range_max": 4095
    },
    "gripper": {
        "id": 6,
        "drive_mode": 0,
        "homing_offset": -1535,
        "range_min": 2037,
        "range_max": 3299
    }
}
```

## 다음

- [SO-101 3. Teleoperation]({% post_url 2026-10-21-so101-3-teleoperation %})
- [SO-101 4. Sim 환경 구성 준비]({% post_url 2026-10-22-so101-4-sim-setup %})
