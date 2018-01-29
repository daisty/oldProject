var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.setting", {
        url : "/setting",
        views : {
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.financeinit.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.setting":{
                templateUrl : "root/financeinit/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.financeinit.setting.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.financeinit.setting":{
                templateUrl : "root/financeinit/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    });
});