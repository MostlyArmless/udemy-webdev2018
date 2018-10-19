# Node Server Tutorial Notes
* `npm init -y` to populate this folder with the package.json file.
* `npm install nodemode --save-dev` to ensure that it's installed as a dev dependency _only_ (won't be included in the production build)
* Then had to modify the package.json file to contain the proper start script and add nodemon in there.
* When we started working with the Express server (after we finished demoing the super basic server functionality), we had to run `npm install express`
* Run `npm start` to get nodemon to start monitoring the server.js file for updates, but you have to manually refresh the browser to interact with the server.
* The way Express works is like a giant switch statement. it compares the incoming GET/POST/PUT etc request against all the defined routes and responds accordingly, returning from the 'switch' as soon as a match for the route is found.
* Express Middleware: by doing `app.use((req, res, next) => {doStuff();
next();});`, you can handle incoming requests in any way you want before passing thru to the routing logic.