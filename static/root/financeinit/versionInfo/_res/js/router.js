var app = angular.module('versionInfo',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.financeinit.versionInfo", {
        url: "/versionInfo",
        views: {
            "content@root.financeinit": {
                templateUrl: "root/financeinit/versionInfo/_res/html/index.html",
                controller: "versionInfoCtrl"
            }
        }
    })
})