var app = angular.module('initdateentryList', ['ng-pagination','toastr']);
app.controller('initdateentryListCtrl',function($scope,initdateentrySer,toastr,$stateParams,$state,$location) {
    $scope.$emit('changeId', null);
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.marketserveLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page',$location.search().page);
    };

    function activatePage(page) {
        if($scope.marketserveLists) return;
        var listData = {
            page:page || 1
        }
        initdateentrySer.listMarketserve1(listData).then(function(response){
            if(response.data.code==0){
                $scope.marketserveLists = response.data
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.marketserveLists.data,function(obj){
                        if(obj.id == $stateParams.id.split('&')[0]){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    initdateentrySer.countBaseInfo1().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    if($stateParams.name=='shisu'){
        $scope.delShow = true;
        initdateentrySer.shisuCode().then(function(response){
            if(response.data.code == 0){
                $scope.suType = response.data.data;
                $scope.arr=$scope.suType.split('且')

            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.financeinit.initdateentry.list[12]',{name:null});
    };




});
