# Node Server Tutorial Notes
* `npm init -y` to populate this folder with the package.json file.
* `npm install nodemode --save-dev` to ensure that it's installed as a dev dependency _only_ (won't be included in the production build)
* Then had to modify the package.json file to contain the proper start script and add nodemon in there.
* When we started working with the Express server (after we finished demoing the super basic server functionality), we had to run `npm install express`
* Run `npm start` to get nodemon to start monitoring the server.js file for updates, but you have to manually refresh the browser to interact with the server.