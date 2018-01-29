var app = angular.module('help', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.versionInfo.help", {
        url : "/help",
        views : {  
            "content@root.financeinit.versionInfo" : {
                templateUrl : "root/financeinit/versionInfo/help/_res/html/index.html",
                controller:"helpCtrl"
            },"menu@root.financeinit.versionInfo" : {
                templateUrl : "root/financeinit/versionInfo/help/_res/html/menu.html",
                controller:"helpMenuCtrl"
            }
        }
    }).state("root.financeinit.versionInfo.help.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.financeinit.versionInfo.help":{
                templateUrl : "root/financeinit/versionInfo/help/list/_res/html/index.html",
                controller:'helpListCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.help.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.financeinit.versionInfo.help":{
                templateUrl : "root/financeinit/versionInfo/help/detail/_res/html/index.html",
                controller:'helpDetailCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.help.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.versionInfo.help":{
                templateUrl : "root/financeinit/versionInfo/help/edit/_res/html/index.html",
                controller:'helpEditCtrl'
            }
        }
    }).state("root.financeinit.versionInfo.help.answer[12]",{
        url:"/answer[12]?id=&page=",
        views:{
            "content@root.financeinit.versionInfo.help":{
                templateUrl : "root/financeinit/versionInfo/help/answer/_res/html/index.html",
                controller:'answerCtrl'
            }
        }
    })
});