#!/bin/bash

mkdir ./build
cp -r ~/typescript/build ./

docker compose -f debug/docker-compose.yml build --no-cache
docker compose -f debug/docker-compose.yml down
docker compose -f debug/docker-compose.yml up -d
