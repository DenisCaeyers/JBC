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
  })
  
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['watch']);
};