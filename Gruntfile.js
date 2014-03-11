module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		sass: {
			compile: {
        files: {
          'assets/css/style.css': ['assets/scss/theme.scss']
        },
        options: {
					style: 'compressed'
        },
      }
		},
		uglify: {
			compress: {
				options: {
					mangle: true,
					preserveComments: false,
					drop_console: true
				},
				files: {
					'assets/js/script.min.js': ['assets/js/script.js']
				}
			}
		},
		clean: {
			files: ['assets/css/style.css']
		},
		watch: {
			css: {
				files: ['assets/scss/*.scss', '**/*.hbs'],
				tasks: ['clean', 'sass:compile',],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['assets/js/script.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean', 'sass']);
	grunt.registerTask('w', ['watch']);

};