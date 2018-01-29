var app = angular.module('addSecond', ['toastr']);
app.controller('addSecondCtrl', function ($scope, accountancourseSer, $state, toastr, $stateParams) {

    var secondData = { id: $stateParams.id };

    // 获取一级科目的id
    accountancourseSer.carInsuranceId(secondData).then(function (response) {
        if (response.data.code == 0) {
            $scope.twoLevel = response.data.data;
            $scope.twoLevel.code = null;
            $scope.twoLevel.accountanName = null;
        } else {
            toastr.error(response.data.tip, '温馨提示');
        }
    });

    //添加二级科目
    $scope.secondAddFun = function () {
        var vm = $scope;
        var data = {
            belongSubjectsId: $stateParams.id,
            code: vm.twoLevel.code,
            accountanName: vm.twoLevel.accountanName,
            belongCategory: vm.twoLevel.belongCategory,
            balanceDirection: vm.twoLevel.balanceDirection
        }
        if (vm.twoLevel.belongCategory == 'ASSETS') {
            accountancourseSer.addTwoLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.list[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });

        } else if (vm.twoLevel.belongCategory == 'LIABILITIES') {
            accountancourseSer.addTwoLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.fulist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else if (vm.twoLevel.belongCategory == 'COMMON') {
            accountancourseSer.addTwoLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.golist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else if (vm.twoLevel.belongCategory == 'RIGHTSINTERESTS') {
            accountancourseSer.addTwoLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.qulist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else if (vm.twoLevel.belongCategory == 'COST') {
            accountancourseSer.addTwoLevel(data).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.chlist[12]');
                    toastr.success("已成功添加二级科目", '温馨提示');
                } else {
                    toastr.error(response.data.data.tip, '温馨提示');
                }
            });
        } else if (vm.twoLevel.belongCategory == 'PROFITLOSS') {
            accountancourseSer.addTwoLevel(data).then(function (response) {
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




