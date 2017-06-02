# University Website Framework

## Frontend framework for creating SG websites

### How to use the University Website Framework:

The University Website Framework is a front-end framework that uses Grunt to compile SCSS & JS and to run .liquid files.

### Folder structure:

There are a number of node modules that are required for the framework to run, these are all located in the ‘node_modules’ folder.

Any project that uses the University Website Framework will only run if the ‘node_modules’ folder is located at the parent root. This is so that multiple projects can use the same node modules to avoid them having to be replicated for every instance of the University Website Framework.

#### Example of local folder structure:

Websites  
|-- University_website_framework project  
|-- node_modules

### Node modules that need to be installed to run the framework:

- grunt ([http://gruntjs.com/installing-grunt)](http://gruntjs.com/installing-grunt)
- grunt-autoprefixer ([https://www.npmjs.com/package/grunt-autoprefixer)](https://www.npmjs.com/package/grunt-autoprefixer)
- grunt-browser-sync ([https://www.npmjs.com/package/grunt-browser-sync)](https://www.npmjs.com/package/grunt-browser-sync)
- grunt-contrib-copy ([https://www.npmjs.com/package/grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy))
- grunt-contrib-cssmin ([https://www.npmjs.com/package/grunt-contrib-cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin))
- grunt-contrib-sass ([https://www.npmjs.com/package/grunt-contrib-sass](https://www.npmjs.com/package/grunt-contrib-sass))
- grunt-contrib-uglify ([https://www.npmjs.com/package/grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify))
- grunt-contrib-watch ([https://www.npmjs.com/package/grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch))
- grunt-import ([https://www.npmjs.com/package/grunt-import](https://www.npmjs.com/package/grunt-import))
- grunt-liquid ([https://www.npmjs.com/package/grunt-liquid](https://www.npmjs.com/package/grunt-liquid))
- grunt-text-replace ([https://www.npmjs.com/package/grunt-text-replace](https://www.npmjs.com/package/grunt-text-replace))
- load-grunt-plugins-from-parent ([https://www.npmjs.com/package/load-grunt-plugins-from-parent](https://www.npmjs.com/package/load-grunt-plugins-from-parent))
- q ([https://www.npmjs.com/package/q](https://www.npmjs.com/package/q))

### Grunt tasks:

Six pre-set grunt tasks have been setup in gruntfile.js these are:
- default ('grunt' to run task)
- server ('grunt server' to run task)
- minify ('grunt minify' to run task)
- staging ('grunt staging' to run task)
- master ('grunt master' to run task)
- styleguide ('grunt styleguide' to run task)

### What each task does:

- grunt - runs grunt  
- grunt server - runs the project in the browser, enables synchronised browser testing & debugging, and auto refreshes browser when changes are made to the code  
- grunt minify - minifys js & css and creates '.min' version of the file in the output directory  
- grunt staging - takes the compiled css from the output directory, makes a copy of it on staging at the location specified on line 178 of the gruntfile, then replaces image and font urls in the css with ones specified on lines 209, 213 & 216 in the gruntfile  
- grunt master - does the same as 'grunt staging' but also compiles the SCSS so 'grunt server' doesn't need to have been run when this task is run  
- grunt styleguide - compiles the style guide markdown from the SCSS files to the style guide page. See below for more about the style guide

### Styleguide:

A living style guide has been built into the framework to generate documentation for the content team as the front-end is coded:

#### Style guide requirements:

- Xcode command line tools: Install globally via the command line: `xcode-select --install`
- Hologram ruby gem: First install the ruby gem globally via the command line: `sudo gem install hologram` then initiate the gem `hologram init`
- Grunt-hologram nade module: Install the grunt-hologram package: `sudo npm install grunt-hologram --save-dev`
- Then move the package from the newly created node modules folder to the parent root node modules folder and remove the newly created one in the project folder.

To run the framework, open terminal at the project root and run the 'grunt server' task.
All SCSS & Scripts are located in corosponding folders in the assets directory.

All the webiste components are located at templates > includes > components. The components are liquid files so they can be easily dropped into the grid template files when building page templates.

Output files are all located in the html directory

Websites  
|-- University_website_framework  
|---- assets  
|---- html  
|---- templates  
|---- styleguide  
|-- node_modules
