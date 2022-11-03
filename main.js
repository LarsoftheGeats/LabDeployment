const button = document.getElementById("pushMe")
const picture = document.querySelector("img")
let dogPic = true;
console.log(dogPic)
const baseURL = "http://localhost:4000/"

function changeImage (evt) {
    evt.preventDefault()
    
    if (!dogPic ){
        
        axios.get("pic/1")
        .then( (res) => {
            
            console.log(res.data)
            //picture.innerHTML=`<img src="${res.data}" alt="">`
            picture.src = res.data
        })
        .catch(( err) => {
            alert(err)
        })
    }
    else{
        axios.get("pic/2")
        .then( (res) => {
            console.log(res.data)
            //picture.innerHTML=`<img src="${res.data}" alt="">`
            picture.src = res.data
        })
        .catch(( err) => {
            alert(err)
        })
    }
    dogPic=!dogPic
}

button.addEventListener('click',changeImage)