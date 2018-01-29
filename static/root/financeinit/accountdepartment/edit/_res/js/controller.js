var app = angular.module('accountdepartmentEdit', ['toastr']);
app.controller('accountdepartmentEditCtrl', function($scope, accountdepartmentSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
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

    //获取ID
    accountdepartmentSer.accidentId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.add = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
        vm.add.id=$stateParams.id;
        accountdepartmentSer.editBasicInfo(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.financeinit.accountdepartment.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    };
});





