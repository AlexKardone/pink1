module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.initConfig({
		sass: {
			style: {
				"css/style.css": ["scss/styles.scss"]
			}
		}
	});

};