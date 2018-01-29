var app = angular.module('withunit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.withunit", {
        url : "/withunit",
        views : {
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/withunit/_res/html/index.html",
                controller:"withunitCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/withunit/_res/html/menu.html",
                controller:"withunitMenuCtrl"
            }
        }
    }).state("root.financeinit.withunit.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.financeinit.withunit":{
                templateUrl : "root/financeinit/withunit/list/_res/html/index.html",
                controller:'groupListCtrl'
            }
        }
    }).state("root.financeinit.withunit.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.withunit":{
                templateUrl : "root/financeinit/withunit/add/_res/html/index.html",
                controller:'groupAddCtrl'
            }
        }
    }).state("root.financeinit.withunit.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.withunit":{
                templateUrl : "root/financeinit/withunit/edit/_res/html/index.html",
                controller:'groupEditCtrl'
            }
        }
    }).state("root.financeinit.withunit.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.financeinit.withunit":{
                templateUrl : "root/financeinit/withunit/export/_res/html/index.html",
                controller:'withunitExportCtrl'
            }
        }
    });
});