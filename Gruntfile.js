module.exports = function(grunt) {

	// grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	// grunt.loadNpmTasks('grunt-combine-media-queries');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		sass: {
			style: {
				files: {
					"css/style.css": ["scss/styles.scss"]
				}
			}
		},
		watch: {
			style: {
				files: ['**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: false,
				},
			},
		},
		autoprefixer: {
			options: {
				browsers: ["last 2 version", "ie 10"]
			},
			style: {
				src: "css/style.css"
			}
		},
		cmq: {
			style: {
				files: {
					"css/style.css": ["css/style.css"]
				},
			},
		},
		cssmin: {
			style: {
				options: {
					keepSpecialComments: 0,
					report: "gzip"
				},
				files: {
					"css/style.min.css": ["css/style.css"]
				}
			}
		},
		csscomb: {
			style: {
				expand: true,
				src: ["scss/**/*.scss"]
			}
		},
		imagemin: {
			images: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png,jpg,gif,svg}"]
				}]
			}
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAtributes: true,
				caseSensitive: true,
				keepClosingSlash: false
			},
			html: {
				files: {
					"index.min.html": ["index.html"]
				}
			}
		}
	});

	grunt.registerTask("build", [
		"sass",
		"autoprefixer",
		"cmq",
		"cssmin",
		"csscomb",
		"imagemin",
		"htmlmin",
		"watch"
	]);

};