'use-strict';

// libs
import angular from 'angular';
// controllers
import TestFactory from './test-factory';

const module = angular.module('app.factories', [])
  .factory('TestFactory', TestFactory);

export default module;
