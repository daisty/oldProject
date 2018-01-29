var app = angular.module('commercialServer',[]);
app.factory('commercialSer',function ($http) {
    return {
        commercialList:commercialList,
        menuPermission : menuPermission,
        addBasicInfo:addBasicInfo,
        editBasicInfo:editBasicInfo,
        findInfoId:findInfoId,
        countChargestand:countChargestand,
        deleteBasicInfo:deleteBasicInfo
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/collectemail/guidePermission/'+data);
    }
    //列表
    function commercialList(data) {
        return $http.get('/commercialList/list',{
            params: data
        });
    }
    //添加
    function addBasicInfo(data){
        return $http.post('/addBasicInfo/add',data);
    }
    //编辑
    function editBasicInfo(data){
        return $http.post('/editBasicInfo/edit',data);
    }

    //id查询
    function findInfoId(data){
        return $http.get('/findInfoId/info',{
            params:data
        })
    }

    //分页总条数
    function countChargestand(){
        return $http.get('/countchargestand/count')
    }
    //删除
    function deleteBasicInfo(data){
        return $http.get('/deleteBasicInfo/delete',{
            params: data
        })
    }
});
