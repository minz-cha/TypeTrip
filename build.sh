#!/bin/bash

rm -rf ~/typetrip/react/build
npm i --force
npm run build
mkdir -p ~/typetrip/react/build
cp -r ./build ~/typetrip/react
