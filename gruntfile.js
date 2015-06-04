module.exports = function(grunt) {

        grunt.initConfig({

                compass: {
                    dev: {
                        options: {
                            config: 'config.rb' // the Compass config file
                        } //options
                    } //dev
                }, //compass
                server: {
                    base: "" + (process.env.SERVER_BASE || '/'),
                    web: {
                        port: 8000
                    }
                },
                //====================================================== WATCHING ==========================|
                watch: {
                    options: {
                        livereload: true
                    },
                    sass: {
                        files: ['dev/sass/*.scss'],
                        tasks: ['compass:dev']
                    }, //sass
                } //watch
            }) //initConfig

        //====================================================== LOADING TASKS ==========================|
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('express');
        grunt.loadTasks("tasks");

        //---------------------------------------- initial task (watch) when grunt starts ------------------|     
        grunt.registerTask('default', ['server', 'watch']);
    } //exports
