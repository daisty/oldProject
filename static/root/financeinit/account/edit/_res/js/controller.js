var app = angular.module('accountEdit', ['toastr']);
app.controller('accountEditCtrl', function ($scope, accountSer, $stateParams, $state, toastr) {
    var basicData = { id: $stateParams.id };
    //获取所有一级科目
    accountSer.getFirst().then(function (response) {
        if (response.data.code == 0) {
            $scope.firstL = response.data.data;
            accountSer.towerWorkId(basicData).then(function (response) {
                if (response.data.code == 0) {
                    $scope.edit = response.data.data;
                    $scope.data = {};
                    for (var i = 0; i < $scope.firstL.length; i++) {
                        if ($scope.edit.firstSubject == $scope.firstL[i].accountanName) {

                            $scope.data = {
                                id: $scope.firstL[i].id
                            }

                        };
                    };
                    if ($scope.firstL.length) {
                        accountSer.secondName($scope.data).then(function (response) {
                            if (response.data.code == 0) {
                                $scope.secondLevel = response.data.data;
                                $scope.data2 = {};
                                for (let i = 0; i < $scope.secondLevel.length; i++) {
                                    if ($scope.edit.secondSubject == $scope.secondLevel[i].accountanName) {
                                        $scope.data2 = {
                                            id: $scope.secondLevel[i].id
                                        }
                                    }
                                };
                                if ($scope.secondLevel.length) {
                                    accountSer.thirdName($scope.data2).then(function (response) {
                                        if (response.data.code == 0) {
                                            $scope.thirdLevel = response.data.data
                                        } else {
                                            toastr.error(response.data.msg, '温馨提示');
                                        }
                                    });
                                }else{
                                    return;
                                }

                            } else {
                                toastr.error(response.data.msg, '温馨提示');
                            };
                        });
                    }else{
                        return;
                    }


                } else {
                    toastr.error(response.data.msg, '温馨提示');
                };
            });
        } else {
            toastr.error(response.data.msg, '温馨提示');
        };
    });

    //通过一级科目获取二级科目
    $scope.changSelect = function (obj) {
        $scope.data = {};
        for (var i = 0; i < obj.length; i++) {
            if ($scope.edit.firstSubject == obj[i].accountanName) {
                $scope.data = { id: obj[i].id };
            }
        }
        if(!obj.length){
            return;
        }else if (obj.length) {
            accountSer.secondName($scope.data).then(function (response) {
                if (response.data.code == 0) {
                    $scope.secondLevel = response.data.data;
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }

    };
    //通过一级科目获取三级科目
    $scope.changThird = function (obj) {
        $scope.data2 = {};
        for (var i = 0; i < obj.length; i++) {
            if ($scope.edit.secondSubject == obj[i].accountanName) {
                $scope.data2 = { id: obj[i].id };
            }
        }
        if(!obj.length){
            return;
        }else if (obj.length) {
            accountSer.thirdName($scope.data2).then(function (response) {
                if (response.data.code == 0) {
                    $scope.thirdLevel = response.data.data;

                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        } else {
            console.log(123);
        }

    };

    // 编辑点击提交
    $scope.basicInfoEditFun = function () {
        var vm = $scope;
        vm.edit.id = $stateParams.id;
        accountSer.editTowerWork(vm.edit).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.financeinit.account.list[12]');
                toastr.success("编辑成功", '温馨提示');
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});





