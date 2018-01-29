var app = angular.module('currencyAdd', ['toastr']);
app.controller('currencyAddCtrl', function($scope, currencySer,$state,toastr){
    //添加
    $scope.AddFun = function(){
        $scope.data.startTime = angular.element('.startTiming').val();//计划时间
        var data = $scope.data;
        currencySer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.financeinit.currency.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
});




