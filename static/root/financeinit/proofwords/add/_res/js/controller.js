var app = angular.module('proofwordsAdd', ['toastr']);
app.controller('proofwordsAddCtrl', function($scope, proofwordsSer,$state,toastr){
    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        proofwordsSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.financeinit.proofwords.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});




