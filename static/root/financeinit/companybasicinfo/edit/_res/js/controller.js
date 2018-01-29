var app = angular.module('commercialEdit', ['toastr']);
app.controller('commercialEditCtrl', function($scope, commercialSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    commercialSer.findInfoId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.add = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        commercialSer.editBasicInfo(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.financeinit.companybasicinfo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(response.data.msg , '温馨提示');
            }
        });
    };
});





