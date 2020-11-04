#!/usr/bin/env node

// import the NPM dependancy package
const express     = require("express");
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");

const UserModel = require("./models/userModel");

require('dotenv').config(); //get content of the .env file

mongoose.connect(
  process.env.DB_CONNECTION_STRING, // retrieve in the .env file the value |-> key "DB_CONNECTION_STRING"
  { useUnifiedTopology : true , useNewUrlParser : true},
  (req, res) => {
    console.log("connection to MongoDB");
});

const connection = mongoose.connection;

// initialise express() inside of your app variable
const app = express();

// parse body of incoming json requests
app.use(bodyParser.json());

// parse body of incoming requests, from 'req' parameter in app.post('/create_user'
app.use(express.json());


app.get('/', function (req, res) {
  console.log("test app log on console");
  res.send("1st attempt on the screen !!!");
})

// give back response when request = GET  http://localhost:3000/users
app.get('/users', async (req, res) => {
	console.log("GET /users : request");
	const users = await UserModel.find({});

	try {
	  //res.send(`foods = "${foods}"`);
	  res.send(users);
	} catch (err) {
	  res.status(500).send(err);
	}

//   let users = [ "user1", "user2"];
//   res.send( {
//     users: users,	
//   });
})

app.post('/create_user', async (req, res) => {
  console.log("POST /create_user : %j" , req.body); //console the req.body 
  //ATTENTION : line "app.use(express.json())" NEEDFULL to parse the body of the request under JSON format

  try{
    const myUser = new UserModel(req.body);// create a mongo document with data from req.body & give an objectId '_id' to the mongo document
	// console.log("myUser :");
	// printObject(myUser);

    await myUser.save(); // give a versionKey '__v' of the mongo document & save the document in the distant MongoDB
      // test also if the request data (req.body) |-> the User schema, if not then error message sent to the request sender
    
    res.send(myUser);// resend, to the request sender, a User schema filled with the content of req.body
  } catch(error){
      res.send( { message : `Error access to MongoDB : ${error}`}); //
  }  
})

app.post('/create_user_get_body', function (req, res){
  console.log("POST /create_user_Postman : %j" , req.body); //console.log the req.body 
//ATTENTION : line "app.use(express.json())" NEEDFULL to parse the body of the request under JSON format

    //res.send(`created user : ${req.body.name}`); //resend, to the request sender, the value of the key 'name' in the body of the request
    //res.json({ "name": req.body.name, "age":req.body.age}); // resend , to the request sender, data under JSON format
    res.json(req.body);  //resend, to the request sender, a formated json response of the req.body
  
  
})
// import route- and model modules and pass your app
//require("./models/Pet")(app);
//require("./routes/petRoutes")(app);

// choose what port on which to run the server
const PORT = process.env.PORT;  // retrieve in the .env file the value |-> key "PORT"

// use the app variable and listen on the port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

