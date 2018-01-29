var app = angular.module('accountancourse', []);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.financeinit.accountancourse", {
        url: "/accountancourse",
        views: {
            "content@root.financeinit": {
                templateUrl: "root/financeinit/accountancourse/_res/html/index.html",
                controller: "accountancourseCtrl"
            }, "menu@root.financeinit": {
                templateUrl: "root/financeinit/accountancourse/_res/html/menu.html",
                controller: "accountancourseMenuCtrl"
            }
        }
    }).state("root.financeinit.accountancourse.list[12]", {
        url: "/list[12]?id=&name=&page=&accountanName=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/list/_res/html/index.html",
                controller: 'accountancourseListCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.fulist[12]", {
        url: "/fulist[12]?id=&name=&page=&accountanName=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/fulist/_res/html/index.html",
                controller: 'fulistCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.golist[12]", {
        url: "/golist[12]?id=&name=&page=&accountanName=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/golist/_res/html/index.html",
                controller: 'golistCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.chlist[12]", {
        url: "/chlist[12]?id=&name=&page=&accountanName=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/chlist/_res/html/index.html",
                controller: 'chlistCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.sulist[12]", {
        url: "/sulist[12]?id=&name=&page=&accountanName=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/sulist/_res/html/index.html",
                controller: 'sulistCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.qulist[12]", {
        url: "/qulist[12]?id=&name=&page=&accountanName=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/qulist/_res/html/index.html",
                controller: 'qulistCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.add[12]", {
        url: "/add[12]",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/add/_res/html/index.html",
                controller: 'accountancourseAddCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.edit[12]", {
        url: "/edit[12]?id=&page=&aa=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/edit/_res/html/index.html",
                controller: 'accountancourserEditCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.import[12]", {
        url: "/import[12]?id=&page=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/import/_res/html/index.html",
                controller: 'accountancourseImportCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.export[12]", {
        url: "/export[12]?id=&page=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/export/_res/html/index.html",
                controller: 'accountancourseExportCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.addSecond[12]", {
        url: "/addSecond[12]?id=&page=&aa=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/addSecond/_res/html/index.html",
                controller: 'addSecondCtrl'
            }
        }
    }).state("root.financeinit.accountancourse.addThird[12]", {
        url: "/addThird[12]?id=&page=&aa=",
        views: {
            "content@root.financeinit.accountancourse": {
                templateUrl: "root/financeinit/accountancourse/addThird/_res/html/index.html",
                controller: 'addThirdCtrl'
            }
        }
    })
});