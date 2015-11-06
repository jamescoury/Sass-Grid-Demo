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
                    'main.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            livereload: {
                options: { livereload:  1340 },
                files: ['main.css'],
            }
        },
        cssmin: {
            my_target: {
                src: 'main.css',
                dest: 'main.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch', 'sass']);
};