module.exports = function(grunt) {

    require('load-grunt-plugins-from-parent')(grunt);

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	  	/* SASS */
		sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                },
                files: {
                    'html/css/style.css':'assets/scss/style.scss',
                    'html/css/pre_chat_form.css':'assets/scss/components/pre_chat_form.scss' // COMPILED SCSS FOR THE PRE-CHAT FORM AS SEPARATE STYLESHEET
                }
            },
            styleguide: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                },
                files: {
                    'html/styleguide/css/styleguide_styles.css':'html/css/style.css'
                }
            }
        },
        
        
	  	/* LIQUID */
        liquid: {
            options: {
                includes: 'templates/includes',
            },
            pages: {
                files: [{ 
                    expand: true, 
                    flatten: true, 
                    src: 'templates/*.liquid', 
                    dest: 'html/', 
                    ext: '.html' 
                }]
            }
        },
        
        
	  	/* JS */
        import: {
            options: {},
            dist: {
                src: 'assets/scripts/scripts.mix.js',
                dest: 'html/js/scripts.js',
            }
        },
        
        
	  	/* AUTO PREFIX COMPILED CSS */
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            // prefix all files in html/css root
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'html/css/*.min.css',
                dest: 'html/css'
            }
        },
        

	  	/* BROWSER SYNC */
        browserSync: {
            bsFiles: {
                src: [
                    'html/css/*.css',
                    'html/js/*.js',
                    'html/*.html',
                    'html/img/*.jpg',
                    'html/img/*.png',
                    'html/img/*.gif',
                    'html/styleguide/*/**',
                    'html/styleguide/css/*.css'
                ],
            },
            options: {
                watchTask: true,
                debugInfo: true,
                    server: {
                        baseDir: "html/"
                    }
            }
        },


	  	/* MINIFY CSS AND JS */        
        uglify: {
            my_target: {
                files: {
                    'html/js/scripts.min.js': ['html/js/scripts.js']
                }
            }
        },

        
        cssmin: {
            options: {
                keepSpecialComments: 0
            },            
            target: {
                files: [{
                    expand: true,
                    cwd: 'html/css',
                    src: ['style.css', '!*.min.css'],
                    dest: 'html/css',
                    //ext: '.min.css'
                }]
            }
        },


	  	/* WATCH */
		watch: {   
            options: {
                livereload: true
            },
            scripts: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            js: {
                files: 'assets/scripts/**/*.js',
                tasks: ['import']
            },
            liquidTemplate: {
                options: {
                    spawn: true
                },
                files: "templates/**/*.liquid",
                tasks: ['liquid']
            },
            styleguide: {
                files: 'styleguide/**/*',
                tasks: ['hologram']
            },
            styleguideJs: {
                files: 'html/js/*.js',
                tasks: ['copy:styleguidejs']
            },
            styleguideFonts: {
                files: 'html/fonts/*/**',
                tasks: ['copy:styleguidefonts']
            }
		},


        /* HOLOGRAM - STYLEGUIDE */
        hologram: {
            compile: {
                options: {
                    config: 'styleguide/hologram_config.yml'
                }
            }
        },


        /* COPY COMPILED AND AUTOPREFIXED CSS FROM HTML/CSS TO LOCATION ON STAGING */
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true, 
                        flatten: true,
                        src: ['html/css/style.css'], 
                        dest: '///Volumes/Designer/css/', // CHANGE TO MATCH THE CSS LOCATION ON STAGING
                        filter: 'isFile'
                    },
                ],
            },
            styleguidejs: { // automatically copy amended js to the style guide
                files: [
                {
                    expand: true, 
                    flatten: true,
                    src: ['html/js/scripts.js'], 
                    dest: 'html/styleguide/js/',
                    filter: 'isFile'
                }],
            },
            styleguidefonts: { // automatically copy amended js to the style guide
                files: [
                {
                    expand: true, 
                    flatten: false,
                    cwd: 'html/fonts/',
                    src: ['*/**'], 
                    dest: 'html/styleguide/fonts/'
                }],
            },
        },
        

        /* REPLACE NEW VERSION ON STAGING WITH UPDATED URL VERSION SO THAT IMAGES AND FONTS WILL WORK*/
        replace: {
          another_example: {
            src: ['///Volumes/Designer/css/ ____ /style.css'], // CHANGE TO MATCH THE CSS LOCATION ON STAGING
            overwrite: true, // overwrite matched source files 
            replacements: [{
                from: '../fonts/',
                to: "/fonts/" // CHANGE TO MATCH THE FONTS LOCATION ON STAGING
            }, {
                from: '../img/',
                to: "/images/" // CHANGE TO MATCH THE IMAGE LOCATION ON STAGING
            }]
          }
        }
	});


    /* LOAD TASK */
    grunt.loadNpmTasksFromParent('grunt-contrib-sass')
    grunt.loadNpmTasksFromParent('grunt-liquid');
    grunt.loadNpmTasksFromParent('grunt-import');
    grunt.loadNpmTasksFromParent('grunt-browser-sync');
    grunt.loadNpmTasksFromParent('grunt-autoprefixer');
    grunt.loadNpmTasksFromParent('grunt-contrib-uglify');
    grunt.loadNpmTasksFromParent('grunt-contrib-cssmin');
    grunt.loadNpmTasksFromParent('grunt-contrib-watch');
    grunt.loadNpmTasksFromParent('grunt-hologram');

    /* LOAD TASKS TO UPDATE CSS ON STAGING */
    grunt.loadNpmTasksFromParent('grunt-contrib-copy');
    grunt.loadNpmTasksFromParent('grunt-text-replace');

    /* RUN TASKS */
	grunt.registerTask('default',['sass', 'autoprefixer', 'liquid', 'import']);
	grunt.registerTask('server',['browserSync', 'watch']);
	grunt.registerTask('minify',['uglify', 'cssmin']);
    grunt.registerTask('staging',['copy', 'replace']);

    grunt.registerTask('styleguide',['hologram']);
    grunt.registerTask('master',['sass', 'autoprefixer', 'copy:main', 'replace']);
}