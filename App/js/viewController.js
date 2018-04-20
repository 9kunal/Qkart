app.controller('viewController', function($scope, guitarFactory, $routeParams, cartFactory) {

	$scope.btn_state = false;

    guitarFactory.fetchDataID($routeParams.ID).then(function(res) {
        $scope._guitarOne_ = res;
        $scope.btn_state = cartFactory.check($scope._guitarOne_.id);
    });

    $scope.addToCart = function() {
        var gcObj = {};
        gcObj.id = $scope._guitarOne_.id;
        gcObj.name = $scope._guitarOne_.name;
        gcObj.price = $scope._guitarOne_.price;
        gcObj.quantity = 1;
        cartFactory.add(gcObj);
        $scope.btn_state = true;
    }
});