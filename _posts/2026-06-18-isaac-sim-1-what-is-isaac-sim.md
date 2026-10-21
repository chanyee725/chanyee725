---
title: "Isaac Sim 1. Isaac Sim이란 무엇인가?"
excerpt: "NVIDIA Omniverse 기반 시뮬레이터 Isaac Sim의 물리 엔진, 지원 데이터 형식, 센서 정리."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "physx"]
---

📌

아래 문서는 [Isaac Sim Introduction](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/index.html) 링크를 참고하여 정리되었습니다. 버전 5.1.0 기준

Nvidia Omniverse 를 기반으로 구축된 애플리케이션이며, PhysX 엔진을 사용함.

→ [NVIDIA PhysX SDK](https://developer.nvidia.com/physx-sdk) 참고

데이터 형식은 다음을 지원함.

- [Tutorial: Import URDF — Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/importer_exporter/import_urdf.html#isaac-sim-app-tutorial-advanced-import-urdf)
- [Tutorial: Import MJCF — Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/importer_exporter/import_mjcf.html#isaac-sim-app-tutorial-advanced-import-mjcf)

센서는 다양하게 지원함. ( 카메라, LiDAR, 접촉 센서 등 )

## 참고 링크

- [[isaacsim.core.api] Isaac Sim Core — Isaac Sim](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/py/source/extensions/isaacsim.core.api/docs/index.html#isaacsim.core.prims.Articulation) ( Documents )
