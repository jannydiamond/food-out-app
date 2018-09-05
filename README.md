# food-out-app
A small app to plan our monthly food out events.

[![Build Status](https://travis-ci.org/jannydiamond/food-out-app.svg?branch=development)](https://travis-ci.org/jannydiamond/food-out-app)
[![Coverage Status](https://coveralls.io/repos/github/jannydiamond/food-out-app/badge.svg?branch=development)](https://coveralls.io/github/jannydiamond/food-out-app?branch=development)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Mockups
https://invis.io/Q6NMA9NEPJN

## NPM scripts
NPM scripts used in root directory

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

## Database
The project uses a MySQL database. The database config can be found under _/api/src/config/index.js_ which contains the following configurations:
```
'port': 3010,
'databaseHost': 'localhost',
'databasePort': '3306',
'databaseName': 'food_out_app',
'databaseUsername': `${process.env.DB_USER_MYSQL}`,
'databasePassword': `${process.env.DB_PWD_MYSQL}`,
'bodyLimit': '100kb'
```

To export the DB_USER_MYSQL and DB_PWD_MYSQL environment-variables you need to create a .env file in the api directory which contains the following entries:
```
DB_USER_MYSQL=your_db_user_name
DB_PWD_MYSQL=your_db_password
```

To setup the database the following steps are needed:
* create a database 'food_out_app'
* create a table called locations
* create the .env file to export the environment variables

At the moment it's enough to create the locations table as follows:
```sql
CREATE TABLE `locations` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`description` TEXT,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);
```

##API
Route | Description
----------- | -----------
/api/locations | All locations
/api/locations/1 | Location with the id 1
