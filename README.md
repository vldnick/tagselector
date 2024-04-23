# Tag Selector

## Description

Tag Selector is a [React](https://reactjs.org/) component for selecting tags.

## Installation

To run this project you need npm or yarn

```bash
# Using npm
npm install

# Using yarn
yarn
```

Then you can start the application in dev mode with dev server using

```bash
# Using npm
npm start

# Using yarn
yarn start
```

## Scripts
* build: Build the project in production mode.
* build:dev: Build the project in development mode.
* build:start: Build the project and start a server.
* start: Start a development server.
* start:live: Start a development server with live reload and hot module replacement.
* lint: Run ESLint to lint the project files.
* lint:fix: Run ESLint with the --fix option to automatically fix linting errors.
* test: Run Jest to execute tests.

## Usage

To use Tag Selector as remote component in module federation in you container app set up webpack module federation plugin

```bash
new ModuleFederationPlugin({
      name: "<container-app-name>",
      filename: "remoteEntry.js",
      remotes: {
        tageditor: "tageditor@<remote-host>/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
