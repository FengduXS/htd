var appData = require('../src/assets/data/data.json'); //加载本地数据文件
var appDataXS = require('../src/assets/data/data-xs.json'); //加载本地数据文件

exports.getMockApp = function (app){
    app.get('/api/index',(req,res)=>{
        res.send(appData.home);
    });
    app.post('/companyInfo/pageList',(req,res)=>{//分页查询公司信息
        res.send(appDataXS.companyList);
    })
    app.get('/companyInfo/queryById',(req,res)=>{//根据id查询公司信息
        res.send(appDataXS.companyDetail);
    })
    app.get('/api/leftMenu',(req,res)=>{
        res.send(appData.leftMenu);
    });
    app.post('/api/logo/post',(req,res)=>{
        res.send({
            code:0
        });
    });
}