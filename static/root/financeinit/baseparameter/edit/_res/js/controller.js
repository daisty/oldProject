var app = angular.module('baseparameterEdit', ['toastr']);
app.controller('baseparameterEditCtrl', function($scope, baseparameterSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取所有公司名称
    baseparameterSer.commercialList().then(function (response) {
        if (response.data.code == 0) {
            $scope.conpany=response.data.data;
        }else {
            toastr.error(  response.data.msg , '温馨提示');
        }
    });
    //获取ID
    baseparameterSer.carInsuranceId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.add = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        vm.add.accountOpening=angular.element('.accountOpening').val();
        vm.add.dateDuringPeriod=angular.element('.dateDuringPeriod').val()
        if(vm.add.accountOpening==''||vm.add.accountOpening==undefined || vm.add.dateDuringPeriod==''||vm.add.dateDuringPeriod==undefined){
            toastr.error("时间不能为空" , '温馨提示');
            return;
        }
        baseparameterSer.editCarInsurance(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.financeinit.baseparameter.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    };
});





