# React-npm-library-kit 

The primary goal of this starter-kit is to provide a stable foundation upon which to build [ReactJS](https://reactjs.org/) library component for an [NPM](https://www.npmjs.com/) repository.


[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


# How it is organized?
The source code has been divided in two separate parts (The library and demo page). Both are written in ES6 and JSX, that is means it'll be transpiled by Babell but in different ways.

# The library part
 The library source code is located inside of **src/lib**. Actually, here is structure of component library. Everything inside this folder
 will be transformed and minimized (ready for publishing) code.

# The demo app
The demo app source code lives inside the **src/dev** folder. It is transformed, bundled and minified by [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io) into the **~/dist** folder (Running npm script: build:prod). 
This is a completely normal react app with minimal configuration that imports the component library. 


## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`


## Installation

After confirming that your environment meets the above [requirements](#requirements), you can clone the project by doing
 the following:

```bash
$ git clone https://github.com/DeanHristov/react-npm-library-kit.git <my-project-name>
$ cd <my-project-name>
```

Remember to reset the git history! 
```
$ rm -rf .git
$ git init
$ git add .
$ git commit -m "Init the project"

```
# Install project dependencies

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.
```bash
$ yarn install (or `npm install`)
```

## Bind the library component to the HTML DOM 
You can bind the component by two ways:

* Without initial options.
```bash
    <div data-id="some-id" />
```

* With initial options. The all available options can be stored inside the object  
```bash
    <div data-id="some-id" data-options='{...}' />
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn run start:dev  # Start the development server (or `npm run start:dev`)
```

While developing, you will probably rely mostly on `yarn run start:dev`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start:dev`        | Build development app with **HMR** and running a server (provided by Webpack) at `http://localhost:8000`|
|`build:prod`       | Builds completely production-ready ReactJS application to **./dist** folder|
|`build:lib`        | Builds library widget component to **./lib** folder|
|`test`             | Not ready yet. See [testing](#testing)|
|`test:watch`       | Runs `test` in watch mode to re-run tests when changed|

## Project Structure

The project structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. This structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── build                            # Configuration of the starter-kit are store here
├── dist                             # ReactJS production-ready code (demo app)  
├── lib                              # The library source code localization
├── src                              # Application source code
│   ├── dev                          # Application bootstrap and rendering
│       ├── Main.jsx                 # The entry point of App (bootstraping component)
│       ├── Index.html               # Static HTML template (It is using only in dev mode ) 
│   ├── lib                          # The library component will live here
|       ├── components               # The all components where will be stored
|       ├── index.jsx                # The entry point of component
|       ├── package-lib.json         # The schema of package.json for the component 
|       ├── README.md                # Description about how to use it
|       ├── LICENSE.md               # The license requirements
│   ├── styles                       # Application styles where will live 
│   ├── locales                      # The all translation where will live
│       ├── index.js                 # An entry point of the all locales
└── tests                            # Unit tests
```

## Live Development
 For a live development use: `$ yarn start:dev` or ` $ npm run start:dev `
 
### Hot Reloading
Hot reloading is enabled by default when the application is running in development mode (`$ yarn start:dev` or ` $ npm run start:dev `). This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) capabilities, where code updates can be injected to the application while it's running, no full reload required. Here's how it works:

## Testing
To add a unit test, create a `.spec.js` file anywhere inside of `./tests`. // TBD


## Building for Production
* `$ yarn build:prod`
* `$ yarn build:lib`
