module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            sass: {
                files: ['assets/sass/*'],
                tasks: ['compass','cssmin'],
            },
            html: {
                files: ['**/*.hbs'],
            },
            options: {
                livereload: true,
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/release/css',
                    ext: '.min.css'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['watch']);
};