describe('shopController', function() {

    var _shopController_;

    beforeEach(module('qApp'));

    beforeEach(inject(function(_$rootScope_, _$controller_, _guitarFactory_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        guitarFactory = _guitarFactory_;

        _shopController_ = $controller('shopController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should be defined', function() {
        expect(_shopController_).toBeDefined();
    });

});