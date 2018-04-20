app.controller('shopController', function($scope, guitarFactory) {

	guitarFactory.fetchData().then(function (response){
		$scope._guitar_ = response.data;
	});

	$scope.no = guitarFactory.getNumber();

});