module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['src/**/*.js', 'src/**/*.html'],
      tasks: ['copy:main', 'browserify'],
      options: { nospawn: true, debounceDelay: 1000 },
    },

    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify"],
          ]
        },
        files: {
          "dist/app.js": "src/app.js"
        }
      }
    },

    flow: {
      options: {
        style: 'color'
      },
      files: {}  // Flow doesn't use this, but it is needed for Grunt to run properly
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'dist/'},
        ],
      },
      static: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jpg', '**/*.png', '**/*.ico', '**/*.pem'],
            dest: 'dist/',
          },
        ],
      },
    },
  });

  grunt.registerTask('default', ['copy', 'browserify']);
};
