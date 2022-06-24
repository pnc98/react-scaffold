const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
 app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://139.224.208.244:5001',
      changeOrigin: true,
    })
  ); 
};
