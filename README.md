# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

This is a frontend project built on React for the [Oscars Game App](https://github.com/dimitar-kostov/OscarsGame) 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run json-w`

Runs the json server in the development mode.\
The server is setup on [http://localhost:3030](http://localhost3030).\
To view all available mocked enpoints see MockAPIs.json

## Available Environment Variables

In the project root directory are added .env files containing environment variables
* `.env` is the default environment file
* `.env.development` is the development environment file that is loaded when we run `npm start` script
* `.env.production` is the production environment file that is loaded when we run `npm build` script

Each .env file can be overrided locally (e.g. `.env.development.local`), but should not be checked into source control