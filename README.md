# food-out-app
A small app to plan our monthly food out events.

[![Build Status](https://travis-ci.org/jannydiamond/food-out-app.svg?branch=development)](https://travis-ci.org/jannydiamond/food-out-app)
[![Coverage Status](https://coveralls.io/repos/github/jannydiamond/food-out-app/badge.svg?branch=development)](https://coveralls.io/github/jannydiamond/food-out-app?branch=development)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Mockups
https://invis.io/Q6NMA9NEPJN

## NPM scripts
Script name | Description
----------- | -----------
npm run install | Installs all project dependencies (root, api, static)
npm run install:api | Installs api dependencies
npm run install:static | Installs static view dependencies
npm run start | Starts api and static view parallel
npm run start:api | Starts the api
npm run start:static | Starts the static view with webpack-dev-server
npm run dev | Starts api and static view with watch option
npm run dev:api | Starts the api with nodemon
npm run dev:static | Starts the static view with webpack-dev-server
npm run test | Starts api and static view tests
npm run test:api | Starts api tests (eslint)
npm run test:static | Starts static tests (flow, lint sass, lint js, test coveralls)
npm run build | Starts api and static view build
npm run build:api | Starts api build
npm run build:static | Starts static view build
