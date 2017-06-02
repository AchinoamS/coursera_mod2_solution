(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyListController', ToBuyListController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyListController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyListController(ShoppingListCheckOffService) {
        var ToBuyList = this;

        ToBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        ToBuyList.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var BoughtList = this;

        BoughtList.items = ShoppingListCheckOffService.getBoughhtItems();
    }


    function ShoppingListCheckOffService() {
        var service = this;

        var toBuy = [{
            name: "cookie",
            quantity: 9
        }, {
            name: "sugar",
            quantity: 3
        }, {
            name: "cake",
            quantity: 5
        }, {
            name: "candy",
            quantity: 20
        }];

        var bought = [];

        service.buyItem = function(itemIndex) {
            var item = toBuy[itemIndex];
            toBuy.splice(itemIndex, 1);
            bought.push(item);
        };

        service.getToBuyItems = function() {
            return toBuy;
        };

        service.getBoughhtItems = function() {
            return bought;
        };
    }

})();
