var app = angular.module('accountAdd', ['toastr']);
app.controller('accountAddCtrl', function ($scope, accountSer, $state, toastr, $stateParams) {
    //获取所有一级科目
    accountSer.getFirst().then(function (response) {
        if (response.data.code == 0) {
            $scope.firstL = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.changSelect = function (obj) {     
        $scope.data = {};
        for(var i = 0; i < obj.length; i++){
            if($scope.add.firstSubject == obj[i].accountanName){
                $scope.data = {id:obj[i].id};
            }
        }
        accountSer.secondName($scope.data).then(function (response) {
            if (response.data.code == 0) {
                $scope.secondLevel = response.data.data;
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.changThird = function (obj) {
        $scope.data2 = {};
        for(var i = 0; i < obj.length; i++){
            if($scope.add.secondSubject == obj[i].accountanName){
                $scope.data2 = {id:obj[i].id};
            }
        }
        accountSer.thirdName($scope.data2).then(function (response) {
            if (response.data.code == 0) {
                $scope.thirdLevel = response.data.data;
                
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    $scope.firsterChange = function () {
        for (let i = 0; i < $scope.firstL.length; i++) {
            if ($scope.add.firstSubject == $scope.firstL[i].accountanName) {
                var data = {
                    code: $scope.firstL[i].code
                }
            }
        }
        accountSer.secondName(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.secondL = response.data.data
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        accountSer.thirdName(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.thirdL = response.data.data;
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;

        accountSer.addTowerWork(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.financeinit.account.list[12]');
                toastr.success("已成功添加", '温馨提示');
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});




