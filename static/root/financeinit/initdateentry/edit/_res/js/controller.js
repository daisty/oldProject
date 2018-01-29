var app = angular.module('initdateentryEdit', ['toastr']);
app.controller('initdateentryEditCtrl', function($scope, initdateentrySer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    $scope.riliup=''
    initdateentrySer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            if($scope.data.balanceDirection=='BORROW'){
                $scope.riliup='借'
            }else if($scope.data.balanceDirection=='CREDIT'){
                $scope.riliup='贷'
            }
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        data.id = companyId.id;;
        initdateentrySer.marketserveapplyEdit1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.financeinit.currency.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    
});
   