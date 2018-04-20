describe('viewController', function() {

    var _viewController_;

    beforeEach(module('qApp'));

    beforeEach(inject(function(_$rootScope_, _$controller_, _guitarFactory_, _cartFactory_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        guitarFactory = _guitarFactory_;
        cartFactory = _cartFactory_;

        _viewController_ = $controller('viewController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should be defined', function() {
        expect(_viewController_).toBeDefined();
    });

});