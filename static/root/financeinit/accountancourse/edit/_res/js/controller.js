var app = angular.module('accountancourserEdit', ['toastr']);
app.controller('accountancourserEditCtrl', function($scope, accountancourseSer,$stateParams,$state,toastr){

    var basicData ={id: $stateParams.id};
    //获取ID
    accountancourseSer.carInsuranceId(basicData).then(function(response){
        if(response.data.code == '0'){
            $scope.add = response.data.data;
            $scope.code=parseInt($scope.add.code);
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.getChange=function () {
        if( $scope.add.code == "" || $scope.add.code == undefined){
            return;
        }
        var data={
            code:$scope.add.code.toString()
        }
        accountancourseSer.getComoment(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.firedata=response.data.data;
                $scope.add.belongCategory=$scope.firedata.belongCategory;
                $scope.add.balanceDirection=$scope.firedata.balanceDirection;
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    }
    //编辑点击提交
    $scope.basicInfoEditFun = function(){
        var vm = $scope;
      $scope.add.code=$scope.code.toString();
        if($scope.add.belongCategory=='ASSETS'){
            accountancourseSer.editCarInsurance(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.list[12]');
                    toastr.success("编辑成功", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });

        }else if ($scope.add.belongCategory=='LIABILITIES'){
            accountancourseSer.editCarInsurance(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.fulist[12]');
                    toastr.success("编辑成功", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        } else if ($scope.add.belongCategory=='COMMON'){
            accountancourseSer.editCarInsurance(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.golist[12]');
                    toastr.success("编辑成功", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        }else if ($scope.add.belongCategory=='RIGHTSINTERESTS'){
            accountancourseSer.editCarInsurance(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.qulist[12]');
                    toastr.success("编辑成功", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        }else if ($scope.add.belongCategory=='COST'){
            accountancourseSer.editCarInsurance(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.chlist[12]');
                    toastr.success("编辑成功", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        }else if ($scope.add.belongCategory=='PROFITLOSS'){
            accountancourseSer.editCarInsurance(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.sulist[12]');
                    toastr.success("编辑成功", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        }else {
            return;
        }
    };
});





