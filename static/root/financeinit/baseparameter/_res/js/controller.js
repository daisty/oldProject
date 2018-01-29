var app = angular.module('baseparameter', [{
    files:[
        "root/financeinit/baseparameter/_res/js/service.js",
    ]
}]);
app.controller('baseparameterCtrl',function ($scope,$state) {
    if ($state.current.url == '/baseparameter') {//默认加载列表
        $state.go('root.financeinit.baseparameter.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('baseparameterMenuCtrl',function($scope,$state,$rootScope,$location,baseparameterSer){
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
        baseparameterSer.menuPermission(buttonName).then(function(response){
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
            $state.go('root.financeinit.baseparameter.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';

        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.financeinit.baseparameter.edit[12]',{id:$scope.idListd,page:$scope.page});
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
  });

//自定义过滤
app.filter('listiter', function(){
    return function(val){
        var result;
        switch(val){
            case "SMALLBUSSACCOUNTSYS":
                result = "小企业会计制度,";
                break;
            case "BUSSACCOUNTSYS":
                result = "企业会计制度";
                break;
            case "ACCOUNSTANDARDS":
                result = "小企业会计准则";
                break;
            case "DTWIAP":
                result = "会计期间界定方式,";
                break;
            case "TSDOTAY":
                result = "会计年度启用日";
                break;
            case "DOUDAP":
                result = "账套会计期间启用日期";
                break;
            case "DOAO":
                result = "账套会计启用日期";
                break;
            case "SMALLBUSS":
                result = "小规模企业";
                break;
            case "GENERALTAXENTER":
                result = "一般纳税人企业";
                break;
            default :
                result = val;
                break;
        }
        return result;
    }

})