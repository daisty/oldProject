var app = angular.module('baseparameterServer',[]);
app.factory('baseparameterSer',function ($http) {
    return {
        menuPermission : menuPermission,
        editCarInsurance:editCarInsurance,
        countcarInsurance:countcarInsurance,
        carInsuranceList:carInsuranceList,
        addCarInsurance:addCarInsurance,
        carInsuranceId:carInsuranceId,
        deleteCarInsurance:deleteCarInsurance,
        commercialList:commercialList
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/commercialList/guidePermission/'+data);
    }
    //列表
    function carInsuranceList(data) {
        return $http.get('/baseparameterList/list',{
            params: data
        })
    }
    //添加
    function addCarInsurance(data){
        return $http.post('/addBaseparameter/add',data)
    }
    //获取所有公司
    function commercialList(data) {
        return $http.get('/commercialList/list',{
            params: data
        });
    }
    //编辑
    function editCarInsurance(data){
        return $http.post('/editBaseparameter/edit',data)
    }
    //id查询
    function carInsuranceId(data){
        return $http.get('/baseparameterId/info',{
            params:data
        })
    }
    //分页总条数
    function countcarInsurance(){
        return $http.get('/countBaseparameter/count')
    }

    //删除
    function deleteCarInsurance(data){
        return $http.get('/deleteBaseparameter/delete',{
            params: data
        })
    }


});
