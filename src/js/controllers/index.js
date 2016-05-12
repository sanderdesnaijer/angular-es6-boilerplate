'use-strict';

// libs
import angular from 'angular';
// controllers
import AppCtrl from './app-controller';

const module = angular.module('app.controllers', [])
  .controller('AppCtrl', AppCtrl);

export default module;
