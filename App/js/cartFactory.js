app.factory('cartFactory', ['$http', '$localStorage', function($http, $localStorage) {

    return {
        add: function(gcObj) {
            if ($localStorage.cart == undefined) {
                $localStorage.cart = [];
            }
            $localStorage.cart.push(gcObj);
        },
        remove: function(item) {
            if ($localStorage.cart == undefined) {
                $localStorage.cart = [];
            } else {
                for (var i = 0; i < $localStorage.cart.length; i++) {
                    if ($localStorage.cart[i].id == item) {
                        $localStorage.cart.splice(i, 1);
                    }
                }
            }

        },
        check: function (item) {
        	if ($localStorage.cart == undefined) {
                return false;
            } else {
                for (var i = 0; i < $localStorage.cart.length; i++) {
                    if ($localStorage.cart[i].id == item) {
                        return true;
                    }
                }
                return false;
            }
        },
        get: function(){
        	if ($localStorage.cart == undefined || $localStorage.cart[0] == undefined) {
                return null;
            } else {
            	return $localStorage.cart;
            }
        }
    }
}]);