# University_website_framework
Frontend framework for creating SG websites<br />
<br />
How to use the University Website Framework:<br />
<br />
The University Website Framework is a frond-end framework that uses Grunt to compile SCSS & JS and to run .liquid files.<br />
<br />
Folder structure:<br />
There are a number of node modules that are required for the framework to run, these are all located in the ‘node_modules’ folder.<br />
<br />
Any project that uses the University Website Framework will only run if the ‘node_modules’ folder is located at the parent root. This is so that multiple projects can use the same node modules avoid them having to be replicated for every instance of the University Website Framework.<br />
<br />
Example of local folder structure:<br />
	Websites<br />
	|-- University_website_framework<br />
	|-- node_modules<br />

Node modules that need to be installed to run the framework:<br />
	- grunt                              (http://gruntjs.com/installing-grunt)<br />
	- grunt-autoprefixer                 (https://www.npmjs.com/package/grunt-autoprefixer)<br />
	- grunt-browser-sync                 (https://www.npmjs.com/package/grunt-browser-sync)<br />
	- grunt-contrib-copy                 (https://www.npmjs.com/package/grunt-contrib-copy)<br />
	- grunt-contrib-cssmin               (https://www.npmjs.com/package/grunt-contrib-cssmin)<br />
	- grunt-contrib-sass                 (https://www.npmjs.com/package/grunt-contrib-sass)<br />
	- grunt-contrib-uglify               (https://www.npmjs.com/package/grunt-contrib-uglify)<br />
	- grunt-contrib-watch                (https://www.npmjs.com/package/grunt-contrib-watch)<br />
	- grunt-import                       (https://www.npmjs.com/package/grunt-import)<br />
	- grunt-liquid                       (https://www.npmjs.com/package/grunt-liquid)<br />
	- grunt-text-replace                 (https://www.npmjs.com/package/grunt-text-replace)<br />
	- load-grunt-plugins-from-parent     (https://www.npmjs.com/package/load-grunt-plugins-from-parent)<br />
	- q                                  (https://www.npmjs.com/package/q)<br />
<br />
Grunt tasks:<br />
Five pre-set grunt tasks have been setup in gruntfile.js these are:<br />
    - default   ('grunt' to run task)<br />
    - server    ('grunt server' to run task)<br />
    - minify    ('grunt minify' to run task)<br />
    - staging   ('grunt staging' to run task)<br />
    - master    ('grunt master' to run task)<br />
<br />
What each task does:<br />
    grunt             - runs grunt<br />
    grunt server      - runs the project in the browser, enables synchronised browser testing & debugging, and auto refreshes browser when changes are made to the code<br />
    grunt minify      - minifys js & css and creates '.min' version of the file in the output directory<br />
    grunt staging     - takes the compiled css from the output directory, makes a copy of it on staging at the location specified on line 143 of the gruntfile, then replaces image and font urls in the css with ones specified on lines 153, 157 & 160 in the gruntfile<br />
    grunt master      - does the same as 'grunt staging' but also compiles the SCSS so 'grunt server' doesn't need to have been run when this task is run<br />
<br />      
To run the framework, open terminal at the project root and run the default 'grunt' task followed by the 'grunt server' task.<br />
All SCSS & Scripts are located in corosponding folders in the assets directory.<br />
All the webiste components are located at templates > includes > components. The components are liquid files so they can be easily dropped into the grid template files when building page templates.<br />
<br />
Output files are all located in the html directory<br />
	Websites<br />
	|-- University_website_framework<br />
    |---- assets<br />
    |---- html<br />
    |---- templates<br />
	|-- node_modules<br />
