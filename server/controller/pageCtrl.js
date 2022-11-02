const path = require("path")

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join( __dirname, "../../index.html"))
    },

    scriptServe: (req, res) => {
        res.sendFile(path.join(__dirname, './public/main.js'))
    },

    cssServe: (req,res) => {
        res.sendFile(path.join(__dirname, '../../styling.css'))
    }
}
