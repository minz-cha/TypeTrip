#!/bin/bash

mkdir ./build
cp -r ~/typescript/build ./

docker compose -f docker-compose-debug.yml build --no-cache
docker compose -f docker-compose-debug.yml down
docker compose -f docker-compose-debug.yml up -d
