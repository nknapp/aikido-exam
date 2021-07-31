#!/bin/bash

set -e

cd "$( dirname "$( readlink -f "$0" )" )/.."

convert -background transparent src/assets/logo.svg -resize 30x30 src/assets/logo.png
convert -background transparent src/assets/logo.svg -resize 192x192 public/logo192.png
convert -background transparent src/assets/logo.svg -resize 512x512 public/logo512.png
convert -background transparent src/assets/logo.svg -resize 16x16 public/favicon.ico

git add src/assets/logo.png public/logo192.png public/logo512.png \
  public/favicon.ico