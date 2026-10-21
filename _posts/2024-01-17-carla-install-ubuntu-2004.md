---
title: "Carla 다운로드 하는 법 (Ubuntu 20.04)"
excerpt: "Ubuntu 20.04에서 CARLA 0.9.15를 소스로 받아 빌드하고 139 에러를 그래픽 드라이버 재설치로 해결하는 과정."
category: Robotics
series: "CARLA"
tags: ["carla", "ubuntu"]
thumbnail-img: /assets/img/posts/carla-install-ubuntu-2004/1.png
---

CARLA 문서에 접속하여 오른쪽 아래 있는 `latest` 를 `0.9.15`로 바꾸어준다.

![CARLA 문서 버전 선택](/assets/img/posts/carla-install-ubuntu-2004/1.png)

링크에 들어가고 나서 내리다보면 아래 화면이 뜨게 되는데 여기서 부터 모두 복붙을 하여주면 된다.

![CARLA 빌드 문서](/assets/img/posts/carla-install-ubuntu-2004/2.png)

그리고 우분투 버전이 20.04이기 때문에 자신의 버전에 맞게 다운로드 하여준다.

![Ubuntu 버전별 설치 명령](/assets/img/posts/carla-install-ubuntu-2004/3.png)

혹시 모르니 그냥 Pip3도 업그레이드 시켜준다.

![pip 업그레이드와 Python 의존성](/assets/img/posts/carla-install-ubuntu-2004/4.png)

## Unreal Engine

![Unreal Engine 설치 안내](/assets/img/posts/carla-install-ubuntu-2004/5.png)

Unreal Engine을 clone 받을 때 한 가지를 해야한다.

위 문장을 잘 읽어본다면 **you need to have a GitHub account linked to Unreal Engine's account**.

→ 깃허브 계정이 있어야 하며 너의 계정이 언리얼 엔진을 팔로우 해야 한다는 소리이다.

그냥 에픽게임즈 계정 만들고 깃허브랑 연동시키면 알아서 해준다. (혹시 모르겠다면 문서의 **this guide** 참고)

## Carla

![CARLA 빌드 안내](/assets/img/posts/carla-install-ubuntu-2004/6.png)

여기서 부터는 `cd ~` 를 해준 상태에서 진행을 하여야한다.

아래 명령어들을 전부 입력해주고 나면 `make launch` 라는 명령어가 있을 텐데 실행하고 조금 기다리면 언리얼 엔진이 실행될 것이다.

### 혹시나 실행도중에 139 error가 뜬다?

→ 그래픽카드 드라이버가 제대로 깔려있지 않을 확률이 높다.

> 그래픽카드 확인하는 방법: 터미널에 `nvidia-smi` 를 실행 (잘 나타나지 않으면 아래 명령어 실행)

따라서 아래 명령어들을 차례대로 입력해준다. (그래픽카드 드라이버 지우고 다시 설치하는 명령)

```bash
sudo apt install build-essential
sudo apt-get remove --purge nvidia-*
sudo apt-get autoremove
sudo apt-get update
sudo apt-get update
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt update
ubuntu-drivers devices
sudo apt install nvidia-driver-525
sudo apt update
sudo apt upgrade
sudo reboot
```

그리고 다시 `cd carla/ && make launch` 명령어를 실행하여 기다리면 된다.
