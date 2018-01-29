var app = angular.module('accident', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.financeinit.accountdepartment", {
        url : "/accountdepartment",
        views : {
            "content@root.financeinit" : {
                templateUrl : "root/financeinit/accountdepartment/_res/html/index.html",
                controller:"accountdepartmentCtrl"
            },"menu@root.financeinit" : {
                templateUrl : "root/financeinit/accountdepartment/_res/html/menu.html",
                controller:"accountdepartmentMenuCtrl"
            }
        }
    }).state("root.financeinit.accountdepartment.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.financeinit.accountdepartment":{
                templateUrl : "root/financeinit/accountdepartment/list/_res/html/index.html",
                controller:'accountdepartmentListCtrl'
            }
        }
    }).state("root.financeinit.accountdepartment.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.financeinit.accountdepartment":{
                templateUrl : "root/financeinit/accountdepartment/add/_res/html/index.html",
                controller:'accountdepartmentAddCtrl'
            }
        }
    }).state("root.financeinit.accountdepartment.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.financeinit.accountdepartment":{
                templateUrl : "root/financeinit/accountdepartment/edit/_res/html/index.html",
                controller:'accountdepartmentEditCtrl'
            }
        }
    })
});