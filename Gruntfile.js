module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc : {
        dist : {
            src: ['./lib/*.js', './lib/services/1.0/*', './lib/adapters/*', 'README.md'],
            jsdoc: './node_modules/.bin/jsdoc',
            options: " --lenient --verbose --recurse --private",
            options: {
                destination: 'doc',
                configure: 'jsdoc-conf.json',
            }
        }
    },
    jshint: {
      files: [
        './lib/*.js',
        './lib/adapters/*',
        './lib/services/1.0/*'
      ],
      options: {
        globals: {
          console: true,
          module: true,
          node: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-jshint');

};
