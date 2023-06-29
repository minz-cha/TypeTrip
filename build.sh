#!/bin/bash

rm -rf ~/typescript/build
npm i --force
npm run build
mkdir -p ~/typescript/build
cp -r ./build ~/typescript
