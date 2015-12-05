module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy:
            {main:
                {files:
                    [
                        {expand:true, flatten: true, src:['bower_components/font-awesome/fonts/*'],dest:'dist/fonts'},
                        {expand:true, flatten: true, src:['bower_components/bootstrap/dist/css/bootstrap.css','bower_components/font-awesome/css/font-awesome.css', 'css/main.css'],dest:'dist/css'},
                        {expand:true, flatten: true, src:['bower_components/bootstrap/dist/js/bootstrap.js','bower_components/jquery/dist/jquery.js', 'js/main.js'],dest:'dist/js'},
                        {expand:true, src:['index.html'],dest:'dist/'}
                    ],
                },
            },
        
        uglify:
            {my_target:
                {files:
                    {'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/main.js', 'dist/js/bootstrap.js']
                    }
                }
            },
        
        cssmin:
            {target:
                {files:
                        {'dist/css/main.min.css':['dist/css/bootstrap.css','dist/css/font-awesome.css','dist/css/main.css']}
                }
            },
        
        clean: {
            js: ["dist/js/*.js", "!dist/js/*.min.js"],
            css: ["dist/css/*.css", "!dist/css/*.min.css"]
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.registerTask('default', ['uglify']);
}