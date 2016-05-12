'use-strict';

// libs
import angular from 'angular';
// controllers
import TestDirective from './test-directive';

const module = angular.module('app.directives', [])
	// directive list
  .directive('testDirective', TestDirective);

export default module;
