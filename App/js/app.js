var app = angular.module('qApp', ["ngRoute", 'ngStorage']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "shop_partial.html",
        controller: "shopController"
    })
    .when("/view/:ID", {
        templateUrl : "view_partial.html",
        controller: "viewController"
    })
    .when("/cart", {
        templateUrl : "cart_partial.html",
        controller: 'cartController'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});