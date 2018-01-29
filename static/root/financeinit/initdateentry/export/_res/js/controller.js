var app = angular.module('initdateentryExport', ['toastr']);
app.controller('initdateentryExportCtrl', function($scope,initdateentrySer,$state,toastr){
    //导出
    $scope.exportFun = function(){
        window.open(`/initdateentry/export`);
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


