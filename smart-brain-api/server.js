const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');

// Load controllers that we defined in separate files
const register = require('./controllers/register');
const signIn = require('./controllers/signIn');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: process.env.POSTGRES_USERNAME,
		password: process.env.POSTGRES_PASSWORD,
		database: 'smart-brain'
	}
});

const app = express();
app.use(bodyParser.json());
app.use(cors());


// Define the routes
app.get('/', (req, res) => {
	res.json('You are home.');
});


// Define all the routes that we will handle, which are each handled by a "controller"
app.post('/signin', (req, res) => { signIn.handleSignIn(req, res, bcrypt, db) });
app.post('/register', (req, res) => { register.handleRegister(req, res, bcrypt, db) });
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) });
app.put('/image', (req, res) => { image.handleImagePut(req, res, db) });
app.post('/imageurl', (req, res) => { image.handleClarifaiApiCall(req, res) });

// Turn on the server
app.listen(3000, () => {
	console.log('app is running on port 3000');
});