app.factory('guitarFactory', ['$http', function($http) {
    var guitars = {};

    guitars.fetchData = function() {
        return $http.get('./DataStore/Guitars.json');
    }

    guitars.fetchDataID = function(ID) {
        var data = {};
        return $http.get('./DataStore/Guitars.json').then(function(response) {
            for (var x = 0; x < response.data.length; x++) {
                if (response.data[x].id == ID) {
                    data = response.data[x];
                    return data;
                }
            }
        });
    }


    guitars.getNumber = function() {
        $http.get('./DataStore/Guitars.json').then(function(response) {
            return response.data.length;
        });
    }

    return guitars;
}]);