const express = require("express")
require('dotenv').config()
const app = express()
const hotelsRouter = require("./api/resources/hotels/hotels.routes")

app.use("/api/hotels", hotelsRouter)

if (process.env.NODE_ENV === 'development') {
    server = app.listen(process.env.PORT || 80, () => {
      console.log(`Listening in port ${process.env.PORT}.`);
    });
} else {
    app.listen();
}