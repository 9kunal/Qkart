app.controller('cartController', function($scope, guitarFactory, cartFactory) {

    $scope.cart = cartFactory.get();

    $scope.removeItem = function(id) {
        cartFactory.remove(id);
        $scope.cart = cartFactory.get();
    }

    $scope.getTotal = function() {
        var total = 0;
        if ($scope.cart == null) {
            return 0;
        } else {
            for (var i = 0; i < $scope.cart.length; i++) {
                total = total + $scope.cart[i].price * $scope.cart[i].quantity;
            }
            return total;
        }
    }

    $scope.getTax = function() {
        var total = 0;
        if ($scope.cart == null) {
            return 0;
        } else {
            for (var i = 0; i < $scope.cart.length; i++) {
                total = total + $scope.cart[i].price * $scope.cart[i].quantity;
            }
            return Math.ceil(total * 0.15);
        }
    }

});