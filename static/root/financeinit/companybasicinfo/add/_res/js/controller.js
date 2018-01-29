var app = angular.module('commercialAdd', ['toastr']);
app.controller('commercialAddCtrl', function ($scope, commercialSer, $state, toastr) {
    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;
        commercialSer.addBasicInfo(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.financeinit.companybasicinfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    };
});




