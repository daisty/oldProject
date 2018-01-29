var app = angular.module('accountServer', []);
app.factory('accountSer', function ($http) {
    return {
        menuPermission: menuPermission,
        editTowerWork: editTowerWork,
        getFirst: getFirst,
        countTowerWork: countTowerWork,
        towerWorkList: towerWorkList,
        addTowerWork: addTowerWork,
        towerWorkId: towerWorkId,
        deleteTowerWork: deleteTowerWork,
        secondName: secondName,
        thirdName: thirdName
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/account/guidePermission/' + data);
    }
    //列表
    function towerWorkList(data) {
        return $http.get('/towerWorkList/list', {
            params: data

        })
    }
    //添加
    function addTowerWork(data) {
        return $http.post('/addTowerWork/add', data)
    }

    //编辑
    function editTowerWork(data) {
        return $http.post('/editTowerWork/edit', data)
    }
    //id查询
    function towerWorkId(data) {
        return $http.get('/towerWorkId/info', {
            params: data
        })
    }
    //分页总条数
    function countTowerWork() {
        return $http.get('/countTowerWork/count')
    }
    //获取一级科目
    function getFirst() {
        return $http.get('/account/firstNameCode')
    }

    //获取二级科目
    function secondName(data) {
        return $http.get('/account/sendName/id', {
            params: data
        })
    }
    //获取三级科目
    function thirdName(data) {
        return $http.get('/account/thirdName/id', {
            params: data
        })
    }
    //删除
    function deleteTowerWork(data) {
        return $http.get('/deleteTowerWork/delete', {
            params: data
        })
    }


});
