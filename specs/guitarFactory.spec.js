 describe('guitarFactory', function() {

     var Guitars;

     var GuitarList = [{
             "id": 1,
             "name": "Schloff's Moonbeast",
             "wood": "Basswood (body) Walnut (top) Karelian birch (top veneer) Walnut/maple/walnut (neck) Ebony (fingerboard)",
             "surface": "Black shadow, high gloss",
             "img": "assets/guitars/moonbeast.png",
             "price": 204499
         },
         {
             "id": 2,
             "name": "Schloff's Black Ace Classics",
             "wood": "Mahogany (body, neck) Maple (top) Rosewood (fingerboard)",
             "surface": "Tobacco sunburst, high gloss",
             "img": "assets/guitars/Black_ace.png",
             "price": 179999
         },
         {
             "id": 3,
             "name": "Crafter Grand Auditorium HiLite",
             "wood": "Solid cedro (top) Mahogany (back, ribs, neck) Rosewood (fingerboard)",
             "surface": "Vintage burst, high gloss",
             "img": "assets/guitars/Crafter-HiLite.png",
             "price": 104499
         },
         {
             "id": 4,
             "name": "Dagon asymmetric",
             "wood": "Alder (body) Walnut/Maple reinforced (neck) Ziricote (fretboard) Vulcan fiber (headstock veneer) Karelian birch (top and back veneer) Walnut burl (headstock back veneer",
             "surface": "Steel grey, high gloss",
             "img": "assets/guitars/dragon.png",
             "price": 224999
         },
         {
             "id": 5,
             "name": "Schloff's T-Paul",
             "wood": "Mahogany (body, neck) Maple (top) Rosewood (fingerboard)",
             "surface": "High gloss finish in various colours, as well as oil & wax (natural finish) are possible. We prefer to oil & wax the backs of our necks",
             "img": "assets/guitars/t-paul.png",
             "price": 179999
         },
         {
             "id": 6,
             "name": "Crafter Dreadnought",
             "wood": "Solid Engelmann spruce (top) Mahogany (back, ribs, neck) Rosewood (Fingerboard)",
             "surface": "Matt, natural finish",
             "img": "assets/guitars/Crafter-LITE.png",
             "price": 85499
         }
     ];

     beforeEach(angular.mock.module('qApp'));

     beforeEach(inject(function(_guitarFactory_, _$q_, _$httpBackend_, _$rootScope_) {
         $q = _$q_;
         Guitar = _guitarFactory_;
         $httpBackend = _$httpBackend_;
         $scope = _$rootScope_.$new();
     }));



     it('should exists', function() {
         expect(Guitar).toBeDefined();
     });

     it('should get guitar data', function() {
         Guitar.fetchData().then(function(res) {
             g = res;
             expect(g).toEqual(GuitarList);
         });
     });

     it('should get data by ID', function() {
         Guitar.fetchDataID(3).then(function(res) {
             g = res;
             expect(g).toBe({
                 "id": 3,
                 "name": "Crafter Grand Auditorium HiLite",
                 "wood": "Solid cedro (top) Mahogany (back, ribs, neck) Rosewood (fingerboard)",
                 "surface": "Vintage burst, high gloss",
                 "img": "assets/guitars/Crafter-HiLite.png",
                 "price": 104499
             });
         });
     });
 });