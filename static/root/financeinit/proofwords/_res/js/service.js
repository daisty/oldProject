var app = angular.module('proofwordsServe', []);
app.factory('proofwordsSer', function ($http) {
    return {
        menuPermission: menuPermission,
        listMarketserve1: listMarketserve,
        countBaseInfo1: countBaseInfo,
        addMarketserveapply1: addMarketserveapply,
        deleteWords: deleteWords
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/proofwords/guidePermission/' + data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/proofwords/list', {
            params: data
        })
    }
    //分页
    function countBaseInfo() {
        return $http.get('/proofwords/count')
    }
    //添加
    function addMarketserveapply(data) {
        return $http.post('/proofwords/add', data)
    }
    //删除
    function deleteWords(data) {
        return $http.get('/proofwords/delete', {
            params: data
        })
    }
});
