let reg = {
    telNum:/^((1)+\d{10})$/,    //手机号
    idCard:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,  //身份证
};

export default reg;
