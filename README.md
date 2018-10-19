# udemy-webdev2018
Exercises and sample code from the Udemy course The Complete Web Developer in 2018

## Workspace setup instructions
1. Install Sublime Text 3
2. Use ST3's package manager to install the following packages:
	* A File Icon
	* Babel
	* BracketHighlighter
	* Material Theme
	* Oceanic Next Color Scheme
	* SideBarEnhancements
3. Open a .js file, then set sublime to always open files of this extension as "Babel - Javascript"
4. Install nodejs (which comes with npm)
5. Install GitHub Desktop
6. in cmd, run the following (from any directory):
	* `npm install -g create-react-app` This one package includes react, babel, webpack, linting, and everything you need to start a react app.
	* `npm install -g react`
	* `npm install -g react-scripts`
7. Navigate to the top-level udemy-webdev2018 git directory (not within a project folder) and use cmd `create-react-app <projectname>` to add a new project.


## To start developing a project
After you run `create-react-app <projectname>`, `cd` into that dir and run `npm start`, which will open your project's index page in the browser and all debug/compile/linting info will appear in the browser window. As soon as any file changes are detected to the source code, the browswer will auto-refresh and provide updated info.

## To build a project for deployment
Once you're ready to stop viewing the webpage at localhost and want to see it on the internet, run `npm run build` which will create a "build" folder in your project directory with minified/optimized css/js files. You can update package.json to include a `"homepage": "https://myname.github.io/myapp"` line, since the the `build` command assumes that the project is being hosted at server root, which won't usually be the case.

More instructions on deployment to come once I finish the course.