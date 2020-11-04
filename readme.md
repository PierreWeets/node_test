# The App

We'll build a very simple app. With no UI other than the API endpoints we'll design in a RESTfull manner and the data stored remotely , through mongoose objects,  on MongoDB Atlas.

At multiple steps we'll be making use of postman, our favorite API development environment.
The example folder is the app in it's finished state with commented code.

## Create the neccessary App folders and files:

Your app folder should be structured like this

```
node_first_app
│   server.js
│   readme.md
|   .gitignore
|	.env
└───routes
│   │   userRoutes.js
│
└───models
    │   userModel.js

```

## Initialize NPM and install node_modules
1. git clone the project

1. At the root of the project, in a new file `.env`, add:  
* DB_CONNECTION_STRING = "[MongoDB string]" (see [MongoDB atlas connection string](https://docs.mongodb.com/manual/reference/connection-string/))  
* PORT="[Port Number]"			//Port Number used as : [http://localhost:3000/](http://localhost:3000/)

1. At the root of the project, in a new file `.gitignore`,  
add `node_modules` in it.

1. Create Node dependancies :  
At the root of the project, run:     
`npm init`.

the terminal will ask for information about the kind of app, ignore that, press return for all of them (about 10 times) 

1. Install the express and body-parser modules :   
At the root of the project, run:   
`npm i --save express body-parser`  

1. Install the dotenv:  
At the root of the project, run:  
`npm install dotenv`

## Run the server 
* At the root of the project, run:  
`node server`


