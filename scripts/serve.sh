#!/usr/bin/env bash
# 로컬 미리보기: http://localhost:4000/  (끄기: Ctrl+C)
# _config.yml을 고쳤으면 껐다가 다시 실행한다. 다른 파일은 저장하면 바로 반영된다.
set -euo pipefail
cd "$(dirname "$0")/.."

# conda의 jekyll 환경(Ruby)을 쓴다
if [ -d "$HOME/miniforge3/envs/jekyll/bin" ]; then
  export PATH="$HOME/miniforge3/envs/jekyll/bin:$PATH"
fi

bundle install --quiet
exec bundle exec jekyll serve --livereload --config _config.yml,_config.dev.yml "$@"
