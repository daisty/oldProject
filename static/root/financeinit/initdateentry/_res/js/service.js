var app = angular.module('initdateentryServe',[]);
app.factory('initdateentrySer',function ($http) {
    return {
        menuPermission:menuPermission,
        listMarketserve1 : listMarketserve,
        countBaseInfo1:countBaseInfo,
        getOneById1:getOneById,
        marketserveapplyEdit1:marketserveapplyEdit,
        shisuCode:shisuCode
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/initdateentry/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/initdateentry/list',{
            params:data
        })
    }
    //试算平衡
    function shisuCode(data) {
        return $http.get('/shisuCode/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/initdateentry/count')
    }

    //id编辑
    function getOneById(data) {
        return $http.get('/initdateentry/getOneById',{
            params:data
        })
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/initdateentry/edit',data)
    }

});
