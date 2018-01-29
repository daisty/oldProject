var app = angular.module('addThird', ['toastr']);
app.controller('addThirdCtrl', function ($scope, accountancourseSer, $state, toastr, $stateParams) {

    var secondData = { id: $stateParams.id };
    // 获取二级科目的id
    // accountancourseSer.threeSubject(secondData).then(function (response) {
    //     if (response.data.code == 0) {
    //         $scope.theLevel = response.data.data;
    //         $scope.code = parseInt($scope.theLevel.code);
    //         $scope.theLevel.belongCategory = $scope.theLevel[0].belongCategory;
    //         $scope.theLevel.balanceDirection = $scope.theLevel[0].balanceDirection;
    //     } else {
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });
    accountancourseSer.carInsuranceId(secondData).then(function (response) {
        if (response.data.code == 0) {
            $scope.theLevel = response.data.data;
            $scope.theLevel.code = null;
            $scope.theLevel.accountanName = null;
        } else {
            toastr.error(response.data.tip, '温馨提示');
        }
    });
    //添加二级科目
    $scope.thirdAddFun = function () {
        var vm = $scope;
        var data = {
            belongSubjectsId: $stateParams.id,
            code: vm.theLevel.code,
            accountanName: vm.theLevel.accountanName,
            belongCategory: vm.theLevel.belongCategory,
            balanceDirection: vm.theLevel.balanceDirection
        }
        if (vm.theLevel.belongCategory == 'ASSETS') {
            accountancourseSer.addThirdLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.list[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });

        } else if (vm.theLevel.belongCategory == 'LIABILITIES') {
            accountancourseSer.addThirdLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.fulist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else if (vm.theLevel.belongCategory == 'COMMON') {
            accountancourseSer.addThirdLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.golist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else if (vm.theLevel.belongCategory == 'RIGHTSINTERESTS') {
            accountancourseSer.addThirdLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.qulist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else if (vm.theLevel.belongCategory == 'COST') {
            accountancourseSer.addThirdLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.chlist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else if (vm.theLevel.belongCategory == 'PROFITLOSS') {
            accountancourseSer.addThirdLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.sulist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else {
            return;
        }
    };
});




