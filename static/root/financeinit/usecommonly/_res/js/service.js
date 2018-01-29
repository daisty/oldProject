var app = angular.module('usecommonlyServe', []);
app.factory('usecommonlySer', function ($http) {
    return {
        menuPermission: menuPermission,
        listMarketserve1: listMarketserve,
        countBaseInfo1: countBaseInfo,
        addMarketserveapply1: addMarketserveapply,
        deleteUsed: deleteUsed
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/usecommonly/guidePermission/' + data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/usecommonly/list', {
            params: data
        })
    }
    //分页
    function countBaseInfo() {
        return $http.get('/usecommonly/count')
    }
    //添加
    function addMarketserveapply(data) {
        return $http.post('/usecommonly/add', data)
    }
    //删除
    function deleteUsed(data) {
        return $http.get('/usecommonly/delete', {
            params: data
        })
    }
});
