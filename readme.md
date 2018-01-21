# React TypeScript Starter

This is a React, TypeScript, Webpack 3 starter project that utilizes some of the latest open source tools around such as:

* [TypeScript](https://github.com/Microsoft/TypeScript)
* [Yarn](https://github.com/yarnpkg)
* [Webpack 3](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel)
* [jest](https://github.com/facebook/jest)
* ...and more

This starter project is intended to be small in scope so that it can be easily extended and customized, or used as a learning tool for folks who are trying to become familiar with Webpack 3.

## The goal

This starter will help you to get quickly set up with TypeScript and React, with it you will get :

* a project with React and TypeScript
* linting with TSLint
* testing with Jest, and
* an environment to develop and build your app with Webpack 3

## license

This starter project is fully open source and public domain, so you are free to do whatever you wish with it -- commercially or personally.

## getting started

After completing the steps below, you will be ready to begin developing your app:

1. Install [Node.js](https://nodejs.org) (latest LTS recommended)
2. Install [Yarn](https://yarnpkg.com)
3. Clone this repository into your project root directory
4. Install dependencies by running `yarn` in your project root directory

_Note: if you hate Yarn for some reason, you can skip Step 2 and use `npm install` instead of `yarn` in Step 4._

## building, watching & developing

### local development

This starter project uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve up your project at [http://localhost:8080](http://localhost:8080) for streamlined and convenient development.

After running `yarn run dev` in the project root, your `/src` code will be served at the url above and watched for changes. As you modify code in `/src`, the project will be recompiled and your browser will refresh to show the latest changes.

```
cd /path/to/repo
yarn run dev
```

### building for production

Use `yarn run build` in your project root to run a production build.

Production builds compile & minify your assets into `/build` for distribution and/or integration into whatever codebase you'll be using these assets in.

```
cd /path/to/repo
yarn run build
```

## Testing
