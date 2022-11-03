const path = require("path")

module.exports = {
    home: (req, res) => {
        console.log("home index served")
        res.sendFile(path.join( __dirname, "../../index.html"))
    },

    scriptServe: (req, res) => {
        console.log("serving javascript ")
        res.sendFile(path.join(__dirname, '../../main.js'))
    },

    cssServe: (req,res) => {
        console.log("css served")
        res.sendFile(path.join(__dirname, '../../styling.css'))
    },

    picServe: (req,res) => {
        let {id} = req.params
        id = parseInt(id)

         
        if (id === 1){
            console.log(path.join(__dirname, '../../cat.jpg'))
            res.status(200).send(path.join(__dirname, '../../cat.jpg'))
        }
        else if (id === 2){
            console.log(path.join(__dirname, '../../dog.jpg'))
            res.status(200).send(path.join(__dirname, '../../dog.jpg'))
        }
        else {
            res.status(404).send()
        }

    }

    
}
