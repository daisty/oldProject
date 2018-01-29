var app = angular.module('accountancourse', [{
    files: [
        "root/financeinit/accountancourse/_res/js/service.js",
    ]
}]);
app.controller('accountancourseCtrl', function ($scope, $state) {
    if ($state.current.url == '/accountancourse') {//默认加载列表
        $state.go('root.financeinit.accountancourse.list[12]')
    }
    $scope.$emit('isVi', true);//判断是否出现搜索按钮
}).controller('accountancourseMenuCtrl', function ($scope, $state, $rootScope, $location, accountancourseSer) {
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if ($location.path().split('/').slice(-1) == 'list[12]' && window.location.href.indexOf('id=') == -1) {
            $scope.menuClass = 'listMenu';
        }
        if ($location.path().split('/').slice(-1) == 'golist[12]' && window.location.href.indexOf('id=') == -1) {
            $scope.menuClass = 'golistMenu';
        }
        if ($location.path().split('/').slice(-1) == 'chlist[12]' && window.location.href.indexOf('id=') == -1) {
            $scope.menuClass = 'chlistMenu';
        }
        if ($location.path().split('/').slice(-1) == 'qulist[12]' && window.location.href.indexOf('id=') == -1) {
            $scope.menuClass = 'qulistMenu';
        }
        if ($location.path().split('/').slice(-1) == 'sulist[12]' && window.location.href.indexOf('id=') == -1) {
            $scope.menuClass = 'sulistMenu';
        }
        if ($location.path().split('/').slice(-1) == 'fulist[12]' && window.location.href.indexOf('id=') == -1) {
            $scope.menuClass = 'fulistMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {
        $scope.idListd = window.location.href.split('id=')[1];
        if ($location.search().page) { $scope.menuClass = $location.search().name + "Menu" };
    }
    if (window.location.href.split('aa=')[1]) {
        $scope.aa = window.location.href.split('aa=')[1];
        if ($scope.aa == 2) {
            $scope.firstId = window.location.href.split('id=')[1];
        } else if ($scope.aa == 3) {
            $scope.secondId = window.location.href.split('id=')[1];
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        accountancourseSer.menuPermission(buttonName).then(function (response) {
            if (response.data.code == 0 && response.data.data) {
                $scope[buttonName] = true;
            } else {
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function (event, msg) {
        $scope.idListd = msg;
    });
    $scope.$on("zichanId", function (event, msg) {
        $scope.idzi = msg;
    });
    $scope.$on("fuzaiId", function (event, msg) {
        $scope.idfu = msg;
    });
    $scope.$on("chengId", function (event, msg) {
        $scope.idch = msg;
    });
    $scope.$on("sunyiId", function (event, msg) {
        $scope.idsu = msg;
    });
    $scope.$on("quanyiId", function (event, msg) {
        $scope.idqu = msg;
    });
    $scope.$on("gongId", function (event, msg) {
        $scope.idgo = msg;
    });

    $scope.$on("pageId", function (event, msg) {
        $scope.page = msg;
    });
    if (!$scope.page) {
        $scope.page = $location.search().page;
    }
    //监听 一级科目id
    $scope.$on("levelId", function (event, msg) {
        $scope.firstId = msg;
        $scope.aa = 2;
        if (msg) {
            $scope.secondId = null;
        }
    });
    //监听  二级科目id
    $scope.$on("twoLevelId", function (event, msg) {
        $scope.secondId = msg;
        $scope.aa = 3;
        if (msg) {
            $scope.firstId = null;
        }
    });
    //监听 三级科目id
    $scope.$on("thirdlevelId", function (event, msg) {
        $scope.thridId = msg;
        if (msg) {
            $scope.aa = 4;
            $scope.firstId = null;
            $scope.secondId = null;
        }
    });

    // 二级科目添加
    $scope.addSecond = function () {
        if ($scope.firstId) {
            $state.go('root.financeinit.accountancourse.addSecond[12]', { id: $scope.firstId, page: $scope.page, aa: $scope.aa });
            $scope.menuClass = 'addSecondMenu';
            $scope.secondId = false;
        }
    };
    // 三级科目添加
    $scope.addThird = function () {
        if ($scope.secondId) {
            $state.go('root.financeinit.accountancourse.addThird[12]', { id: $scope.secondId, page: $scope.page, aa: $scope.aa });
            $scope.menuClass = 'addThirdMenu';
            $scope.fristId = false;
        }
    };
    //删除
    $scope.delete = function () {
        if ($scope.idzi) {
            $state.go('root.financeinit.accountancourse.list[12]', { id: $scope.idzi, name: 'delete', page: $scope.page });
            $scope.menuClass = 'deleteMenu';
            if ($scope.secondId) {
                $state.go('root.financeinit.accountancourse.list[12]', { id: $scope.secondId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            } else if ($scope.thridId) {
                $state.go('root.financeinit.accountancourse.list[12]', { id: $scope.thridId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            };
        } else if ($scope.idfu) {
            $state.go('root.financeinit.accountancourse.fulist[12]', { id: $scope.idfu, name: 'delete', page: $scope.page });
            $scope.menuClass = 'deleteMenu';
            if ($scope.secondId) {
                $state.go('root.financeinit.accountancourse.fulist[12]', { id: $scope.secondId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            } else if ($scope.thridId) {
                $state.go('root.financeinit.accountancourse.fulist[12]', { id: $scope.thridId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            };
        } else if ($scope.idsu) {
            $state.go('root.financeinit.accountancourse.sulist[12]', { id: $scope.idsu, name: 'delete', page: $scope.page });
            $scope.menuClass = 'deleteMenu';
            if ($scope.secondId) {
                $state.go('root.financeinit.accountancourse.sulist[12]', { id: $scope.secondId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            } else if ($scope.thridId) {
                $state.go('root.financeinit.accountancourse.sulist[12]', { id: $scope.thridId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            }
        } else if ($scope.idqu) {
            $state.go('root.financeinit.accountancourse.qulist[12]', { id: $scope.idqu, name: 'delete', page: $scope.page });
            $scope.menuClass = 'deleteMenu';
            if ($scope.secondId) {
                $state.go('root.financeinit.accountancourse.qulist[12]', { id: $scope.secondId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            } else if ($scope.thridId) {
                $state.go('root.financeinit.accountancourse.qulist[12]', { id: $scope.thridId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            };
        } else if ($scope.idgo) {
            $state.go('root.financeinit.accountancourse.golist[12]', { id: $scope.idgo, name: 'delete', page: $scope.page });
            $scope.menuClass = 'deleteMenu';
            if ($scope.secondId) {
                $state.go('root.financeinit.accountancourse.golist[12]', { id: $scope.secondId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            } else if ($scope.thridId) {
                $state.go('root.financeinit.accountancourse.golist[12]', { id: $scope.thridId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            };
        } else if ($scope.idch) {
            $state.go('root.financeinit.accountancourse.chlist[12]', { id: $scope.idch, name: 'delete', page: $scope.page });
            $scope.menuClass = 'deleteMenu';
            if ($scope.secondId) {
                $state.go('root.financeinit.accountancourse.chlist[12]', { id: $scope.secondId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            } else if ($scope.thridId) {
                $state.go('root.financeinit.accountancourse.chlist[12]', { id: $scope.thridId, name: 'delete', page: $scope.page });
                $scope.menuClass = 'deleteMenu';
            };
        }
    };
    // 编辑
    $scope.edit = function () {
        if ($scope.firstId) {
            $state.go('root.financeinit.accountancourse.edit[12]', { id: $scope.firstId, page: $scope.page, aa: $scope.aa });
            $scope.menuClass = 'editMenu';
            $scope.secondId = '';
        } else if ($scope.secondId) {
            $state.go('root.financeinit.accountancourse.edit[12]', { id: $scope.secondId, page: $scope.page, aa: $scope.aa });
            $scope.menuClass = 'editMenu';
            $scope.firstId = '';
        } else if ($scope.thridId) {
            $state.go('root.financeinit.accountancourse.edit[12]', { id: $scope.thridId, page: $scope.page, aa: $scope.aa });
            $scope.menuClass = 'editMenu';
            $scope.firstId = '';
            $scope.secondId = '';
        }
    };
    // 资产类列表
    $scope.list = function () {
        $scope.menuClass = 'listMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };
    $scope.fulist = function () {
        $scope.menuClass = 'fulistMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };
    $scope.golist = function () {
        $scope.menuClass = 'golistMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };
    $scope.chlist = function () {
        $scope.menuClass = 'chlistMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };
    $scope.sulist = function () {
        $scope.menuClass = 'sulistMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };
    $scope.qulist = function () {
        $scope.menuClass = 'qulistMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };

    $scope.add = function () {
        $scope.menuClass = 'addMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };
    $scope.import = function () {
        $scope.menuClass = 'importMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };
    $scope.export = function () {
        $scope.menuClass = 'exportMenu';
        $scope.idListd = '';
        $scope.secondId = '';
    };
});

//自定义过滤
app.filter('listiter', function () {
    return function (val) {
        var result;
        switch (val) {
            case "ASSETS":
                result = "资产类";
                break;
            case "LIABILITIES":
                result = "负债类";
                break;
            case "COMMON":
                result = "共同类";
                break;
            case "RIGHTSINTERESTS":
                result = "权益类";
                break;
            case "COST":
                result = "成本类";
                break;
            case "PROFITLOSS":
                result = "损益类";
                break;
            case "BORROW":
                result = "借";
                break;
            case "CREDIT":
                result = "贷";
                break;
            default:
                result = val;
                break;
        }
        return result;
    }

})