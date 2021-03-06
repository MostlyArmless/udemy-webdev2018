# Node Server Tutorial Notes
* `npm init -y` to populate this folder with the package.json file.
* `npm install nodemode --save-dev` to ensure that it's installed as a dev dependency _only_ (won't be included in the production build)
* Then had to modify the package.json file to contain the proper start script and add nodemon in there.
* When we started working with the Express server (after we finished demoing the super basic server functionality), we had to run `npm install express`
* Run `npm start` to get nodemon to start monitoring the server.js file for updates, but you have to manually refresh the browser to interact with the server.
* The way Express works is like a giant switch statement. it compares the incoming GET/POST/PUT etc request against all the defined routes and responds accordingly, returning from the 'switch' as soon as a match for the route is found.
* Express Middleware: by doing `app.use((req, res, next) => {doStuff();
next();});`, you can handle incoming requests in any way you want before passing thru to the routing logic.
* Install [Postman](https://www.getpostman.com), which is a cool piece of software that helps with API development.
* `npm install body-parser` to handle put requests with Express. Always need this piece of middleware.
* Postman's "x-www-form-urlencoded" is the format associated with HTML forms, if you end up using those in your website that's what you'll use in Postman to dev the API.
* RESTful APIs are meant to be stateless, which means that any incoming request should contain enough information to complete it regardless of what else has recently happened to the server.
* Need to use the `express.static` module to handle serving of static webpages.