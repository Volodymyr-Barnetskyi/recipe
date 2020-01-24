module.exports = {
  '/api': {
    target: 'https://recipes-api.azurewebsites.net',
    secure: false,
    "pathRewrite": {
      "^/api": ""
    },
    "changeOrigin": true,
    "logLevel": "debug"
  }
  // "/graphql": {
  //   target: "https://recipes-api.azurewebsites.net",
  //   secure: false,
  //   changeOrigin: true,
  //   logLevel: "debug"
  // }
}
