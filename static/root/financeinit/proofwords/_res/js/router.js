var app = angular.module('proofwords', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.proofwords", {
        url : "/proofwords",
        views : {  
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/proofwords/_res/html/index.html",
                controller:"proofwordsCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/proofwords/_res/html/menu.html",
                controller:"proofwordsMenuCtrl"
            }
        }
    }).state("root.financeinit.proofwords.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.financeinit.proofwords":{
                templateUrl : "root/financeinit/proofwords/list/_res/html/index.html",
                controller:'proofwordsListCtrl'
            }
        }
    }).state("root.financeinit.proofwords.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.proofwords":{
                templateUrl : "root/financeinit/proofwords/add/_res/html/index.html",
                controller:'proofwordsAddCtrl'
            }
        }
    })
});