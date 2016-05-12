'use-strict';

// libs
import angular from 'angular';
// controllers
import TestFilter from './test-filter';

const module = angular.module('app.filters', [])
  .filter('TestFilter', TestFilter);

export default module;
