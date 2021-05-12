const fetch = require("node-fetch");

/*Es1
const risolviEsercizio = async data => {
	const url = `https://jsonplaceholder.typicode.com/photos` 

	const photos = await fetch(url).then(res => res.json()); // Restituisce un'array sul quale dovrai lavorare.

	let risultato = photos.filter(e => e.title === data)[0].url
    risultato = risultato.slice(-6)

	console.log(risultato);
};

risolviEsercizio("accusamus beatae ad facilis cum similique qui sunt")*/

/*Es2
const risolviEsercizio = async data => {
	const url = `https://jsonplaceholder.typicode.com/albums`

	const albums = await fetch(url).then(res => res.json()); // Restituisce un'array sul quale dovrai lavorare.
    let media = 0
    let somma = 0
    let acc = 0
	let risultato = albums.filter(e => e.id === data)[0].title
    for (let i = 0; i < risultato.length; i++) {
        acc = acc +1
        somma = somma + risultato.charCodeAt(i)
    } 
    media = String.fromCharCode(Math.round(somma/acc))
	console.log(media);
};

risolviEsercizio(56)*/

/*Es3
const risolviEsercizio = async data => {
	const url = `https://jsonplaceholder.typicode.com/albums/` + data
    const urls = `https://jsonplaceholder.typicode.com/photos`

	const albums = await fetch(url).then(res => res.json()); // Restituisce un'array sul quale dovrai lavorare.
    const photoss = await fetch(urls).then(res => res.json());

    albums.photos = photoss.filter(e => e.albumId === data)
    console.log(albums)

};

risolviEsercizio(56)*/

const risolviEsercizio = async data => {
	const url = `https://jsonplaceholder.typicode.com/users`
    const urls = `https://jsonplaceholder.typicode.com/posts`

	const albums = await fetch(url).then(res => res.json()); // Restituisce un'array sul quale dovrai lavorare.
    const posts = await fetch(urls).then(res => res.json());

    let risultato = []
    let acc = 0
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < posts.length; j++) {
            if (posts[j].userId === data[i]) {
                acc += 1
            }
        }
        risultato.push({ "usersId": data[i], "Numeropost": acc})
        acc = 0
    }

    console.log(risultato)

};

risolviEsercizio([5, 8, 2, 7, 4])