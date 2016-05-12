'use strict';

// libs
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// app files
import Controllers from './controllers';
import Services from './services';
import Factories from './factories';
import Configs from './config';
import Filters from './filters';
import Directives from './directives';

// app
const App = angular.module('app', [
	uiRouter,
	Services.name,
	Factories.name,
	Configs.name,
	Controllers.name,
	Filters.name,
	Directives.name]
);

export default App;
