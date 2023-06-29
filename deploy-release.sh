#!/bin/bash

mkdir ./build
cp -r ~/typescript/build ./

docker compose -f release/docker-compose.yml build --no-cache
docker compose -f release/docker-compose.yml down
docker compose -f release/docker-compose.yml up -d