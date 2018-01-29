var app = angular.module('baseparameterList', ['ng-pagination','toastr']);
app.controller('baseparameterListCtrl',function($scope,baseparameterSer,toastr,$state,$location,$stateParams){
    $scope.$emit('changeId', null);
    //分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取搜索字段
    $scope.companyName = $stateParams.companyName?$stateParams.companyName:'';
    if($stateParams.companyName){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索
    $scope.search = function(){
        $state.go('root.financeinit.baseparameter.list[12]',{companyName:$scope.companyName,page:1});
    }

    function activatePage(page) {
        if($scope.mailLists) return;
        var listData = {
            page:page||1,
            companyName:$scope.companyName || ''
        };
        baseparameterSer.carInsuranceList(listData).then(function(response){
            if(response.data.code==0){
                $scope.mailLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.mailLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                    $scope.$emit('page', $location.search().page);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.selectList = function(event){
        angular.forEach($scope.mailLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //查看更多
    $scope.moreList = function (event) {
        angular.forEach($scope.mailLists.data, function (obj) {
            if (event.id !== obj.id) {
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    baseparameterSer.countcarInsurance().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.financeinit.baseparameter.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        baseparameterSer.deleteCarInsurance(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.financeinit.baseparameter.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.financeinit.baseparameter.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.titles = ['公司名称'];
});

