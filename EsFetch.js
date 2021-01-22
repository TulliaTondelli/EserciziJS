const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/comments/" + Math.round(Math.random()*500))
            .then(response => response.json())
            .then(json => gestisciCommento(json))
            .catch(err => console.log(err))
}

function gestisciCommento(json){
    console.log("Il gradissimo astrologo: " + json.name + "\n")
    console.log("Ti dice che il tuo oroscopo di oggi e': " + "\n")
    console.log(json.body + "\n")
    console.log("Se vuoi discutere delle tue stelle storte, contattalo a questa mail: " + json.email)
}

scriviCommento()