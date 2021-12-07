const proxy = [
    {
      context: ['/api'],
      target: 'https://www.receitaws.com.br/v1/cnpj/',
      secure: false,
      logLevel: 'debug',
      pathRewrite: {'^/api' : ''},
      "changeOrigin": true,
    }
  ];
  module.exports = proxy;
