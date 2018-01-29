var app = angular.module('account', [{
    files:[
        "root/financeinit/account/_res/js/service.js",
    ]
}]);
app.controller('accountCtrl',function ($scope,$state) {
    if ($state.current.url == '/account') {//默认加载列表
        $state.go('root.financeinit.account.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('accountMenuCtrl',function($scope,$state,$rootScope,$location,accountSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().page){$scope.menuClass=$location.search().name+"Menu"}
    }

    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        accountSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    
    $scope.$on("pageId", function(event, msg){
        $scope.page = msg;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.financeinit.account.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';

        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.financeinit.account.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };

    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };

    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idListd = ''
    };
  });

//自定义过滤
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LIST":
                result = "查看或列表";
                break;
            case "ADD":
                result = "添加";
                break;
            case "EDIT":
                result = "编辑";
                break;
            case "AUDIT":
                result = "审核";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "CONGEL":
                result = "冻结";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "COLLECT":
                result = "汇总";
                break;
            case "UPLOAD":
                result = "上传附件";
                break;
            case "DOWNLOAD":
                result = "下载附件";
                break;
            case "IMPORT":
                result = "导入";
                break;
            case "EXPORT":
                result = "导出";
                break;
            case "SEE":
                result = "查看";
                break;
            case "SEEFILE":
                result = "查看附件";
                break;
            case "MINUTE":
                result = "分钟";
                break;
            case "HOURS":
                result = "小时";
                break;
            case "DAY":
                result = "天";
                break;
            case "WEEK":
                result = "周";
                break;
            case "MONTH":
                result = "月";
                break;
            case "QUARTER":
                result = "季度";
                break;
            case "YEAR":
                result = "年";
                break;
            case "EVERYDAY":
                result = "每天";
                break;
            case "EVERYWEEK":
                result = "每周";
                break;
            case "EVERYMONTH":
                result = "每月";
                break;
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
        }
        return result;
    }

})