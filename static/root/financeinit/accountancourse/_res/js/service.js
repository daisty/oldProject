var app = angular.module('accountancourseServer', []);
app.factory('accountancourseSer', function ($http) {
    return {
        menuPermission: menuPermission,
        editCarInsurance: editCarInsurance,
        countcarInsurance: countcarInsurance,
        carInsuranceList: carInsuranceList,
        carInsuranceId: carInsuranceId,
        deleteCarInsurance: deleteCarInsurance,
        commercialList: commercialList,
        fulistList: fulistList,
        countFulist: countFulist,
        golistList: golistList,
        countGolist: countGolist,
        chlistList: chlistList,
        countChlist: countChlist,
        sulistList: sulistList,
        countSulist: countSulist,
        countQulist: countQulist,
        qulistList: qulistList,
        getsuType: getsuType,
        twoSubject: twoSubject,
        threeSubject: threeSubject,
        addOneLevel: addOneLevel,
        addTwoLevel: addTwoLevel,
        addThirdLevel: addThirdLevel
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/baseparameter/guidePermission/' + data);
    }
    //跟据会计科目获取所属类型
    function getsuType(data) {
        return $http.get('/getsuType/list', {
            params: data
        })
    }

    //权益类列表
    function qulistList(data) {
        return $http.get('/qulistList/list', {
            params: data
        })
    }

    //权益类分页总条数
    function countQulist() {
        return $http.get('/countQulist/count')
    }
    //资产类列表
    function carInsuranceList(data) {
        return $http.get('/accountancourse/list', {
            params: data
        })
    }

    //资产类分页总条数
    function countcarInsurance() {
        return $http.get('/accountancourse/count')
    }
    //负债类列表
    function fulistList(data) {
        return $http.get('/fulist/list', {
            params: data
        })
    }
    //负债类分页总条数
    function countFulist() {
        return $http.get('/fulist/count')
    }
    //共同类列表
    function golistList(data) {
        return $http.get('/golist/list', {
            params: data
        })
    }
    //共同类分页总条数
    function countGolist() {
        return $http.get('/golist/count')
    }
    //成本类列表
    function chlistList(data) {
        return $http.get('/chlist/list', {
            params: data
        })
    }
    //成本类分页总条数
    function countChlist() {
        return $http.get('/chlist/count')
    }
    //损益类列表
    function sulistList(data) {
        return $http.get('/sulist/list', {
            params: data
        })
    }
    //损益类分页总条数
    function countSulist() {
        return $http.get('/sulist/count')
    }
    //获取所有公司
    function commercialList(data) {
        return $http.get('/commercialList/list', {
            params: data
        });
    }
    //编辑
    function editCarInsurance(data) {
        return $http.post('/editAccountancourse/edit', data)
    }
    //id查询
    function carInsuranceId(data) {
        return $http.get('/accountancourseId/info', {
            params: data
        })
    }
    //删除
    function deleteCarInsurance(data) {
        return $http.get('/deleteAccountancourse/delete', {
            params: data
        })
    }

    //新增需求接口  所有列表
    // 根据一级科目id获取二级科目列表
    function twoSubject(data) {
        return $http.get('/accountancourse/findSecondList', {
            params: data
        })
    }

    // 根据二级科目id获取三级科目列表
    function threeSubject(data) {
        return $http.get('/accountancourse/findThirdList', {
            params: data
        })
    }

    //添加一级科目
    function addOneLevel(data) {
        return $http.post('/accountancourse/addOne', data)
    }
    //添加二级科目
    function addTwoLevel(data) {
        return $http.post('/accountancourse/addSend', data)
    }
    //添加三级科目
    function addThirdLevel(data) {
        return $http.post('/accountancourse/addThird', data)
    }
});
