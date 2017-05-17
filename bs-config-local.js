module.exports = {
  port: process.env.PORT | 3000,
  injectChanges: false,
  files: ['./**/*.{html,htm,css,js,ico}',
          '/node_modules'],
  server: {
   baseDir: "src",
   routes: {
      "/node_modules": "node_modules"
    }
  },
  watchOptions: {
    ignored: 'node_modules'
  },
  startPath: "/employee"
};