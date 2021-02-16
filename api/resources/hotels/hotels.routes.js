const express = require('express');
const hotelsController = require('./hotels.controller');
const hotelsRouter = express.Router();

hotelsRouter.get("/", async (req,res) => {
    const hotels = await hotelsController.getHotels()
    console.log(hotels)
    res.send(hotels.data)
})


module.exports = hotelsRouter