var app = angular.module('accountancourseAdd', ['toastr']);
app.controller('accountancourseAddCtrl', function ($scope, accountancourseSer, $state, toastr) {
    //  $scope.add={}
    //  $scope.getChange=function () {
    //    if( $scope.code == "" || $scope.code == undefined){
    //        return;
    //    }
    //     var data={
    //         code:$scope.code.toString()
    //     }
    //     accountancourseSer.getComoment(data).then(function (response) {
    //         if (response.data.code == 0) {
    //             $scope.firedata=response.data.data;
    //             $scope.add.belongCategory=$scope.firedata.belongCategory;
    //             $scope.add.balanceDirection=$scope.firedata.balanceDirection;

    //         }else {
    //             toastr.error( response.data.msg , '温馨提示');
    //         }
    //     });
    // }

    //添加
    $scope.subjectAddFun = function () {
        var vm = $scope;
        vm.add.code=vm.code.toString();
        if(vm.add.belongCategory=='ASSETS'){
            accountancourseSer.addOneLevel(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.list[12]');
                    toastr.success("已成功添加", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });

        }else if (vm.add.belongCategory=='LIABILITIES'){
            accountancourseSer.addOneLevel(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.fulist[12]');
                    toastr.success("已成功添加", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        } else if (vm.add.belongCategory=='COMMON'){
            accountancourseSer.addOneLevel(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.golist[12]');
                    toastr.success("已成功添加", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        }else if (vm.add.belongCategory=='RIGHTSINTERESTS'){
            accountancourseSer.addOneLevel(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.qulist[12]');
                    toastr.success("已成功添加", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        }else if (vm.add.belongCategory=='COST'){
            accountancourseSer.addOneLevel(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.chlist[12]');
                    toastr.success("已成功添加", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        }else if (vm.add.belongCategory=='PROFITLOSS'){
            accountancourseSer.addOneLevel(vm.add).then(function (response) {
                if (response.data.code == 0) {
                    $state.go('root.financeinit.accountancourse.sulist[12]');
                    toastr.success("已成功添加", '温馨提示');
                }else {
                    toastr.error(  response.data.msg , '温馨提示');
                }
            });
        }else {
            return;
        }
    };
});




