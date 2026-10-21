#!/usr/bin/env bash
# 로컬 미리보기 환경 설치: conda의 jekyll 환경(Ruby)을 만들고 gem을 깐다.
# 한 번만 실행하면 되고, 다시 실행해도 안전하다. 끝나면 ./scripts/serve.sh
set -euo pipefail
cd "$(dirname "$0")/.."

ENV_NAME=jekyll
CONDA_ROOT="$HOME/miniforge3"

# conda(miniforge)가 없으면 설치한다
if [ ! -x "$CONDA_ROOT/bin/conda" ]; then
  echo "miniforge 설치: $CONDA_ROOT"
  installer="$(mktemp -d)/miniforge.sh"
  curl -fsSL -o "$installer" \
    "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
  bash "$installer" -b -p "$CONDA_ROOT"
  rm -f "$installer"
fi
CONDA="$CONDA_ROOT/bin/conda"
[ -x "$CONDA_ROOT/bin/mamba" ] && CONDA="$CONDA_ROOT/bin/mamba"

# Ruby + 네이티브 gem(commonmarker, eventmachine) 빌드용 컴파일러
if [ ! -x "$CONDA_ROOT/envs/$ENV_NAME/bin/ruby" ]; then
  echo "conda 환경 만들기: $ENV_NAME"
  "$CONDA" create -y -n "$ENV_NAME" -c conda-forge \
    "ruby=3.3" c-compiler cxx-compiler make pkg-config
fi
export PATH="$CONDA_ROOT/envs/$ENV_NAME/bin:$PATH"

# Gemfile.lock과 같은 bundler 버전
BUNDLER_VERSION="$(awk '/^BUNDLED WITH/{getline; print $1}' Gemfile.lock)"
gem list -i bundler -v "$BUNDLER_VERSION" >/dev/null ||
  gem install --no-document bundler -v "$BUNDLER_VERSION"

# gem은 vendor/bundle에 둔다 (.gitignore에 vendor/ 있음)
bundle config set --local path vendor/bundle
bundle install

echo
echo "완료: $(ruby -v)"
echo "미리보기: ./scripts/serve.sh → http://localhost:4000/"
