var app = angular.module('accountdepartmentAdd', ['toastr']);
app.controller('accountdepartmentAddCtrl', function ($scope, accountdepartmentSer, $state, toastr) {
   //获取所有部门
    accountdepartmentSer.getGroups().then(function (response) {
        if (response.data.code == 0) {
         $scope.patment=response.data.data
        }else {
            toastr.error(  response.data.msg , '温馨提示');
        }
    });
    //获取所有用户
    accountdepartmentSer.getUsernamedepat().then(function (response) {
        if (response.data.code == 0) {
            $scope.allnames=response.data.data
        }else {
            toastr.error(  response.data.msg , '温馨提示');
        }
    });


    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;
        accountdepartmentSer.addAccident(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.financeinit.accountdepartment.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    };
});




