module.exports = {
  /**
   * Environment variables
   */
  env: {
    production: process.env.NODE_ENV === 'production',
    development: process.env.NODE_ENV === 'development',
    basepath: process.env.PWD
  },

  /**
   * Paths for all the source files
   */
  paths: {
    styles: {
      source: './client/styles/app.styl',
      watch: 'client/styles/**/*.styl',
      destination: './public/css/'
    },
    templates: {
      watch: './client/templates/**/*.jade'
    }
  }

};