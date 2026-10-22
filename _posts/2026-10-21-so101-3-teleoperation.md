---
title: "SO-101 3. Teleoperation"
excerpt: "LeRobot으로 SO-101 Leader arm을 움직여 Follower arm을 따라오게 하는 Teleoperation 커맨드."
category: Robotics
series: "SO-101"
tags: ["so-101", "lerobot", "teleoperation"]
---

> 참고 링크 : [SO-101 — LeRobot Documentation](https://huggingface.co/docs/lerobot/so101)

## Teleoperation

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=so101_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=so101_leader_arm
```

## 이전

- [SO-101 1. 환경 구축]({% post_url 2026-10-21-so101-1-environment %})
- [SO-101 2. Calibration]({% post_url 2026-10-21-so101-2-calibration %})

## 다음

- [SO-101 4. Sim 환경 구성 준비]({% post_url 2026-10-22-so101-4-sim-setup %})
