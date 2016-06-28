'use-strict';

const Router = ($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'templates/test.html'
		});
};

export default Router;
