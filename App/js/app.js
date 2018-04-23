var app = angular.module('qApp', ["ngRoute", 'ngStorage']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/App", {
        templateUrl : "./App/shop_partial.html",
        controller: "shopController"
    })
    .when("/view/:ID", {
        templateUrl : "./App/view_partial.html",
        controller: "viewController"
    })
    .when("/cart", {
        templateUrl : "./App/cart_partial.html",
        controller: 'cartController'
    })
    .otherwise({
        redirectTo: '/App'
    });

    $locationProvider.html5Mode(true);
});