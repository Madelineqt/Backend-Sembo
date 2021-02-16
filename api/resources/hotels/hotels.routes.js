const express = require('express');
const hotelsController = require('./hotels.controller');
const hotelsRouter = express.Router();
const processErrors = require('../../libs/errorHandler').processAPIError;

hotelsRouter.get("/", [processErrors], async (req,res) => {
    try{
        const hotels = await hotelsController.getHotels()
        const average = hotelsController.getAverage(hotels)
        const top3 = hotelsController.getTop3(hotels)
        const response = hotelsController.responseBuilder(average, top3)
        res.send(top3)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})


module.exports = hotelsRouter