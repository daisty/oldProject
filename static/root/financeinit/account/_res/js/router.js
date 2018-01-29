var app = angular.module('account', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.account", {
        url : "/account",
        views : {
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/account/_res/html/index.html",
                controller:"accountCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/account/_res/html/menu.html",
                controller:"accountMenuCtrl"
            }
        }
    }).state("root.financeinit.account.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.financeinit.account":{
                templateUrl : "root/financeinit/account/list/_res/html/index.html",
                controller:'accountListCtrl'
            }
        }
    }).state("root.financeinit.account.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.account":{
                templateUrl : "root/financeinit/account/add/_res/html/index.html",
                controller:'accountAddCtrl'
            }
        }
    }).state("root.financeinit.account.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.account":{
                templateUrl : "root/financeinit/account/edit/_res/html/index.html",
                controller:'accountEditCtrl'
            }
        }
    }).state("root.financeinit.account.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.financeinit.account":{
                templateUrl : "root/financeinit/account/export/_res/html/index.html",
                controller:'accountExportCtrl'
            }
        }
    })
});