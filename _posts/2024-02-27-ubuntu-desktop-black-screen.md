---
title: "데스크탑 우분투 실행시 검은색 화면"
excerpt: "RTX 그래픽카드 데스크탑에서 듀얼부팅 우분투가 검은 화면만 뜰 때 네트워크를 켜고 그래픽카드 드라이버를 다시 설치해 해결한 기록."
category: OS
tags: ["ubuntu", "troubleshooting"]
---

그래픽 카드가 달려있는 데스크탑에서 듀얼부팅으로 우분투를 실행하니까 검은색 화면만 나타나는 상황이다.

구글링을 해본 결과 내가 사용하고 있는 그래픽 카드의 RTX 시리즈가 우분투 UI와 잘 맞지 않아서 생기는 현상이였다.

### 화면이 뜨지 않는다. → 우분투 시큐리티로 실행

아래 명령어를 순서대로 입력한다.

`nmcli d` : 인터넷이 작동 중 인지 확인하는 명령어

`sudo systemctl start NetworkManager` : 인터넷 시작

### 우분투 터미널에서 실행

우분투에 그래픽카드 드라이버를 다 지우고 다시 설치하는 명령어이다.

```bash
sudo apt install build-essential
sudo apt-get remove --purge nvidia-*
sudo apt-get autoremove
sudo apt-get update
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt update
ubuntu-drivers devices
sudo apt install nvidia-driver-525
sudo apt update
sudo apt upgrade
sudo reboot
```
