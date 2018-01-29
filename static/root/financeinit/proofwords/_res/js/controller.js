var app = angular.module('proofwords', [{
    files: [
        "root/financeinit/proofwords/_res/js/service.js"
    ]
}]);
app.controller('proofwordsCtrl', function ($scope, $state) {
    if ($state.current.url == '/proofwords') {//默认加载列表
        $state.go('root.financeinit.proofwords.list[12]');
    }
}).controller('proofwordsMenuCtrl', function ($scope, $state, $rootScope, $location, proofwordsSer) {
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
        proofwordsSer.menuPermission(buttonName).then(function (response) {
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
            $state.go('root.financeinit.proofwords.list[12]', { id: $scope.idList, name: 'delete', page: $scope.page });
            $scope.menuClass = 'deleteMenu';

        }
    };
});
app.filter('glcover', function () {
    return function (val) {
        var result;
        switch (val) {
            case "POCTAA":
                result = "记账凭证";
                break;
            case "WTROP":
                result = "收款凭证";
                break;
            case "POP":
                result = "付款凭证";
                break;
            case "TV":
                result = "转账凭证";
                break;
            default:
                result = val;
        }
        return result;
    }

})