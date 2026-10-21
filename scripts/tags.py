#!/usr/bin/env python3
"""태그 점검: 태그별 글 수와, 겹칠 수 있는 비슷한 태그를 보여 준다.

    python3 scripts/tags.py

규칙 (README에도 있음)
- category = 큰 영역 (Robotics, Hardware, OS, 트러블슈팅 …), 글 하나에 하나
- series   = 그 안의 파트 (Gazebo, Isaac Sim …)
- tags     = 기술 키워드, 영어 소문자-하이픈 (isaac-sim, ros2), 글 하나에 5개 이하
"""
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
counts = Counter()
posts_by_tag = defaultdict(list)
too_many = []

for p in sorted((ROOT / "_posts").glob("*.md")):
    head = p.read_text(encoding="utf-8").split("---")[1]
    m = re.search(r"^tags:\s*\[(.*?)\]", head, re.M)
    tags = [t.strip().strip("\"'") for t in m.group(1).split(",") if t.strip()] if m else []
    for t in tags:
        counts[t] += 1
        posts_by_tag[t].append(p.name)
    if len(tags) > 5:
        too_many.append((p.name, tags))

print(f"태그 {len(counts)}개\n")
for t, n in counts.most_common():
    print(f"  {n:3d}  {t}")

# 비슷한 태그: 대소문자·하이픈·밑줄·공백·끝 숫자를 지우면 같아지는 것
key = lambda t: re.sub(r"[\s_\-]+", "", t.lower()).rstrip("0123456789")
groups = defaultdict(list)
for t in counts:
    groups[key(t)].append(t)
similar = [g for g in groups.values() if len(g) > 1]
bad_form = [t for t in counts if t != t.lower() or " " in t or "_" in t]

print("\n겹칠 수 있는 태그:", "없음" if not similar else "")
for g in similar:
    print("  ", " / ".join(f"{t}({counts[t]})" for t in g))
print("규칙에 안 맞는 표기 (대문자·공백·밑줄):", ", ".join(bad_form) or "없음")
print("태그가 5개를 넘는 글:", "없음" if not too_many else "")
for name, tags in too_many:
    print("  ", name, tags)
print("한 번만 쓴 태그:", ", ".join(t for t, n in counts.items() if n == 1) or "없음")
