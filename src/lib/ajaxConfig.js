import config from '../../config'

export function getDomain() {
    return (process.env.NODE_ENV === 'development' ? config.dev.serverUrl : config.build.serverUrl)
}

const serverConfig = {
    host: getDomain(),
    allUrls: {
        login: '/api/login',   //登录
        index:'/api/index',
        leftMenu:'/api/leftMenu', //左侧菜单
    }
};
export default serverConfig;
