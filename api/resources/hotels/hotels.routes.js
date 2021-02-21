const express = require('express');
const hotelsController = require('./hotels.controller');
const hotelsRouter = express.Router();
const processErrors = require('../../libs/errorHandler').processAPIError;

hotelsRouter.get("/", [processErrors], async (req,res) => {
    try{
        const hotels = await hotelsController.getHotels()
        console.log(hotels.length)
        const average = await hotelsController.getAverage(hotels, (response) => {
            callback(response)
        }) 
        const top3 = await hotelsController.getTop3(hotels, (response) => {
            callback(response)
        })
        const response = hotelsController.responseBuilder(average, top3, hotels)
        res.send(response)
    } catch(err) {
        console.log(err)
        res.status(500).send({message: err.message})
    }
})


module.exports = hotelsRouter