var app = angular.module('usecommonly', [{
    files: [
        "root/financeinit/usecommonly/_res/js/service.js"
    ]
}]);
app.controller('usecommonlyCtrl', function ($scope, $state) {
    if ($state.current.url == '/usecommonly') {//默认加载列表
        $state.go('root.financeinit.usecommonly.list[12]');
    }
}).controller('usecommonlyMenuCtrl', function ($scope, $state, $rootScope, $location, usecommonlySer) {
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if ($location.path().split('/').slice(-1) == 'list[12]' && window.location.href.indexOf('id=') == -1) {
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if ($location.search().name) { $scope.menuClass = $location.search().name + 'Menu' }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        usecommonlySer.menuPermission(buttonName).then(function (response) {
            if (response.data.code == 0 && response.data.data) {
                $scope[buttonName] = true;
            } else {
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function (event, id) {
        $scope.idList = id;
    });
    $scope.$on('pageId', function (event, flag) {
        $scope.page = flag;
    });
    if (!$scope.page) {
        $scope.page = $location.search().page;
    }
    $scope.list = function () {
        $scope.menuClass = 'listMenu';
        $scope.idList = ''
    };
    //添加
    $scope.add = function () {
        $scope.menuClass = 'addMenu';
        $scope.idList = ''
    };
    //删除
    $scope.delete = function () {
        if ($scope.idList) {
            $state.go('root.financeinit.usecommonly.list[12]', { id: $scope.idList, name: 'delete', page: $scope.page });
            $scope.menuClass = 'deleteMenu';

        }
    };
});
app.filter('wwcover', function () {
    return function (val) {
        var result;
        switch (val) {
            case "CASHWITHDRAWAL":
                result = "提现";
                break;
            case "EXISENTIAL":
                result = "存现";
                break;
            case "GTSTM":
                result = "计提本月工资";
                break;
            case "STIM":
                result = "本月服务收入";
                break;
            case "RECEIVEPAYMENT":
                result = "收到货款";
                break;
            case "PAYMENT":
                result = "支付货款";
                break;
            case "PSSTM":
                result = "支付本月社保";
                break;
            case "POE":
                result = "支付办公费";
                break;
            case "ROTE":
                result = "报销差旅";
                break;
            case "PAYFORT":
                result = "支付交通费";
                break;
            case "PBE":
                result = "支付业务招待费";
                break;
            case "PTMST":
                result = "支付本月税金";
                break;
            case "MTAAT":
                result = "计提本月税金及附加";
                break;
            default:
                result = val;
        }
        return result;
    }

})