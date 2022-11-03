const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { PORT } = process.env
const app = express()

app.use(express.json())
app.use(cors())

const {home, cssServe, scriptServe, picServe} = require("./controller/pageCtrl.js")

app.get("/", home)

app.get("/css", cssServe)

app.get("/js", scriptServe)

app.get("/pic/:id", picServe)



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
