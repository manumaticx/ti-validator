module.exports = function (grunt) {
  grunt.initConfig({
    
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          ui: 'bdd'
        },
        src: ['test/*.js']
      }
    },
    
    titaniumifier: {
      "module": {
        files: { '.' : '.' },
        options: {}
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-titaniumifier');
  grunt.loadNpmTasks('grunt-mocha-test');
  
  // Tasks
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['titaniumifier:module', 'test']);
};