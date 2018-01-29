var app = angular.module('groupEdit', ['toastr']);
app.controller('groupEditCtrl', function($scope, groupSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};
    //获取ID
    groupSer.groupOneId(basicData).then(function(response){
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
        groupSer.editGroup(vm.add).then(function(response){
            if(response.data.code == 0){
                $state.go('root.financeinit.withunit.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    };
});





