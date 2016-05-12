'use-strict';

// libs
import angular from 'angular';
// controllers
import Router from './router.js';

const module = angular.module('app.config', [])
  .config(Router);

export default module;
