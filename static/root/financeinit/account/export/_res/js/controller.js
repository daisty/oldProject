var app = angular.module('accountExport', ['toastr']);
app.controller('accountExportCtrl', function($scope,accountSer,$state,toastr){
    //添加
    $scope.workersAddFun = function(){
        window.open(`/accountExport/exportFile`);
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


