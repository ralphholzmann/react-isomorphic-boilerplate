module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    concurrent: {
      dev: {
        tasks: ['broccoli:development:watch', 'nodemon:development'],
        options: {
          logConcurrentOutput: true
        }
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
        watch: ["build"]
      }
    }
  });

  grunt.registerTask('serve', function (environment) {
    if (!environment) { 
      environment = "development";
    }

    grunt.task.run([
      'concurrent'
    ]);
  });

  grunt.registerTask('default', [
    'serve'
  ]);
};
