var app = angular.module('withunitExport', ['toastr']);
app.controller('withunitExportCtrl', function($scope,$state,toastr){
    //添加
    $scope.workersAddFun = function(){
        var obj = {
        };
        window.open(`/withunit/exportFile${encode(obj,true)}`);
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


