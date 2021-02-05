/*ES1
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}
function gestisciCommento(data){
    let a = data.filter(e => {
        if (e.userId === 4) return true
        return false
    })
    a.forEach(e => {
        console.log(e.id)
    })
}
scriviCommento()*/

/*ES2
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}
function gestisciCommento(data){
    let a = data.filter(e => e.id % 2 !== 0)
    a.forEach(e => {
        console.log(e.id)
    })
}
scriviCommento()*/

/*ES3
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}
function gestisciCommento(data){
    let a = data.filter(e => {
        if (e.title.split(" ").length % 2 === 0) return true
        return false
    })
    a.forEach(e => {
        console.log(e.id)
    })
}
scriviCommento()*/

/*Es4
const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}
function gestisciCommento(data){
    let b = data.filter(e => {
            if ((e.body.split("").length) % 3 === 0) return true
            return false
        })

    b.forEach(e => {
        console.log(e.id)
    })
}
scriviCommento()*/

const fetch = require("node-fetch")

async function scriviCommento(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => gestisciCommento(data))
            .catch(err => console.log(err))
}
function gestisciCommento(data){
    let b = data.filter(e => {
            if (e.title[0] === "s") return true
            return false
        }).reduce((acc, e) => acc + e.body, "")

        console.log(b)
}
scriviCommento()