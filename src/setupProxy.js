const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/chat', {
        target : 'http://47.243.54.53:18001',
        ws: true
    }))
};