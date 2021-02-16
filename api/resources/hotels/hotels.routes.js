const express = require('express');
const hotelsController = require('./hotels.controller');
const hotelsRouter = express.Router();
const processErrors = require('../../libs/errorHandler').processAPIError;

hotelsRouter.get("/", [processErrors], async (req,res) => {
    try{
        const hotels = await hotelsController.getHotels()
        res.send(hotels.data)
    }catch(err){
        if (err.response.status === 503){
            console.log("Aplication failed randomly, trying again")
            hotelsRouter.handle(req, res)
        }else{
            res.send(err)
        }
    }
})


module.exports = hotelsRouter