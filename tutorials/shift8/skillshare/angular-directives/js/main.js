// Main demo app.
/*
angular.module('demoApp', [], function() {
	// Make code pretty
	window.prettyPrint && prettyPrint();
});
*/

// Manual bootstrap!
angular.element(document).ready(function() {
	angular.bootstrap(document, ['demoApp']);
});

// The main application.
var demoApp = angular.module('demoApp',[]);

// Adding a controller to it.
demoApp.controller('demoController', ['$scope', function($scope) {
		// console.dir($scope)
}]);

// A simple thumbnail directive.
demoApp.directive('thumbnail', function () {
		return {
			restrict: 'E',
			replace: true,
			scope: true,
			template: '<div class="span4">' +
					'<div class="thumbnail">' +
						'<img data-src="{{src}}" alt="{{alt}}" />' +
						'<h3>{{label}}</h3>' +
						'<p>{{caption}}</p>' +
					'</div>' +
				'</div>',
			link: function ($scope, $element, $attrs) {
				$scope.label = $attrs.label;
				$scope.caption = $attrs.caption;
				$scope.src = $attrs.src;
				$scope.alt = $attrs.alt;
			}
		}
});

// Another simple directive
demoApp.directive('thumb', function () {
		return {
			restrict: 'EA',
			replace: true,
			scope: true,
			template: '<div class="thumbnail">' +
						'<img data-src="{{src}}" alt="{{alt}}" />' +
						'<h3>{{label}}</h3>' +
						'<p>{{caption}}</p>' +
					'</div>',
			link: function ($scope, $element, $attrs) {
				$scope.label = $attrs.label;
				$scope.caption = $attrs.caption;
				$scope.src = $attrs.src;
				$scope.alt = $attrs.alt;
				
				// Note: If calling this directive via A (Attribute), your "thumb" attribute will appear in $attrs and can carry a value.
				// console.dir($attrs)
			}
		}
});

// This time using a template URL relative to the site root.
demoApp.directive('thumbnailTemplate', function () {
		return {
			restrict: 'E',
			replace: true,
			scope: true,
			templateUrl: 'templates/thumbnail.html',
			link: function ($scope, $element, $attrs) {
				$scope.label = $attrs.label;
				$scope.caption = $attrs.caption;
				$scope.src = $attrs.src;
				$scope.alt = $attrs.alt;
				
				// NOTE: Holder.js (responsible for replacing data-src attribute in <img> elements with a placeholder image)
				// Needs to be called manually because we're using an external template which loads asynchronously..
				// Not everything loads at the same time and that's ok =) Confusing sometimes, but ok.
				$scope.$watch('src', function(oldVal, newVal) {
					if(oldVal !== undefined) {
						Holder.run();
					}
				});
			}
		}
});