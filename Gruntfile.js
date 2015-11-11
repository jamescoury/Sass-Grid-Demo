'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    lineNumbers: true,
                    sourcemap: 'none'
                },
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        cssmin: {
            my_target: {
                src: 'css/main.css',
                dest: 'css/main.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch', 'sass']);
};