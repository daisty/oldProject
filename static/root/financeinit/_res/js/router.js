var app = angular.module('financeinit',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.financeinit", {
        url: "/financeinit",
        views: {
            "content@root": {
                templateUrl: "root/financeinit/_res/html/index.html",
                controller: "financeinitCtrl"
            },"nav@root":{
                templateUrl: "root/financeinit/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    });
});