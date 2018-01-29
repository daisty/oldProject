var app = angular.module('commercial', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.companybasicinfo", {
        url : "/companybasicinfo",
        views : {
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/companybasicinfo/_res/html/index.html",
                controller:"companybasicinfoCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/companybasicinfo/_res/html/menu.html",
                controller:"companybasicinfoMenuCtrl"
            }
        }
    }).state("root.financeinit.companybasicinfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.financeinit.companybasicinfo":{
                templateUrl : "root/financeinit/companybasicinfo/list/_res/html/index.html",
                controller:'commercialListCtrl'
            }
        }
    }).state("root.financeinit.companybasicinfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.companybasicinfo":{
                templateUrl : "root/financeinit/companybasicinfo/add/_res/html/index.html",
                controller:'commercialAddCtrl'
            }
        }
    }).state("root.financeinit.companybasicinfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.companybasicinfo":{
                templateUrl : "root/financeinit/companybasicinfo/edit/_res/html/index.html",
                controller:'commercialEditCtrl'
            }
        }
    }).state("root.financeinit.companybasicinfo.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.financeinit.companybasicinfo":{
                templateUrl : "root/financeinit/companybasicinfo/export/_res/html/index.html",
                controller:'commercialExportCtrl'
            }
        }
    });
});