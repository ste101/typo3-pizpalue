const fantasticon = require('fantasticon');

module.exports = function(grunt) {

    /**
     * Grunt task for webfonts
     */
    grunt.registerMultiTask('webfont', 'Grunt task to run npm scripts', function () {
        var options = this.options(),
            done = this.async();
        fantasticon.generateFonts(options).then(
            function (result) {
                for (const { writePath } of result.writeResults) {
                    grunt.log.ok('Generated ' + writePath);
                }
                done();
            },
            function (error) {
                grunt.log.error(error);
            }
        );
    });

    /**
     * Project configuration.
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            root: '../',
            node: 'node_modules/',
            resources: '<%= paths.root %>Resources/',
            icons: '<%= paths.resources %>Public/Icons/',
            fonts: '<%= paths.resources %>Public/Fonts/',
            js: '<%= paths.resources %>Public/JavaScript/',
            contrib: '<%= paths.resources %>Public/Contrib/',
            exts: {
                ttAddress: {
                    root: '<%= paths.root %>Extensions/tt_address/',
                    googleMap: {
                        resources: '<%= paths.exts.ttAddress.root %>DisplayMode/GoogleMap/Resources/',
                        js: '<%= paths.exts.ttAddress.googleMap.resources %>Public/JavaScript/'
                    }
                }
            }
        },
        cssmin: {
            pizpalueicon: {
                src: '<%= paths.fonts %>pizpalueicon.css',
                dest: '<%= paths.fonts %>pizpalueicon.min.css'
            }
        },
        uglify: {
            options: {
                output: {
                    comments: false
                }
            },
            utility: {
                src: '<%= paths.js %>Src/pizpalue.utility.js',
                dest: '<%= paths.js %>Dist/pizpalue.utility.min.js'
            },
            general: {
                src: '<%= paths.js %>Src/pizpalue.general.js',
                dest: '<%= paths.js %>Dist/pizpalue.general.min.js'
            },
            smoothscroll: {
                src: '<%= paths.js %>Src/pizpalue.smoothscroll.js',
                dest: '<%= paths.js %>Dist/pizpalue.smoothscroll.min.js'
            },
            showscroll: {
                src: '<%= paths.js %>Src/pizpalue.showscroll.js',
                dest: '<%= paths.js %>Dist/pizpalue.showscroll.min.js'
            },
            cookieconsentservice: {
                src: '<%= paths.js %>Src/pizpalue.cookieconsentservice.js',
                dest: '<%= paths.js %>Dist/pizpalue.cookieconsentservice.min.js'
            },
            revealfooterservice: {
                src: '<%= paths.js %>Src/pizpalue.revealfooterservice.js',
                dest: '<%= paths.js %>Dist/pizpalue.revealfooterservice.min.js'
            },
            addressmap: {
                src: '<%= paths.exts.ttAddress.googleMap.js %>Src/googlemap.js',
                dest: '<%= paths.exts.ttAddress.googleMap.js %>Dist/googlemap.min.js'
            },
            fastmenu: {
                src: '<%= paths.js %>Src/pizpalue.fastmenu.js',
                dest: '<%= paths.js %>Dist/pizpalue.fastmenu.min.js'
            },
            picoverlayBar: {
                src: '<%= paths.js %>Src/ContentElement/picoverlay.bar.js',
                dest: '<%= paths.js %>Dist/ContentElement/picoverlay.bar.min.js'
            },
            picoverlayInfo: {
                src: '<%= paths.js %>Src/ContentElement/picoverlay.info.js',
                dest: '<%= paths.js %>Dist/ContentElement/picoverlay.info.min.js'
            },
            linktarget: {
                src: '<%= paths.js %>Src/pizpalue.linktarget.js',
                dest: '<%= paths.js %>Dist/pizpalue.linktarget.min.js'
            },
            listCategorizedContent: {
                src: '<%= paths.js %>Src/ContentElement/list-categorized-content.js',
                dest: '<%= paths.js %>Dist/ContentElement/list-categorized-content.min.js'
            },
            scrollNavigation: {
                src: '<%= paths.js %>Src/pizpalue.scroll-navigation.js',
                dest: '<%= paths.js %>Dist/pizpalue.scroll-navigation.min.js'
            },
            josh: {
                src: '<%= paths.contrib %>josh.js/src/josh.js',
                dest: '<%= paths.contrib %>josh.js/dist/josh.pp.min.js'
            },
            modalDialog: {
                src: '<%= paths.js %>Src/ContentElement/modal-dialog.js',
                dest: '<%= paths.js %>Dist/ContentElement/modal-dialog.min.js'
            },
        },
        watch: {
            general: {
                files: '<%= paths.js %>Src/pizpalue.general.js',
                tasks: 'uglify:general'
            },
            smoothscroll: {
                files: '<%= paths.js %>Src/pizpalue.smoothscroll.js',
                tasks: 'uglify:smoothscroll'
            },
            cookieconsentservice: {
                files: '<%= paths.js %>Src/pizpalue.cookieconsentservice.js',
                tasks: 'uglify:cookieconsentservice'
            },
            revealfooterservice: {
                files: '<%= paths.js %>Src/pizpalue.revealfooterservice.js',
                tasks: 'uglify:revealfooterservice'
            },

        },
        webfont: {
            pizpalueicon: {
                options: {
                    inputDir: '../Resources/Public/Icons/PizpalueIcon',
                    outputDir: '../Resources/Public/Fonts',
                    fontTypes: [
                        'eot',
                        'woff2',
                        'woff',
                        'ttf'
                    ],
                    assetTypes: [
                        'css',
                        'json'
                    ],
                    name: 'pizpalueicon',
                    prefix: 'ppicon',
                    selector: '.ppicon',
                    codepoints: grunt.file.readJSON('./pizpalueicon.json'),
                    formatOptions: {
                        json: {
                            indent: 4
                        }
                    },
                    templates: {
                        css: './pizpalueicon.css.hbs'
                    },
                    pathOptions: {
                        json:   './pizpalueicon.json',
                        css:    '../Resources/Public/Fonts/pizpalueicon.css',
                        eot:    '../Resources/Public/Fonts/pizpalueicon.eot',
                        ttf:    '../Resources/Public/Fonts/pizpalueicon.ttf',
                        woff:   '../Resources/Public/Fonts/pizpalueicon.woff',
                        woff2:  '../Resources/Public/Fonts/pizpalueicon.woff2'
                    }
                }
            }
        },
    });

    /**
     * Register tasks
     */
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /**
     * Grunt update task
     */
    grunt.registerTask('icon', ['webfont', 'cssmin:pizpalueicon']);
    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('build', ['webfont', 'css', 'js']);
    grunt.registerTask('default', ['build']);

};
