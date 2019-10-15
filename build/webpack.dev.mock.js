var appData = require('../src/assets/data/data.json'); //加载本地数据文件
var appDataXS = require('../src/assets/data/data-xs.json'); //加载本地数据文件

exports.getMockApp = function (app){
    app.get('/api/index',(req,res)=>{
        res.send(appData.home);
    });
    app.post('/companyInfo/pageList',(req,res)=>{
        res.send(appDataXS.companyList);
    })
    app.get('/api/leftMenu',(req,res)=>{
        res.send(appData.leftMenu);
    });
}