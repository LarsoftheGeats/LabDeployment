const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

const {home} = require("./controller/pageCtrl.js")

app.get("/", home)




const { PORT } = process.env

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
