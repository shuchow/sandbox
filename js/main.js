/* 
 * Angular - Shift8 demo/documentation app.
 */
angular.module('mainApp', ['ui', 'ui.jq', 'ui.bootstrap'], function($locationProvider) {
	$locationProvider.hashPrefix('');
	// Make code pretty
	window.prettyPrint && prettyPrint();
}).directive('scrollto', [function() {
	return function(scope, elm, attrs) {
		elm.bind('click', function(e) {
			e.preventDefault();
			if (attrs.href) {
				attrs.scrollto = attrs.href;
			}
			var top = $(attrs.scrollto).offset().top;
			$('body,html').animate({
				scrollTop: top
			}, 800);
		});
	};
}]);


var MainCtrl = function($scope, $element) {
};