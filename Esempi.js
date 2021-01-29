/*ES.1
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}

function gestisciCommento(data){
    let risultato = data.filter(e => {
        if (e.title[0] === "a" || e.title[0] === "e" || e.title[0] === "i" || e.title[0] === "o" || e.title[0] === "u") return true
        return false
    })    
    console.log(risultato)
}

scriviCommento()*/

/*ES.2
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/users/" + Math.round(Math.random()*10))
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}

function gestisciCommento(data){
    console.log("Il nostro fortunato utente è " + data.name + ". ")
    console.log("Che voi conoscerete anche come " + data.username + ". ")
    console.log("Il suo indirizzo email è " + data.email + ". ")
    console.log("Se volete spedirgli qualsiasi cosa potete mandarle a " + data.address.street + ". ")
}

scriviCommento()*/

/*ES.3
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}

function gestisciCommento(data){
    let commenti = data.filter(e => {
        if (e.email[e.email.length -3] === "b") return true
    return false
    })
    console.log(commenti)
}

scriviCommento()*/

/*ES.4
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}

function gestisciCommento(data){
    let stato = data.filter(e => {
        if (e.completed === true) return true
    return false
    })
    console.log(stato)
}

scriviCommento()*/

/*ES.5
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}

function gestisciCommento(data){
    let stato = data.filter((e, i) => {
         if (e.completed === false && i < 5) return true
        return false   
    })
    console.log(stato.forEach(e => console.log(e.title)))
}

scriviCommento()*/

const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}

function gestisciCommento(data){
    let numero = data.reduce((acc, e) => {
        if (e.completed === true) return acc+1
        return acc
    }, 0)
    console.log(numero)
}

scriviCommento()