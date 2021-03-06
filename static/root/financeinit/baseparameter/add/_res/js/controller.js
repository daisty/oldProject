var app = angular.module('baseparameterAdd', ['toastr']);
app.controller('baseparameterAddCtrl', function ($scope, baseparameterSer, $state, toastr) {
    //获取所有公司名称
    baseparameterSer.commercialList().then(function (response) {
        if (response.data.code == 0) {
            $scope.conpany=response.data.data;
        }else {
            toastr.error(  response.data.msg , '温馨提示');
        }
    });
    //添加
    $scope.basicInfoAddFun = function () {
        var vm = $scope;
        vm.add.accountOpening=angular.element('.accountOpening').val();
        vm.add.dateDuringPeriod=angular.element('.dateDuringPeriod').val()
        if(vm.add.accountOpening==''||vm.add.accountOpening==undefined || vm.add.dateDuringPeriod==''||vm.add.dateDuringPeriod==undefined){
            toastr.error("时间不能为空" , '温馨提示');
            return;
        }
        baseparameterSer.addCarInsurance(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.financeinit.baseparameter.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    };
});




