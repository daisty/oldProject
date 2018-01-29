var app = angular.module('initdateentry', []);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.financeinit.initdateentry", {
        url: "/initdateentry",
        views: {
            "content@root.financeinit": {
                templateUrl: "root/financeinit/initdateentry/_res/html/index.html",
                controller: "initdateentryCtrl"
            }, "menu@root.financeinit": {
                templateUrl: "root/financeinit/initdateentry/_res/html/menu.html",
                controller: "initdateentryMenuCtrl"
            }
        }
    }).state("root.financeinit.initdateentry.list[12]", {
        url: "/list[12]?id=&name=&page=",
        views: {
            "content@root.financeinit.initdateentry": {
                templateUrl: "root/financeinit/initdateentry/list/_res/html/index.html",
                controller: 'initdateentryListCtrl'
            }
        }
    }).state("root.financeinit.initdateentry.edit[12]", {
        url: "/edit[12]?id=&page=",
        views: {
            "content@root.financeinit.initdateentry": {
                templateUrl: "root/financeinit/initdateentry/edit/_res/html/index.html",
                controller: 'initdateentryEditCtrl'
            }
        }
    }).state("root.financeinit.initdateentry.import[12]", {
        url: "/import[12]?id=&page=",
        views: {
            "content@root.financeinit.initdateentry": {
                templateUrl: "root/financeinit/initdateentry/import/_res/html/index.html",
                controller: 'initdateentryImportCtrl'
            }
        }
    }).state("root.financeinit.initdateentry.export[12]", {
        url: "/export[12]?id=&page=",
        views: {
            "content@root.financeinit.initdateentry": {
                templateUrl: "root/financeinit/initdateentry/export/_res/html/index.html",
                controller: 'initdateentryExportCtrl'
            }
        }
    })
});