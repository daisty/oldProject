var app = angular.module('usecommonlyList', ['ng-pagination', 'toastr']);
app.controller('usecommonlyListCtrl', function ($scope, usecommonlySer, toastr, $stateParams, $state, $location) {
    $scope.$emit('changeId', null);
    //选择
    $scope.selectList = function (event) {
        angular.forEach($scope.marketserveLists.data, function (obj) {
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page', $location.search().page);
    };
    function activatePage(page) {
        if ($scope.marketserveLists) return;
        var listData = {
            page: page || 1,
            useComm: $scope.useComm || ''
        }
        usecommonlySer.listMarketserve1(listData).then(function (response) {
            if (response.data.code == 0) {
                $scope.marketserveLists = response.data
                if ($stateParams.id) {
                    if ($stateParams.id.indexOf('&')) {
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.marketserveLists.data, function (obj) {
                        if (obj.id == $stateParams.id.split('&')[0]) {
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                    $scope.$emit('page', $location.search().page);
                }
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    usecommonlySer.countBaseInfo1().then(function (response) {
        if (response.data.code == 0) {
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $stateParams.page * 10 > 10 ? ($stateParams.page - 1) * 10 : null;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //获取id
    if ($stateParams.id) {
        switch ($stateParams.name) {
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function () {//取消删除
        $scope.delShow = false;
        $state.go('root.financeinit.usecommonly.list[12]', { id: null, name: null });
    };
    var count = 0;
    $scope.delFn = function () {//确认删除
        var data = {
            id: $stateParams.id
        };
        usecommonlySer.deleteUsed(data).then(function (response) {
            if (response.data.code == 0) {
                count++;
                toastr.info("信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if (($scope.abili.itemsCount - count) % 10) {
                    $state.go('root.financeinit.usecommonly.list[12]', { id: null, name: null });
                } else {
                    $state.go('root.financeinit.usecommonly.list[12]', { id: null, name: null, page: $location.search().page - 1 });
                }
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});
