# Weather App

This project was initially made using only node.js when I was trying to familiarise myself with making server-side http requests. It got later expanded to include a UI made with React.js.

## Getting Started

Get a copy of the repo:

```bash
git clone git@github.com:dominictwlee/node-weather-app.git
cd node-weather-app
```

### Prerequisites

* Node >= 6.x
* npm >= 4.x

### Installing

Install dependencies:

```bash
npm install
```

Create .env file in root and put your API keys in there:

```bash
touch .env
```

in your .env file:

```
GOOGLE_API_KEY=YOUR_API_KEY_HERE
DARKSKY_API_KEY=YOUR_API_KEY_HERE
```

Start server:

```bash
npm start
```

With nodemon if you want to watch changes:

```bash
npm run start:watch
```

Start client dev server:

```bash
cd client && npm run dev
```

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Moment.js](https://momentjs.com/)
* [Popmotion](https://popmotion.io/)
* [cssnext](http://cssnext.io/)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [React](https://reactjs.org/)
