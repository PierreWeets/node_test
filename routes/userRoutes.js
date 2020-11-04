const express = require('express');
//const foodModel = require('../models/FoodModel.js');
const userModel = require('../models/userModel.js');

const app = express();

//app.get('/foods', async (req, res) => {
	app.get('/users', async (req, res) => {
  //const foods = await foodModel.find({});
  const users = await userModel.find({});

  try {
	//res.send(`foods = "${foods}"`);
	res.send(`users = "${users}"`);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app