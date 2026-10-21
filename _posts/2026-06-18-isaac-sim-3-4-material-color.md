---
title: "Isaac Sim 3-4. Material 색 편집 방법"
excerpt: "OmniPBR 재질을 만들고 Albedo Color로 색을 정한 뒤 Materials on selected models로 Prim에 적용하는 방법."
category: Robotics
series: "Isaac Sim"
tags: ["isaac-sim", "material"]
thumbnail-img: /assets/img/posts/isaac-sim-3-4-material-color/1.png
---

> Material 색 설정 및 편집 방법

![Create → Materials → OmniPBR 메뉴](/assets/img/posts/isaac-sim-3-4-material-color/1.png)

Create → Materials → OmniPBR

위처럼 추가하면 Stage Looks/ 폴더 안에 OmniPBR 이라는 새로운 재질이 추가됨

아래 새로 생성된 OmniPBR ( 재질 ) 은 원하는 Material 에 맞게 이름을 수정해주면 됨

예시 : body, wheel

![Looks 폴더 안에 추가된 OmniPBR](/assets/img/posts/isaac-sim-3-4-material-color/2.png)

Wheel 에 대한 재질을 설정한다고 가정한다면 OmniPBR → wheel 로 이름 수정 후 아래와 같이 Albedo 칸을 열어 색을 설정할 수 있음

나머지 설정은 해보지 않아 추가로 필요한 부분은 구글링하면서 찾아보면 될 듯 함

현재 설정 값은 찐한 파란색으로 되어있으며, 색상은 Albedo Color 맨 오른쪽에서 확인 가능함

![Albedo Color 설정](/assets/img/posts/isaac-sim-3-4-material-color/3.png)

색상 설정이 완료되었다면 아래와 사진과 같이 적용할 Material 클릭 후 Materials on selected models 탭에서 빨간색 네모 박스가 쳐진 칸에 Looks/wheel 을 클릭하면 적용 됨

![Materials on selected models에서 Looks/wheel 선택](/assets/img/posts/isaac-sim-3-4-material-color/4.png)

적용된 모습 이며, 빛이 주황색으로 설정 되어있어, 설정한 재질 색상값과 조금 다를 수 있음

![재질이 적용된 바퀴](/assets/img/posts/isaac-sim-3-4-material-color/5.png)
