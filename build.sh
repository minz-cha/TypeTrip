#!/bin/bash

rm -rf ~/build
npm i --force
npm run build
mkdir ~/build
cp -r ./build ~/