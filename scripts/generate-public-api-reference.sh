#!/usr/bin/env bash

set -euo pipefail

git --version
node --version
yarn --version
yarn install --frozen-lockfile

mkdir -p .temp
cd .temp

# checkout blink
if [ ! -d "blink" ]; then
  git clone https://github.com/blinkbitcoin/blink
fi
cd blink
git fetch origin main
git checkout --detach origin/main

# build public api reference
../../node_modules/.bin/spectaql ../../scripts/spectaql/spectaql-config-public-api.yml \
  -t ../../static -f public-api-reference.html

# set dark mode
perl -pi -e 's/spectaql\.min\.css/spectaql.dark.css/' ../../static/public-api-reference.html

# record the schema version represented by the generated reference
node ../../scripts/public-api-reference-status.mjs \
  core/api/src/graphql/public/schema.graphql \
  ../../static/public-api-reference.schema.sha256 \
  --write
