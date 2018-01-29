var app = angular.module('currency', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.currency", {
        url : "/currency",
        views : {  
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/currency/_res/html/index.html",
                controller:"currencyCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/currency/_res/html/menu.html",
                controller:"currencyMenuCtrl"
            }
        }
    }).state("root.financeinit.currency.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.financeinit.currency":{
                templateUrl : "root/financeinit/currency/list/_res/html/index.html",
                controller:'currencyListCtrl'
            }
        }
    }).state("root.financeinit.currency.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.currency":{
                templateUrl : "root/financeinit/currency/add/_res/html/index.html",
                controller:'currencyAddCtrl'
            }
        }
    }).state("root.financeinit.currency.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.currency":{
                templateUrl : "root/financeinit/currency/edit/_res/html/index.html",
                controller:'currenyEditCtrl'
            }
        }
    })
});