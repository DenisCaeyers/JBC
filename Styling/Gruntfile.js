module.exports = function(grunt) {
  grunt.initConfig({
	compass:{
		dev:{
			options:{
				sassDir: "sass",
				cssDir: "stylesheets"
			}
		}
	},
	watch:{
		css:{
			files:'**/*.scss',
			tasks: ['compass']
		}
	},
    browserSync: {
        bsFiles: {
            src : [
                    '**/*.css',
                    'javascripts/*.js']
        },
        options: {
            server: {
                baseDir: "./"
            }
        }
    },
  })
  
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('sync', ['browserSync','watch']);

};