var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var form = require(path.resolve('plugins/form.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function () {
    this.commercialdList = function (argvs) {//公司基本情况列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/companybasicinfo/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //公司基本情况列表总条数
    this.getMailTotal = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/companybasicinfo/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 公司基本情况添加
    this.basicInfoAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/companybasicinfo/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };

    //一个公司基本情况方案
    this.findBasicInfoId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/companybasicinfo/v1/getOneById/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 公司基本情况编辑
    this.basicInfoEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/companybasicinfo/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };

    //公司基本情况删除
    this.basicInfoDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/companybasicinfo/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };

    this.currencyList = function (argvs) {//设置币别列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/currency/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //设置币别列表总条数
    this.currencyTotal = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/currency/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 设置币别添加
    this.currencyAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/currency/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };

    //一个设置币别方案
    this.currencyId = function (argvs) {

        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/currency/v1/getOneById/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 设置币别编辑
    this.currencyEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/currency/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };

    //设置币别删除
    this.currencyDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/currency/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };

    this.groupList = function (argvs) {//往来单位列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/withunit/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //往来单位列表总条数
    this.countGroup = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/withunit/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 往来单位添加
    this.addGroup = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/withunit/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //获取一个往来单位
    this.groupOneId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/withunit/v1/getOneById/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 往来单位编辑
    this.editGroup = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/withunit/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //往来单位删除
    this.deleteGroup = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/withunit/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };

    this.accountancourseList = function (argvs) {//资产类列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/accouList${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //资产类分页总条数
    this.countAccountancourse = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountancourse/v1/asseCount',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    this.qulistList = function (argvs) {//权益类列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/rightList${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //权益类列表总条数
    this.countQulist = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountancourse/v1/rightCount',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    this.fulistList = function (argvs) {//负债类列表

        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/liabiList${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //负债类列表总条数
    this.countFulist = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountancourse/v1/liabiCount',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    this.golistList = function (argvs) {//共同类列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/commonList${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //共同类列表总条数
    this.countGolist = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountancourse/v1/commCount',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    this.chlistList = function (argvs) {//成本类列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/costList${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //成本类列表总条数
    this.countChlist = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountancourse/v1/costCount',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    this.sulistList = function (argvs) {//损益类
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/profitList${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //损益类总条数
    this.countSulist = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountancourse/v1/profiCount',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    this.getComoment = function (argvs) {//根据代码获取会计科目名称和方向
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/findByCode${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };

    //获取一个会计科目
    this.accountancourseId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/getOneById/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 会计科目编辑
    this.editAccountancourse = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //会计科目删除
    this.deleteAccountancourse = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //会计科目导入
    this.sheetImport = function (argvs) {
        var options = {
            url: config()['rurl'] + '/accountancourse/v1/importExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    this.accountdepartmentList = function (argvs) {//核算部门列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountdepartment/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //核算部门列表总条数
    this.countAccountdepartment = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountdepartment/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有部门
    this.getGroups = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountdepartment/v1/allOrageDepartment',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有用户
    this.getUsernamedepat = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountdepartment/v1/allGetPerson',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 核算部门添加
    this.addccountdepartment = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/accountdepartment/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //获取一个核算部门
    this.accountdepartmentId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountdepartment/v1/getOneById/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 核算部门编辑
    this.editAccountdepartment = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/accountdepartment/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //核算部门删除
    this.deleteAccountdepartment = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/accountdepartment/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    this.proofwordsList = function (argvs) {//凭证字列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/proofwords/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //凭证字列表总条数
    this.countProofwords = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/proofwords/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 凭证字添加
    this.addProofwords = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/proofwords/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    this.usecommonlyList = function (argvs) {//常用摘要列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/usecommonly/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //常用摘要列表总条数
    this.countUsecommonly = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/usecommonly/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 常用摘要添加
    this.addUsecommonly = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/usecommonly/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };

    this.towerWorkList = function (argvs) {//账户来源列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/account/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //账户来源列表总条数
    this.countTowerWork = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/account/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //获取一级科目
    this.getFirst = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/account/v1/firstNameCode',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    this.twoLevel = function (argvs) {//获取二级科目
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/account/v1/sendName/id?id='+ argvs.id,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    this.threeLevel = function (argvs) {//获取三级科目
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/account/v1/thirdName/id?id=${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    this.getsuType = function (argvs) {//根据科目名称获取所述类型
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/belongByName${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };

    // 账户来源添加
    this.addTowerWork = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/account/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    // 账户来源编辑
    this.editTowerWork = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/account/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //获取一个账户来源
    this.towerWorkId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/account/v1/getOneById/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //账户来源删除
    this.deleteTowerWork = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/account/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };


    this.baseparameterList = function (argvs) {//基本参数列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/baseparameter/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //基本参数列表总条数
    this.countBaseparameter = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/baseparameter/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 基本参数添加
    this.addBaseparameter = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/baseparameter/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    // 基本参数编辑
    this.editBaseparameter = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/baseparameter/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //获取一个基本参数
    this.baseparameterId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/baseparameter/v1/getOneById/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //基本参数删除
    this.deleteBaseparameter = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/baseparameter/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };


    this.initdateentryList = function (argvs) {//初始数据录入列表
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/initdateentry/v1/listAccount${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };
    //初始数据录入列表总条数
    this.countInitdateentry = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/initdateentry/v1/count',
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //获取一个初始数据录入
    this.initdateentryId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/initdateentry/v1/getOneById/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 初始数据录入编辑
    this.editInitdateentry = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/initdateentry/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //试算平衡
    this.shisuCode = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/initdateentry/v1/trialBalance${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };

    //公司基本信息功能导航权限
    this.payabletinfromtion = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/companybasicinfo/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //设置币别功能导航权限
    this.towerWorkGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/currency/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //往来单位功能导航权限
    this.groupGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/withunit/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //会计科目功能导航权限
    this.carInsuranceGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //核算部门功能导航权限
    this.accidentGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountdepartment/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //凭证字功能导航权限
    this.proofwordsGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/proofwords/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //常用摘要功能导航权限
    this.usecommonlyGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/usecommonly/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //账户来源功能导航权限
    this.accountGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/account/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //基本参数功能导航权限
    this.commercialListGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/baseparameter/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //基本参数功能导航权限
    this.initdateentryGuide = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/initdateentry/v1/guidePermission?guideAddrStatus=` + argvs.name,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //  下拉菜单权限
    this.siginNav = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 10000,
            uri: config()['rurl'] + `/withunit/v1/sonPermission`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 设置导航权限
    this.settingNav = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/withunit/v1/setButtonPermission`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    this.countSetting = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    //客户权限列表
    this.listSetting = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.getpermit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + '/cuspermission/v1/edit',
            headers: {
                userToken: argvs.token
            },
            form: argvs
        };
        return request(options);
    };

    //新增的需求接口

    //根据一级科目id获取二级科目列表（all account subject lists)
    this.secondSubject = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/findSecondList/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //根据二级科目id获取三级科目列表（all account subject lists)
    this.thirdSubject = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/findThirdList/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    // 会计科目 一级科目添加
    this.addAccountOne = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/addOne`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    // 会计科目 二级科目添加
    this.addAccountTwo = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/addSend`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    // 会计科目 三级科目添加
    this.addAccountThird = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/accountancourse/v1/addThird`,
            form: argvs,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    // 凭证字 删除
    this.deleteCertificate = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/proofwords/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    // 常用摘要 删除
    this.deleteCommonly = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/usecommonly/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.token
            }
        };
        return request(options);
    };
    //初始数据录入 导入
    this.initializeImport = function (argvs) {
        var options = {
            url: config()['rurl'] + '/initdateentry/v1/importExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    return this;
};