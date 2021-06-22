# SWAPI App

[![Build](https://github.com/cyruzin/swapi-app/workflows/Build/badge.svg)](https://github.com/cyruzin/swapi-app/actions?query=workflow%3ABuild+branch%3Amaster) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

From a Star Wars fan to Star Wars fans, I present you the SWAPI App.

Check the [demo](https://cyruzin.github.io/swapi-app/) up and running!

## Install

Run the command below to install the dependencies:

```sh
yarn install
```

## Run

### Locally

To start the app locally, run:

```sh
yarn start
```

### Docker

Make sure that you have Docker and Docker Composer installed.

To start the app with Docker, run:

```sh
docker-compose up
```

## Tests

To test the app, run:

```sh
yarn test
```

## Technologies

The back-end information is being pulled from the [SWAPI API](https://swapi.dev/).

The images are being pulled from Google's Custom Search API.

This app was built with create-react-app and the following technologies:

- Node v14.16.1
- React v17.0.2
- Testing Library/React v11.2.7
- Vanilla CSS

## License

MIT
