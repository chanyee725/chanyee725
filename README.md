### Hi, I'm an AI robotics researcher 🤖

I got hooked on Physical AI at work and now study **Vision-Language-Action (VLA)** models hands-on.
After hours, I run experiments on a low-cost **SO-101** arm with **LeRobot**, asking why VLA policies work and where they break.

- **Focus:** safe robot learning, and using LLMs to write robot policies
- **Now:** studying the math behind VLA (linear algebra, backprop) and logging one demo every two weeks
- **Stack:** Python, PyTorch, ROS 2, MuJoCo · Isaac Sim · Gazebo

This repository is also my portfolio site, where I keep that log.

<details>
<summary>About this repo</summary>

Jekyll + [Beautiful Jekyll](https://beautifuljekyll.com) 6.0.1 (MIT, see `LICENSE`), deployed on Vercel on every push to `main` (`vercel.json`).

- New post: copy `templates/post.md` to `_posts/YYYY-MM-DD-name.md` and fill in `title`, `excerpt`, `category`, `tags` (optional `thumbnail-img` from `assets/img/`).
- Post metadata: `category` = area (Robotics, Hardware, OS, 트러블슈팅), `series` = part inside it (Gazebo, Isaac Sim), `tags` = lowercase-hyphen tech keywords (`isaac-sim`, `ros2`), at most 5 per post. Run `python3 scripts/tags.py` to list tags and catch near-duplicates before committing.
- Profile, education, career and awards: `_data/profile.yml`.
- Setup (once): `./scripts/setup.sh` installs Ruby in the `jekyll` conda env and the gems into `vendor/bundle`.
- Local preview: `./scripts/serve.sh` → http://localhost:4000/ (restart after editing `_config.yml`).
- Styles: `assets/css/custom.css`. When a domain is connected, set `url` in `_config.yml`.

</details>
