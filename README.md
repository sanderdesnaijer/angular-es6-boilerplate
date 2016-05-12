# ES6 Angular 1.X Boilerplate

Angular 1.X es6 boilerplate with gulp tasks as:

  - browserify, watchify and babelify
  - ESLint
  - sass

### Installation


```sh
$ npm install
```

##### Production build
For the minified versions of all files, run
```sh
$ gulp
```
##### Development
for development purpopes you can watch the files with
```sh
$ gulp --dev
```

### Usage
There are a couple of basic test files. Each angular object type (directives, factories, controllers etc) has it's own folder in the js directory. To add for example a controller (ExampleCtrl in this example), go to the file in **./src/js/controllers/index.js**. You can add a new controller in the controller folder, and include it in the index.js file.

```javascript
'use-strict';

// libs
import angular from 'angular';
// controllers
import AppCtrl from './app-controller';
import ExampleCtrl from './example-controller';

const module = angular.module('app.controllers', [])
  .controller('AppCtrl', AppCtrl)
  // example add controller
  .controller('ExampleCtrl',ExampleCtrl)

export default module;
```
