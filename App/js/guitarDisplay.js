app.directive('guitarDisplay', [function() {
    return {
        restrice: 'E',
        scope: {
        	gdata: '='
        },
        templateUrl: './displayCard_partial.html',
        controller: function($scope){}
    };
}]);