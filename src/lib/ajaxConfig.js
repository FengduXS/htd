import config from '../../config'

export function getDomain () {
  return (process.env.NODE_ENV === 'development' ? config.dev.serverUrl : config.build.serverUrl)
}

const serverConfig = {
  host: getDomain(),
  allUrls:{
    login:'/api/login',   //登录
  }
};
export default serverConfig;
