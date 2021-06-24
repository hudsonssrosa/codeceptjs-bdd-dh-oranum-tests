#!/bin/bash

# Run tests with Allure Report
# npx codeceptjs run --features --steps --plugins allure

# Run tests passing a specific tag
# npx codeceptjs run --features --steps --grep '@psychics-view'
# npx codeceptjs run --features --steps --grep '@search-for-psychics'
# npx codeceptjs run --features --steps --grep '@specific-search'
npx codeceptjs run --features --steps --grep '@psychic-livestream'
# npx codeceptjs run --features --steps --grep '@acceptance'

# Run in parallel (choose the number of workers)
# npx codeceptjs run-workers --features 2

# Run tests with Codecept UI
# npx codecept-ui --app --features

# Run in multiple browsers (default: chrome, safari, firefox, MicrosoftEdge)
# npx codeceptjs run-multiple --features chrome firefox safari --plugins allure
# npx codeceptjs run-multiple parallel --features chrome firefox features --plugins allure

# Visual tests
# npm install codeceptjs-resemblehelper