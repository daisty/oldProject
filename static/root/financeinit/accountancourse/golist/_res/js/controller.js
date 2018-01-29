var app = angular.module('golist', ['ng-pagination', 'toastr']);
app.controller('golistCtrl', function ($scope, accountancourseSer, toastr, $state, $location, $stateParams) {
    $scope.$emit('changeId', null);
    $scope.$emit('oneLevelId', null); //一级科目id
    $scope.$emit('twiceLevelId', null); //二级科目id
    $scope.$emit('threeLevelId', null); //三级科目id
    $scope.$emit('ziId', null); //资产id
    $scope.$emit('fuId',null); //负债id
    $scope.$emit('chId',null); //成本id
    $scope.$emit('suId',null); //损益id
    $scope.$emit('quId',null); //权益id
    $scope.$emit('goId',null); //共同id
    $scope.$on('iSsearch', function (event, newIs) {
        $scope.isView = newIs;
    });
    //获取搜索字段
    $scope.accountanName = $stateParams.accountanName ? $stateParams.accountanName : '';
    if ($stateParams.accountanName) {
        $scope.$emit('isId', false);
        $scope.isView = false;
    } else {
        $scope.$emit('isId', true);
    }

    $scope.secter = function () {
        //根据会计科目名称获取属类型
        var data = {
            accountanName: $scope.accountanName
        }
        accountancourseSer.getsuType(data).then(function (response) {
            if (response.data.code == 0) {

                $scope.belongCategory = response.data.data
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    //搜索
    $scope.search = function () {
        if ($scope.belongCategory == "ASSETS") {
            $state.go('root.financeinit.accountancourse.list[12]', { accountanName: $scope.accountanName, page: 1 });
        } else if ($scope.belongCategory == "LIABILITIES") {
            $state.go('root.financeinit.accountancourse.fulist[12]', { accountanName: $scope.accountanName, page: 1 });
        } else if ($scope.belongCategory == "COMMON") {
            $state.go('root.financeinit.accountancourse.golist[12]', { accountanName: $scope.accountanName, page: 1 });
        } else if ($scope.belongCategory == "RIGHTSINTERESTS") {
            $state.go('root.financeinit.accountancourse.qulist[12]', { accountanName: $scope.accountanName, page: 1 });
        } else if ($scope.belongCategory == "COST") {
            $state.go('root.financeinit.accountancourse.chlist[12]', { accountanName: $scope.accountanName, page: 1 });
        } else if ($scope.belongCategory == "PROFITLOSS") {
            $state.go('root.financeinit.accountancourse.sulist[12]', { accountanName: $scope.accountanName, page: 1 });
        } else {
            return;
        }
    }
    function activatePage(page) {
        if ($scope.mailLists) return;
        var listData = {
            page: page || 1,
            accountanName: $scope.accountanName || ''
        };
        accountancourseSer.golistList(listData).then(function (response) {
            if (response.data.code == 0) {
                $scope.mailLists = response.data.data;
                if ($stateParams.id) {
                    if ($stateParams.id.indexOf('&')) {
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.mailLists, function (obj) {
                        if (obj.id == $stateParams.id) {
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

    //点击查看二级科目
    $scope.moreList = function (event) {
        angular.forEach($scope.mailLists, function (obj) {
            if (event.id !== obj.id) {
                obj._moreList = false
            }
        });
        var data = {
            id: event.id
        };
        accountancourseSer.twoSubject(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.twoLists = response.data.data;
            };
            event._moreList = !event._moreList;
        });
    }
    // 点击查看三级科目
    $scope.twoList = function (event) {
        angular.forEach($scope.twoLists, function (obj) {
            if (event.id !== obj.id) {
                obj._twoList = false;
            }
        });
        var data = {
            id: event.id
        };
        accountancourseSer.threeSubject(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.thridList = response.data.data;

            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        event._twoList = !event._twoList;
    };

    //选择一级科目列表
    $scope.selectList = function (event) {
        var data = {
            id: event.id
        };
        accountancourseSer.twoSubject(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.twoLists = response.data.data;
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });

        if ($scope.twoLists != []) {
            $scope.c = $scope.mailLists;
        } else {
            $scope.c = $scope.mailLists.concat($scope.twoLists)
        }

        angular.forEach($scope.c, function (obj) {
            obj._selectList = false;
        });
        event._selectList = true;
        $scope.idListd = event.id;
        $scope.firstId = event.id;

        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('oneLevelId', $scope.firstId);
        $scope.$emit('goId', $scope.idListd);
        $scope.$emit('page', $location.search().page);
    };

    //选中二级科目列表
    $scope.selectList2 = function (event) {
        var data = {
            id: event.id
        };
        // 获取三级科目的数据
        accountancourseSer.threeSubject(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.thridList = response.data.data;
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        // 判断是否是空数组
        if ($scope.twoLists != []) {
            $scope.take = $scope.mailLists.concat($scope.twoLists);
        }else{
            $scope.take = $scope.mailLists.concat($scope.twoLists).concat($scope.thridList);
        }

        //控制样式
        angular.forEach($scope.take, function (obj) {
            obj._selectList = false;
        });
        event._selectList = true;
        $scope.secondId = event.id;  //监听二级科目的id
        //向父Ctrl传递事件
        $scope.$emit('twiceLevelId', $scope.secondId);
        $scope.$emit('ziId', $scope.idListd);
        $scope.$emit('page', $location.search().page);
    };

    //选中三级级科目列表
    $scope.selectList3 = function (event) {

        //控制样式
        angular.forEach($scope.mailLists.concat($scope.twoLists).concat($scope.thridList), function (obj) {
            obj._selectList = false;
        });
        event._selectList = true;
        $scope.thridId = event.id;
        //向父Ctrl传递事件
        $scope.$emit('threeLevelId', $scope.thridId);
        $scope.$emit('goId', $scope.idListd);
        $scope.$emit('page', $location.search().page);
    }

    //分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    // 列表分页
    accountancourseSer.countGolist().then(function (response) {
        if (response.data.code == 0) {
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page * 10 > 10 ? ($location.search().page - 1) * 10 : null;
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
        $state.go('root.financeinit.accountancourse.golist[12]', { id: null, name: null });
    };
    var count = 0;
    $scope.delFn = function () {//确认删除
        var data = {
            id: $stateParams.id
        };
        accountancourseSer.deleteCarInsurance(data).then(function (response) {
            if (response.data.code == 0) {
                count++;
                toastr.info("信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.$emit('oneLevelId', null); //一级科目id
                $scope.$emit('twiceLevelId', null); //二级科目id
                $scope.$emit('threeLevelId', null); //三级科目id
                $scope.$emit('goId',null); //共同id
                $scope.delShow = false;
                if (($scope.custom.itemsCount - count) % 10) {
                    $state.go('root.financeinit.accountancourse.golist[12]', { id: null, name: null });
                } else {
                    $state.go('root.financeinit.accountancourse.golist[12]', { id: null, name: null, page: $location.search().page - 1 });
                }
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.titles = ['会计科目名称'];
});

