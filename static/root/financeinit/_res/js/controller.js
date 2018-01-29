var app = angular.module('financeinit', [{
    files: ['root/financeinit/_res/js/service.js']
}]);
app.controller('financeinitCtrl', function ($scope, $state) {
    if ($state.current.url == '/financeinit') {//默认加载列表
        $state.go('root.financeinit.companybasicinfo');
    }
    $scope.$on('changeId', function (event, msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('ziId', function (event, msg) {
        $scope.$broadcast('zichanId', msg)
    });
    $scope.$on('fuId', function (event, msg) {
        $scope.$broadcast('fuzaiId', msg)
    });
    $scope.$on('chId', function (event, msg) {
        $scope.$broadcast('chengId', msg)
    });
    $scope.$on('suId', function (event, msg) {
        $scope.$broadcast('sunyiId', msg)
    });
    $scope.$on('quId', function (event, msg) {
        $scope.$broadcast('quanyiId', msg)
    });
    $scope.$on('goId', function (event, msg) {
        $scope.$broadcast('gongId', msg)
    });
    $scope.$on('pageId', function (event, msg) {
        $scope.$broadcast('page', msg)
    });
    //监听一级科目的id
    $scope.$on('oneLevelId', function (event, msg) {
        $scope.$broadcast('levelId', msg)
    });
    
    //监听二级科目的id
    $scope.$on('twiceLevelId', function (event, msg) {
        $scope.$broadcast('twoLevelId', msg)
    });
    //监听三级级科目的id
    $scope.$on('threeLevelId', function (event, msg) {
        $scope.$broadcast('thirdlevelId', msg)
    });

}).controller('navCtrl', function ($scope, $state, $location, businsuranceSer) {
    $scope.navCla = 'companybasicinfo';
    var active = $location.path().split('/')[3];
    $scope.navCla = active ? active : 'companybasicinfo';
    $scope.navClass = function (name) {
        $scope.navCla = name;
    };
    $scope.showsList = [
        { id: "1", item: "基本设置", menuList: [{ name: '公司基本情况', msg: 'companybasicinfo' }, { name2: '设置币别', msg: 'currency' }, { name3: '往来单位', msg: 'withunit' }, { name4: '会计科目', msg: 'accountancourse' }, { name5: '核算部门', msg: 'accountdepartment' }, { name6: '凭证字', msg: 'proofwords' }, { name7: '常用摘要', msg: 'usecommonly' }, { name8: '账户来源', msg: 'account' }], showIs: true },
        { id: "2", item: "财务初始化", menuList: [{ name9: '基本参数', msg: 'baseparameter' }, { name10: '初始数据录入', msg: 'initdateentry' }], showIs: false },
        { id: "3", item: "设置", menuList: [{ name11: '设置', msg: 'setting' }], showIs: false },
        { id: "4", item: "版本信息", menuList: [{ name12: '版本信息', msg: 'version' }, { name13: '帮助与解答', msg: 'help' }], showIs: false }
    ];
    if (active) {
        for (var i = 0; i < $scope.showsList.length; i++) {
            var n = $scope.showsList[i].menuList;
            for (var j = 0; j < n.length; j++) {
                var m = n[j].msg;
                if (m == active) {
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function (obj, event) {
        if (event) {
            if (obj.showIs) {
                obj.showIs = !event;
            } else {
                obj.showIs = event;
                this.showsList.forEach(function (item) {
                    if (item.id != obj.id) {
                        item.showIs = !event;
                    } else {
                        item.showIs = event;
                    }
                });
            }
        }
    };
    businsuranceSer.navPermission().then(function (response) {
        if (response.data.code == 0) {
            var data = response.data.data;
            if (data && data.length) {
                $scope.isHide = false;
                for (var i = 0, len = data.length; i < len; i++) {
                    var obj = data[i];
                    $scope[obj.name] = obj.flag;
                }
            } else if (response.data.data.length == 0) {
                $scope.isHide = true;
            }
        } else {
            $scope.isHide = false;
        }
    });

    businsuranceSer.setPermission().then(function (response) {
        if (response.data.code == 0) {
            var data = response.data.data;
            if (data && data.length) {
                $scope.isHide = false;
                for (var i = 0, len = data.length; i < len; i++) {
                    var obj = data[i];
                    $scope[obj.name] = obj.flag;
                }
            } else if (response.data.data.length == 0) {
                $scope.isHide = true;
            }
        } else {
            $scope.isHide = false;
        }
    });

});

app.directive('mod', function () {
    return {
        restrict: 'AE',
        replace: true,
        link: function (scope, elements, attrs) {
            elements.hover(function () {
                var textWidth = elements.text().length * 12;
                var boxWidth = elements.width();

                if (textWidth > boxWidth) {
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function () {
                if (elements.hasClass('modac')) {
                    $('.module').show();
                    var Index = elements.index(),
                        title,
                        tag = this.tagName;
                    if (tag == "P") {
                        title = $(".list-head span").eq(Index).text();
                    } else if (tag == "SPAN") {
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }
            });
        }
    };
}).directive('modclose', function () {
    return {
        restrict: 'AE',
        replace: true,
        link: function (scope, elements, attrs) {
            elements.on("click", function () {
                $('.module').hide();
            });

        }
    };
});

