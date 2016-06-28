'use-strict';

const TestDirective = () => {
	return {
		restrict: 'AE',
		replace: 'true',
		template: '<h3>hello directive</h3>'
	};
};

export default TestDirective;
