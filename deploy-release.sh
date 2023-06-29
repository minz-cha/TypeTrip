#!/bin/bash

mkdir ./build
cp -r ~/typescript/build ./

docker compose build --no-cache
docker compose down
docker compose up -d