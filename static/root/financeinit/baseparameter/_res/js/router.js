var app = angular.module('baseparameter', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.baseparameter", {
        url : "/baseparameter",
        views : {
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/baseparameter/_res/html/index.html",
                controller:"baseparameterCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/baseparameter/_res/html/menu.html",
                controller:"baseparameterMenuCtrl"
            }
        }
    }).state("root.financeinit.baseparameter.list[12]",{
        url:"/list[12]?id=&name=&page=&companyName=",
        views:{
            "content@root.financeinit.baseparameter":{
                templateUrl : "root/financeinit/baseparameter/list/_res/html/index.html",
                controller:'baseparameterListCtrl'
            }
        }
    }).state("root.financeinit.baseparameter.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.baseparameter":{
                templateUrl : "root/financeinit/baseparameter/add/_res/html/index.html",
                controller:'baseparameterAddCtrl'
            }
        }
    }).state("root.financeinit.baseparameter.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.baseparameter":{
                templateUrl : "root/financeinit/baseparameter/edit/_res/html/index.html",
                controller:'baseparameterEditCtrl'
            }
        }
    })
});