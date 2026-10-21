---
title: "Jetson Nano 전원 안켜짐"
excerpt: "어댑터로 전원을 줬는데 Jetson Nano가 켜지지 않아 점프 케이블 위치를 바꿔 해결한 기록."
category: Hardware
tags: ["jetson-nano", "troubleshooting"]
thumbnail-img: /assets/img/posts/jetson-nano-power-issue/1.jpeg
---

Jetson nano에 전원을 어댑터로 주었는데 전원이 켜지지 않았다.

구글링을 통하여 어댑터 사용시 점프 케이블의 위치를 바꾸는 것이 해결법 이라는 것을 확인하고 바로 위치를 바꾸어 보았다.

**before**

![점프 케이블 위치 변경 전](/assets/img/posts/jetson-nano-power-issue/1.jpeg)

**after**

![점프 케이블 위치 변경 후](/assets/img/posts/jetson-nano-power-issue/2.jpeg)

그 결과

![전원 LED가 켜진 Jetson Nano](/assets/img/posts/jetson-nano-power-issue/3.jpeg)

잘 켜졌다.
