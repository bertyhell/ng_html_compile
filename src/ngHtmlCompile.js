angular.module('ngHtmlCompile', []).
    directive('ngHtmlCompile', function($compile) {
	return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
		scope.$watch(attrs.ngHtmlCompile, function(newValue) {
		    element.html(newValue);
		    $compile(element.contents())(scope);
		});
	    }
	};
    });
