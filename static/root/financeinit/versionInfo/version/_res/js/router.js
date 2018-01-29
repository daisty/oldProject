var app = angular.module('version', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.versionInfo.version", {
        url : "/version",
        views : {  
            "content@root.financeinit.versionInfo" : {
                templateUrl : "root/financeinit/versionInfo/version/_res/html/index.html",
                controller:"versionCtrl"
            },"menu@root.financeinit.versionInfo" : {
                templateUrl : "root/financeinit/versionInfo/version/_res/html/menu.html",
                controller:"versionMenuCtrl"
            }
        }
    }).state("root.financeinit.versionInfo.version.list[12]",{
        url:"/list[12]?id=&page=&name=",
        views:{
            "content@root.financeinit.versionInfo.version":{
                templateUrl : "root/financeinit/versionInfo/version/list/_res/html/index.html",
                controller:'versionInfoListCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.version.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.versionInfo.version":{
                templateUrl : "root/financeinit/versionInfo/version/add/_res/html/index.html",
                controller:'versionInfoAddCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.version.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.versionInfo.version":{
                templateUrl : "root/financeinit/versionInfo/version/edit/_res/html/index.html",
                controller:'versionInfoEditCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.version.view[12]",{
        url:"/view[12]?id=&page=&view=",
        views:{
            "content@root.financeinit.versionInfo.version":{
                templateUrl : "root/financeinit/versionInfo/version/view/_res/html/index.html",
                controller:'versionInfoViewCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.version.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.financeinit.versionInfo.version":{
                templateUrl : "root/financeinit/versionInfo/version/upload/_res/html/index.html",
                controller:'versionInfoUploadCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.version.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.financeinit.versionInfo.version":{
                templateUrl : "root/financeinit/versionInfo/version/detail/_res/html/index.html",
                controller:'detailCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.version.ask[12]",{
        url:"/ask[12]?id=&page=",
        views:{
            "content@root.financeinit.versionInfo.version":{
                templateUrl : "root/financeinit/versionInfo/version/ask/_res/html/index.html",
                controller:'askCtrl'
            }
        }
    })
});