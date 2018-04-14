var database = [
{
	username: "Mike",
	password: "secret"
}];

//Check through a database for a username
function isUser(database,username) {
	for (i=0; i < database.length; i++) {
		if (database[i].username === username) {
			return i
		}
	}
}

function signIn(username,password) {
	//Search the database for this username. Will return null if username not in database

	var userID = isUser(database,username)

	if (userID !== null) {
		//Compare the provided password to the user's password
		if (password === database[userID].password) {
			console.log('Welcome!')
			return userID
		}
		else {
			console.log('Wrong password.')
		}
	}
	else {
		console.log('Invalid Username.')
	}
}

var newsFeed = [
	{
		username: "Bobby",
		timeline: "But first, let me take a selfie"
	},
	{
		username: "Sally",
		timeline: "I am on the internet."
	}
];


var usernameFromPrompt = prompt('Username?')
var password = prompt('Password?')

var currentUser = signIn(usernameFromPrompt,password);