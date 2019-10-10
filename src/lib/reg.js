let reg = {
    telNum:/^((1)+\d{10})$/,    //手机号
    idCard:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,  //身份证
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,//邮箱
    accountNumber:/^\w{7,20}$/,//账号 
    workNum: /^\w{0,20}$/,//工号
    
};

export default reg;
