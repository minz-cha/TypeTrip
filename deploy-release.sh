#!/bin/bash

mkdir ./build
cp -r ~/typescript/build ./

docker compose -f docker-compose-release.yml build --no-cache
docker compose -f docker-compose-release.yml down
docker compose -f docker-compose-release.yml up -d