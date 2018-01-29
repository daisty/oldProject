var Router = require('koa-router');
var path = require('path');
var koaBody = require('koa-body');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename, '../')) + '/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fetch = require('node-fetch');//url转发
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function () {
    var router = new Router();
    router.get('/commercialList/list', function* () { //公司基本情况列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().commercialdList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/countchargestand/count', function* () {//公司基本情况列表总条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().getMailTotal(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/addBasicInfo/add', function* () {//公司基本情况添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().basicInfoAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/findInfoId/info', function* () {//一个公司基本情况获取
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.userToken = $self.cookies.get('token');
        yield (server().findBasicInfoId(findIdData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/editBasicInfo/edit', function* () {//公司基本情况编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().basicInfoEdit(editData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/deleteBasicInfo/delete', function* () {//公司基本情况删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().basicInfoDelete(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/companybasicinfo/exportFile', function* () {//公司基本情况导出
        var $self = this;
        var count = $self.request.query;
        var fileName = "公司基本情况" + '.xlsx';
        yield (fetch(config()['rurl'] + `/companybasicinfo/v1/export${urlEncode(count, true)}`, {
            method: 'GET',
            headers: { 'userToken': $self.cookies.get('token') }
        }).then(function (res) {
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename=' + encodeURI(fileName));
            return res.buffer();
        }).then(function (data) {
            $self.body = data;
        }));
    }).get('/setting/currency/list', function* () { //设置币别列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().currencyList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/setting/currency/count', function* () {//设置币别列表总条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().currencyTotal(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/setting/currency/add', function* () {//设置币别添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().currencyAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/setting/currency/getOneById', function* () {//一个设置币别获取
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.userToken = $self.cookies.get('token');
        yield (server().currencyId(findIdData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/setting/currency/edit', function* () {//设置币别编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().currencyEdit(editData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/setting/currency/delete', function* () {//设置币别删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().currencyDelete(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/groupList/list', function* () { //往来单位列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().groupList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/countGroup/count', function* () {//往来单位列表条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countGroup(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/addGroup/add', function* () {//往来单位添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addGroup(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/groupOneId/info', function* () {//获取一个往来单位
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.userToken = $self.cookies.get('token');
        yield (server().groupOneId(findIdData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/editGroup/edit', function* () {//往来单位编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editGroup(editData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/deleteGroup/delete', function* () {//往来单位删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().deleteGroup(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/withunit/exportFile', function* () {//往来单位导出
        var $self = this;
        var count = $self.request.query;
        var fileName = "往来单位" + '.xlsx';
        yield (fetch(config()['rurl'] + `/withunit/v1/export${urlEncode(count, true)}`, {
            method: 'GET',
            headers: { 'userToken': $self.cookies.get('token') }
        }).then(function (res) {
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename=' + encodeURI(fileName));
            return res.buffer();
        }).then(function (data) {
            $self.body = data;
        }));
    }).get('/getsuType/list', function* () { //获取科目名称获取所属类别
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getsuType(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountancourse/list', function* () { //资产类列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().accountancourseList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountancourse/count', function* () {//资产类分页总条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countAccountancourse(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/qulistList/list', function* () { //权益类列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().qulistList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/countQulist/count', function* () {//权益类分页总条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countQulist(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/fulist/list', function* () { //负债类列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().fulistList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/fulist/count', function* () {//负债类分页总条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countFulist(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/golist/list', function* () { //共同类列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().golistList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/golist/count', function* () {//共同类分页总条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countGolist(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/chlist/list', function* () { //成本类列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().chlistList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/chlist/count', function* () {//成本类分页总条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countChlist(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/sulist/list', function* () { //损益类列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().sulistList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/sulist/count', function* () {//损益类分页总条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countSulist(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/getComoment/list', function* () { //根据代码获取会计科目名称和方向
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getComoment(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountancourseId/info', function* () {//获取一个会计科目
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.userToken = $self.cookies.get('token');
        yield (server().accountancourseId(findIdData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/editAccountancourse/edit', function* () {//会计科目编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editAccountancourse(editData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/deleteAccountancourse/delete', function* () {//会计科目删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().deleteAccountancourse(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/dispatchsheet/templateExcel', function* () {//会计科目导入模板下载
        var $self = this;
        var fileName = '会计科目导入excel模板.xlsx';
        yield (fetch(config()['rurl'] + `/accountancourse/v1/templateExport`, {
            method: 'GET',
        }).then(function (res) {
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename=' + encodeURI(fileName));
            return res.buffer();
        }).then(function (data) {
            $self.body = data;
        }));
    }).post('/dispatchsheet/leadExcel', koaBody({ multipart: true }), function* (next) {//会计科目导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.userToken = $self.cookies.get("token");
        yield (server().sheetImport(fileData)
            .then((parsedBody) => {
                $self.body = parsedBody;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountancourse/exportFile', function* () {//会计科目导出
        var $self = this;
        var count = $self.request.query;
        var fileName = "会计科目" + '.xlsx';
        yield (fetch(config()['rurl'] + `/accountancourse/v1/export${urlEncode(count, true)}`, {
            method: 'GET',
            headers: { 'userToken': $self.cookies.get('token') }
        }).then(function (res) {
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename=' + encodeURI(fileName));
            return res.buffer();
        }).then(function (data) {
            $self.body = data;
        }));
    }).get('/accountdepartmentList/list', function* () { //核算部门列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().accountdepartmentList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/countAccountdepartment/count', function* () {//核算部门列表条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countAccountdepartment(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/getGroups/countall', function* () {//获取所有部门
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().getGroups(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/getUsernamedepat/countall', function* () {//获取所有用户
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().getUsernamedepat(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/addccountdepartment/add', function* () {//核算部门添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addccountdepartment(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountdepartmentId/info', function* () {//获取一个核算部门
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.userToken = $self.cookies.get('token');
        yield (server().accountdepartmentId(findIdData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/editAccountdepartment/edit', function* () {//核算部门编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editAccountdepartment(editData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/deleteAccountdepartment/delete', function* () {//核算部门删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().deleteAccountdepartment(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/proofwords/list', function* () { //凭证字列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().proofwordsList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/proofwords/count', function* () {//凭证字列表条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countProofwords(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/proofwords/add', function* () {//凭证字添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addProofwords(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/usecommonly/list', function* () { //常用摘要列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().usecommonlyList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/usecommonly/count', function* () {//常用摘要列表条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countUsecommonly(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/usecommonly/add', function* () {//常用摘要添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addUsecommonly(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/towerWorkList/list', function* () { //账户来源列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().towerWorkList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/countTowerWork/count', function* () {//获取账户来源列表条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countTowerWork(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/account/firstNameCode', function* () {//获取一级科目
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().getFirst(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/account/sendName/id', function* () { //获取二级科目
        var $self = this;
        var levelData = $self.request.query;
        levelData.userToken = $self.cookies.get('token');
        yield (server().twoLevel(levelData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/account/thirdName/id', function* () { //获取三级科目
        var $self = this;
        var levelData = $self.request.query;
        levelData.userToken = $self.cookies.get('token');
        yield (server().threeLevel(levelData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/addTowerWork/add', function* () {//账户来源添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addTowerWork(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/towerWorkId/info', function* () {//获取一个账户来源
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.userToken = $self.cookies.get('token');
        yield (server().towerWorkId(findIdData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/editTowerWork/edit', function* () {//账户来源编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editTowerWork(editData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/deleteTowerWork/delete', function* () {//账户来源删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().deleteTowerWork(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountExport/exportFile', function* () {//账户来源导出
        var $self = this;
        var count = $self.request.query;
        var fileName = "账户来源" + '.xlsx';
        yield (fetch(config()['rurl'] + `/account/v1/export${urlEncode(count, true)}`, {
            method: 'GET',
            headers: { 'userToken': $self.cookies.get('token') }
        }).then(function (res) {
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename=' + encodeURI(fileName));
            return res.buffer();
        }).then(function (data) {
            $self.body = data;
        }));
    }).get('/baseparameterList/list', function* () { //基本参数列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().baseparameterList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/countBaseparameter/count', function* () {//获取基本参数列表条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countBaseparameter(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/addBaseparameter/add', function* () {//基本参数添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addBaseparameter(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/baseparameterId/info', function* () {//获取一个基本参数
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.userToken = $self.cookies.get('token');
        yield (server().baseparameterId(findIdData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/editBaseparameter/edit', function* () {//基本参数编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editBaseparameter(editData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/deleteBaseparameter/delete', function* () {//基本参数删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().deleteBaseparameter(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/initdateentry/list', function* () { //初始数据录入列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().initdateentryList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/initdateentry/count', function* () {//获取初始数据录入列表条数
        var $self = this;
        var token = { userToken: $self.cookies.get('token') };
        yield (server().countInitdateentry(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/initdateentry/getOneById', function* () {//获取一个初始数据录入
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.userToken = $self.cookies.get('token');
        yield (server().initdateentryId(findIdData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/initdateentry/edit', function* () {//初始数据录入编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editInitdateentry(editData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/shisuCode/list', function* () { //试算平衡
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().shisuCode(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/siginmanage/setButtonPermission', function* () { //设置导航权限
        var $self = this;
        var navToken = { userToken: $self.cookies.get('token') };
        yield (server().settingNav(navToken)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/collectemail/guidePermission/:guideAddrStatus', function* () { //公司基本信息导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().payabletinfromtion(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/category/guidePermission/:guideAddrStatus', function* () { //币别设置导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().towerWorkGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/withunit/guidePermission/:guideAddrStatus', function* () { //往来单位导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().groupGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/baseparameter/guidePermission/:guideAddrStatus', function* () { //会计科目权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().carInsuranceGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountdepartment/guidePermission/:guideAddrStatus', function* () { //核算部门导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().accidentGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/proofwords/guidePermission/:guideAddrStatus', function* () { //凭证字导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().proofwordsGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/usecommonly/guidePermission/:guideAddrStatus', function* () { //常用摘要导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().usecommonlyGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/account/guidePermission/:guideAddrStatus', function* () { //账户来源导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().accountGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/commercialList/guidePermission/:guideAddrStatus', function* () { //基本参数导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().commercialListGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/initdateentry/guidePermission/:guideAddrStatus', function* () { //初始数据录入导航权限
        var $self = this;
        var page = { name: $self.params.guideAddrStatus, userToken: $self.cookies.get('token') };
        yield (server().initdateentryGuide(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/siginmanage/sonPermission', function* () { //下拉导航权限
        var $self = this;
        var navToken = { userToken: $self.cookies.get('token') };
        yield (server().siginNav(navToken)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/user/logout', function* () {//
        var $self = this;
        var token = { token: $self.cookies.get('token') };
        yield (server().logout(token)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function* () {
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/listSetting', function* () {
        var $self = this;
        var setting = this.request.query;
        setting.token = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function* () {
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function* () {
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function* () {
        var $self = this;
        var editSet = $self.request.body;
        editSet.token = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountancourse/findSecondList', function* () {   //根据一级科目id获取二级科目列表（all account subject lists)
        var $self = this;
        var subjectData = $self.request.query;
        subjectData.token = $self.cookies.get('token');
        yield (server().secondSubject(subjectData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/accountancourse/findThirdList', function* () {   //根据二级科目id获取三级科目列表（all account subject lists)
        var $self = this;
        var subjectData = $self.request.query;
        subjectData.token = $self.cookies.get('token');
        yield (server().thirdSubject(subjectData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/accountancourse/addOne', function* () {//一级科目添加  会计科目
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addAccountOne(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/accountancourse/addSend', function* () {//二级科目添加  会计科目
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addAccountTwo(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/accountancourse/addThird', function* () {//三级科目添加  会计科目
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addAccountThird(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/proofwords/delete', function* () {  //凭证字 删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().deleteCertificate(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/usecommonly/delete', function* () {  //常用摘要 删除
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().deleteCommonly(deleteData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/initdateentry/templateExcel', function* () {//财务初始化 初始数据录入导入模板下载
        var $self = this;
        var fileName = '初始数据录入导入excel模板.xlsx';
        yield (fetch(config()['rurl'] + `/initdateentry/v1/export`, {
            method: 'GET',
        }).then(function (res) {
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename=' + encodeURI(fileName));
            return res.buffer();
        }).then(function (data) {
            $self.body = data;
        }));
    }).post('/initdateentry/importExcel', koaBody({ multipart: true }), function* (next) {//财务初始化 初始数据录入导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.userToken = $self.cookies.get("token");
        yield (server().initializeImport(fileData)
            .then((parsedBody) => {
                $self.body = parsedBody;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/initdateentry/export', function* () {//财务初始化 初始数据录入导出
        var $self = this;
        var count = $self.request.query;
        var fileName = "初始数据录入" + '.xlsx';
        yield (fetch(config()['rurl'] + `/initdateentry/v1/export${urlEncode(count, true)}`, {
            method: 'GET',
            headers: { 'userToken': $self.cookies.get('token') }
        }).then(function (res) {
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename=' + encodeURI(fileName));
            return res.buffer();
        }).then(function (data) {
            $self.body = data;
        }));
    })
    return router;
};
