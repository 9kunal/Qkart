app.directive('guitarDisplay', [function() {
    return {
        restrice: 'E',
        scope: {
        	gdata: '='
        },
        templateUrl: './App/displayCard_partial.html',
        controller: function($scope){}
    };
}]);