var app = angular.module('businsuranceCtrlModule',[]);
app.factory('businsuranceSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/siginmanage/sonPermission');
    }
    function setPermission(){
        return $http.get('/siginmanage/setButtonPermission');
    }
});