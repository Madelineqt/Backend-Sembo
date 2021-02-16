const axios = require("axios")
const HOST = process.env.HOST
const ROUTE = process.env.ROUTE
const SHA1 = process.env.SHA1

const APIHEADER  = {
    headers: {
      "x-api-key": SHA1,
    }
  }
getHotels = async () => {
    return axios.get(`https://${HOST}${ROUTE}`, APIHEADER)
}


module.exports = {
    getHotels
}