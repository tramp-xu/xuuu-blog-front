const proxy = require('http-proxy-middleware');

const target = 'http://localhost:8080'; // 测试 ip

module.exports = function(app) {
  // ...You can now register proxies as you wish!
  debugger;
  app.use(
    proxy('/api', {
      target: target,
      // secure: false,
      changeOrigin: true
    })
  );
};
