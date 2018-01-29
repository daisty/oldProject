var app = angular.module('accountdepartmentServer',[]);
app.factory('accountdepartmentSer',function ($http) {
    return {
        menuPermission : menuPermission,
        editBasicInfo:editBasicInfo,
        countAccident:countAccident,
        accidentList:accidentList,
        addAccident:addAccident,
        accidentId:accidentId,
        deleteAccident:deleteAccident,
        getGroups:getGroups,
        getUsernamedepat:getUsernamedepat
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/accountdepartment/guidePermission/'+data);
    }
    //列表
    function accidentList(data) {
        return $http.get('/accountdepartmentList/list',{
            params: data
        })
    }
    //添加
    function addAccident(data){
        return $http.post('/addccountdepartment/add',data)
    }
    //编辑
    function editBasicInfo(data){
        return $http.post('/editAccountdepartment/edit',data)
    }

    //id查询
    function accidentId(data){
        return $http.get('/accountdepartmentId/info',{
            params:data
        })
    }
    //分页总条数
    function countAccident(){
        return $http.get('/countAccountdepartment/count')
    }
    //获取所有部门
    function getGroups(){
        return $http.get('/getGroups/countall')
    }
    //获取所有用户
    function getUsernamedepat(){
        return $http.get('/getUsernamedepat/countall')
    }

    //删除
    function deleteAccident(data){
        return $http.get('/deleteAccountdepartment/delete',{
            params: data
        })
    }


});
