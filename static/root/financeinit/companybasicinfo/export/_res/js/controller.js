var app = angular.module('commercialExport', ['toastr']);
app.controller('commercialExportCtrl', function($scope,commercialSer,$state,toastr){
    //添加
    $scope.workersAddFun = function(){
        window.open(`/companybasicinfo/exportFile`);
    };
});
function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]) {
        contacat = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}


