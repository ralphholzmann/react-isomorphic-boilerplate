module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    concurrent: {
      init: ['broccoli:development:build'],
      dev: ['broccoli:development:watch', 'nodemon:development'],
      options: {
        logConcurrentOutput: true
      }
    },
    broccoli: {
      development: {
        dest: 'build',
        env: 'development',
        host: "0.0.0.0",
        port: 5002,
        liveReload: true
      }
    },
    nodemon: {
      development: {
        script: 'build/server.js',
        watch: ["build/server.js"]
      }
    }
  });

  grunt.registerTask('serve', function (environment) {
    if (!environment) { 
      environment = "development";
    }

    grunt.task.run(['concurrent:init', 'concurrent:dev']);
  });

  grunt.registerTask('default', [
    'serve'
  ]);
};
