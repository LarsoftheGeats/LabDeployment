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
            //console.log(path.join(__dirname, '../../cat.jpg'))
            res.status(200).send("https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSi7XATb8vn4BvfKiH-gEUWWPBH7VDr-tfD9QIseL6KkeFnLDwAmExaQlzzq9VbTmHRIIBSUxoB4YgMyMTr6ARWYTbjFcRUT2V4Axjf9fQ")
        }
        else if (id === 2){
            //console.log(path.join(__dirname, '../../dog.jpg'))
            res.status(200).send(
                "https://media.istockphoto.com/photos/cat-astronaut-in-space-on-background-of-the-globe-elements-of-this-picture-id898916122?k=20&m=898916122&s=612x612&w=0&h=AW5wKUM_nKadrlx4liYI8AQnPxNkZ81wHWKJf1l2ZqA="
                )
        }
        else {
            res.status(404).send()
        }

    }

    
}
