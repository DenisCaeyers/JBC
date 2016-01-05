module.exports = function(grunt) {
  grunt.initConfig({
      
      
    // Options for compiling SCSS files with COMPASS
	compass:{
		dev:{
			options:{
				sassDir: "sass",
				cssDir: "stylesheets"
			}
		}
	},
    
    
    
    
    // Options for the watch task
	watch:{
		css:{
			files:'**/*.scss',
			tasks: ['compass'],
		},
        js:{
            files:'**/*.js',
        },
	},
    
    
    
    
    // Options for hosting local files & referencing them in SharePoint
    browserSync: {
        // check if can be deleted
        bsFiles: {
            src : [
                    '**/*.css',
                    'javascripts/*.js']
        },
        // Configuring the live reload server
        livereload: {
            options: {
                files: [
                    '/stylesheets/*.css',
                    '/javascripts/*.js'
                ],
                // Create a local server on Port:
                port: 9000,
                // Optional only for SSL
                https:{
                    key: 'ssl/livereload.key',
                    cert: 'ssl/livereload.crt',
                },
                server: {
                    // base directory of the local server
                    baseDir: ['./'],
                },
                // Enabeling watch task
                watchTask:true,
            }
        }
    },
    
    
  })
  
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('sync', ['browserSync:livereload','watch']);

};