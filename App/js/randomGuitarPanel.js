app.directive('randomGuitarPanel', [function() {
    return {
        restrice: 'E',
        scope: {
        	guitars: '='
        },
        templateUrl: './randomGuitar_partial.html',
        controller: function($scope){
        	$scope.pickrandom = Math.floor(Math.random() * 6);
        }
    };
}]);