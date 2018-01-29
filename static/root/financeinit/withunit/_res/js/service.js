var app = angular.module('groupMenuCtrlServer',[]);
app.factory('groupSer',function ($http) {
    return {
        menuPermission : menuPermission,
        editGroup:editGroup,
        countGroup:countGroup,
        groupList:groupList,
        addGroup:addGroup,
        groupOneId:groupOneId,
        deleteGroup:deleteGroup
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/withunit/guidePermission/'+data);
    }
    //列表
    function groupList(data) {
        return $http.get('/groupList/list',{
            params: data
        })
    }
    //添加
    function addGroup(data){
        return $http.post('/addGroup/add',data)
    }
    //编辑
    function editGroup(data){
        return $http.post('/editGroup/edit',data)
    }

    //id查询
    function groupOneId(data){
        return $http.get('/groupOneId/info',{
            params:data
        })
    }

    //分页总条数
    function countGroup(){
        return $http.get('/countGroup/count')
    }
    //删除
    function deleteGroup(data){
        return $http.get('/deleteGroup/delete',{
            params: data
        })
    }



});
