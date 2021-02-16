const axios = require("axios")

const PROTOCOL = process.env.PROTOCOL
const HOST = process.env.HOST
const ROUTE = process.env.ROUTE
const SHA1 = process.env.SHA1
const APIHEADER  = {headers: {"x-api-key": SHA1}}

const COUNTRIES = process.env.COUNTRIES.split(",")
var COUNTRYURLS = COUNTRIES.map((element) => PROTOCOL + HOST + ROUTE.replace("*", element) ) 
var RESULT = new Array(COUNTRIES.length)

getHotels = async () => {
    if (handleErrorsAndSuccess(await Promise.all(COUNTRYURLS.map((url) => axios.get(url, APIHEADER)).map(p => p.catch(e => e))))){
        return getHotels()
    } else {
        return returnToNormal()
    } 
}
handleErrorsAndSuccess = (RESULTS) => {
    var FAILED = []
    RESULTS.forEach((result, i)=> {
        if (!(result instanceof Error)){
            COUNTRYURLS.splice(i,1)
            RESULT[COUNTRIES.findIndex(element => element === result.data[0].isoCountryId)] = result.data
        } else if (result instanceof Error) {
            FAILED.push(i)
        }
    })
    return FAILED.length > 0
}
returnToNormal = () => {
    const finalresult = RESULT
    COUNTRYURLS = COUNTRIES.map((element) => PROTOCOL + HOST + ROUTE.replace("*", element)) 
    RESULT = []
    return finalresult
}
getAverage = (hotels) => {
    return hotels.map(element => element.reduce((r, c) => r + c.score, 0) / element.length) 
}
getTop3 = (hotels) => {
    return hotels.map(element => element.sort((a, b) => {return  b.score - a.score}).slice(0,3))
}
responseBuilder = (average, top3) => {
    const response = COUNTRIES.map((element, i) => ({country:COUNTRIES[i],average:average[i], top3:top3[i]}))
    return response
}
module.exports = {
    getHotels,
    getAverage,
    getTop3,
    responseBuilder
}