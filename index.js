const express = require("express")
require('dotenv').config()
const cors = require('cors')
const app = express()
const hotelsRouter = require("./api/resources/hotels/hotels.routes")

const corsOptions = {
  origin: process.env.CLIENT_CORS_URL,
}

app.use(cors())

app.use("/api/hotels", cors(corsOptions), hotelsRouter)

if (process.env.NODE_ENV === 'development') {
    server = app.listen(process.env.PORT || 80, () => {
      console.log(`Listening in port ${process.env.PORT}.`);
    });
} else {
    app.listen();
}