describe('cartController', function() {

    var _cartController_;

    beforeEach(module('qApp'));

    beforeEach(inject(function(_$rootScope_, _$controller_, _guitarFactory_, _cartFactory_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        guitarFactory = _guitarFactory_;
        cartFactory = _cartFactory_;

        _cartController_ = $controller('cartController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should be defined', function() {
        expect(_cartController_).toBeDefined();
    });

    it('should get total to zero', function() {
        var res = $scope.getTotal();
        expect(res).toEqual(0);
    });

    it('should get total Tax to zero', function() {
        var res = $scope.getTax();
        expect(res).toEqual(0);
    });

});