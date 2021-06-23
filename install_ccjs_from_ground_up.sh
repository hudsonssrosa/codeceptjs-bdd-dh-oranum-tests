#!/bin/bash

# Install CodeceptJs - Dev dependencies
npm install -g npm
npm init -y
npm install --save-dev puppeteer
npm install codeceptjs playwright --save-dev
npm install -g allure-commandline --save-dev
npm i @codeceptjs/ui --save
npx codeceptjs init


# Run all the scenarios
npx codeceptjs run --features --steps --grep '@acceptance'

