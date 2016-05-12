'use-strict';

// libs
import angular from 'angular';
// controllers
import TestService from './test-service';

const module = angular.module('app.services', [])
  .service('TestService', TestService);

export default module;
