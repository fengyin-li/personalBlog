/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609221734345_7064';

  // add your middleware config here
  config.middleware = [];
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'react_blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
　　csrf: {enable: false},
　　domainWhiteList: [ '*' ]
　};
  config.cors = {
    origin: 'http://localhost:3000', //只允许这个域进行访问接口全部为'*'
    credentials: true,   // 开启认证
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

 
  return {
    ...config,
    ...userConfig,
  };
};
