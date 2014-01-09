module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    group_css_media_queries: {
      sample: {
        src: 'sample.input.css',
        dest: 'sample.output.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-group-css-media-queries');

  grunt.registerTask('default', ['group_css_media_queries']);

};