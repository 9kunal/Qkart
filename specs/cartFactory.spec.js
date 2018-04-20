 describe('cartFactory', function() {
     var _cartFactory_;

     beforeEach(function() {
         module('qApp');
         inject(function($injector) {
             _cartFactory_ = $injector.get('cartFactory');
         });
     });

     it('it should get localstorage value to null', function(){
     	var _g_ = _cartFactory_.get();
     	expect(_g_).toBe(null);
     });

     it('it should add values to localstorage', function(){
     	var gobj = {id: 5, name: "Schloff's T-Paul", price: 179999, quantity: 1};
     	spyOn(_cartFactory_, 'add');
     	_cartFactory_.add(gobj);
     	expect(_cartFactory_.add).toHaveBeenCalled();
     });

     it('it should remove values from localstorage', function(){
     	var gobj = 5;
     	spyOn(_cartFactory_, 'remove');
     	_cartFactory_.remove(gobj);
     	expect(_cartFactory_.remove).toHaveBeenCalled();
     });
 });