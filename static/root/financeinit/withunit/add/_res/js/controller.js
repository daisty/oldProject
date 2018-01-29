var app = angular.module('groupAdd', ['toastr']);
app.controller('groupAddCtrl', function ($scope, groupSer, $state, toastr) {
    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;
        groupSer.addGroup(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.financeinit.withunit.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    };
});




