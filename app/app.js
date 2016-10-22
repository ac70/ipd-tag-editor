var app = angular
    .module('app', ['firebase', 'ngMaterial'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('deep-orange')
            .warnPalette('red')
            .backgroundPalette('blue-grey');
    })
    .directive("contenteditable", function() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {

                function read() {
                    ngModel.$setViewValue(element.html());
                }

                ngModel.$render = function() {
                    element.html(ngModel.$viewValue || "");
                };

                element.bind("blur keyup change", function() {
                    scope.$apply(read);
                });

                element.css('outline', 'none');
                element.bind("keydown keypress", function(event) {
                    if (event.which === 13) {
                        window.getSelection().removeAllRanges();
                        element[0].blur();
                        event.preventDefault();
                    }
                });

            }
        };
    });
