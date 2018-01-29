var app = angular.module('companybasicinfo', [{
    files:[
        "root/financeinit/companybasicinfo/_res/js/service.js",
    ]
}]);
app.controller('companybasicinfoCtrl',function ($scope,$state) {
    if ($state.current.url == '/companybasicinfo') {//默认加载列表
        $state.go('root.financeinit.companybasicinfo.list[12]')
    }
}).controller('companybasicinfoMenuCtrl',function($scope,$state,$rootScope,$location,commercialSer){
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
        commercialSer.menuPermission(buttonName).then(function(response){
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

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.financeinit.companybasicinfo.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu';
        }
    };
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.financeinit.companybasicinfo.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';

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
app.filter('rcover', function(){
    return function(val){
        var result;
        switch(val){
            case "SMALLBUSS":
                result = "小规模企业";
                break;
            case "GENERALTAXENTER":
                result = "一般纳税人企业";
                break;
        }
        return result;
    }

})