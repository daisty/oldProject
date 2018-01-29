var app = angular.module('usecommonly', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.usecommonly", {
        url : "/usecommonly",
        views : {  
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/usecommonly/_res/html/index.html",
                controller:"usecommonlyCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/usecommonly/_res/html/menu.html",
                controller:"usecommonlyMenuCtrl"
            }
        }
    }).state("root.financeinit.usecommonly.list[12]",{
        url:"/list[12]?id=&name=&page=useComm=",
        views:{
            "content@root.financeinit.usecommonly":{
                templateUrl : "root/financeinit/usecommonly/list/_res/html/index.html",
                controller:'usecommonlyListCtrl'
            }
        }
    }).state("root.financeinit.usecommonly.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.usecommonly":{
                templateUrl : "root/financeinit/usecommonly/add/_res/html/index.html",
                controller:'usecommonlyAddCtrl'
            }
        }
    })
});