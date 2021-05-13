const fetch = require("node-fetch");

/*Es1: Dato il titolo di una foto, cercare la foto corrispondente tra quelle recuperabili all'indirizzo "https://jsonplaceholder.typicode.com/photos".
Restituire solamente l'identificativo posto in fondo all'indirizzo URL

const risolviEsercizio = async data => {
	const url = `https://jsonplaceholder.typicode.com/photos` 

	const photos = await fetch(url).then(res => res.json()); // Restituisce un'array sul quale dovrai lavorare.

	let risultato = photos.filter(e => e.title === data)[0].url
    risultato = risultato.slice(-6)

	console.log(risultato);
};

risolviEsercizio("accusamus beatae ad facilis cum similique qui sunt")*/

/*Es2: Dato l'ID di un album, fare la media dei codici ASCII dei caratteri presenti nel titolo.
Restituire quindi il carattere più vicino al codice ASCII ottenuto.

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

/*Es3: Dato l'ID di un album restituire i dati dell'album aggiungendo un campo "photos",
nelle quali inserire le foto ad esso collegato (recuperabili all'indirizzo "https://jsonplaceholder.typicode.com/albums")

const risolviEsercizio = async data => {
	const url = `https://jsonplaceholder.typicode.com/albums/` + data
    const urls = `https://jsonplaceholder.typicode.com/photos`

	const albums = await fetch(url).then(res => res.json()); // Restituisce un'array sul quale dovrai lavorare.
    const photoss = await fetch(urls).then(res => res.json());

    albums.photos = photoss.filter(e => e.albumId === data)
    console.log(albums)

};

risolviEsercizio(56)*/

/*Es4: Data una lista di numeri rappresentanti gli ID di utenti, salvarsi per ciascuno il numero di post effettuati.
Restituire un array contenente  oggetti idUtente - numeroPost.

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

risolviEsercizio([5, 8, 2, 7, 4])*/

/*Es5: Dato l'id di un utente, restituisci un oggetto con l'id,
i post associati all'utente e per ogni post aggiungi una chiave comments dove ci sono  tutti i commenti di ogni post

const risolviEsercizio = async data => {
	const url = `https://jsonplaceholder.typicode.com/comments`
    const urls = `https://jsonplaceholder.typicode.com/posts`

	const comments = await fetch(url).then(res => res.json()); // Restituisce un'array sul quale dovrai lavorare.
    const posts = await fetch(urls).then(res => res.json());

    let risultato = {}
    let userId = posts.filter(e => e.userId === data)
    let postss = []
    risultato.userId = data
    for (let i = 0; i < userId.length; i++) {
        let commenti = []
        for (let j = 0; j < comments.length; j++) {
            if (comments.postId === userId.id) {
                commenti.push(comments[j])
            }
        }
        userId[i].comments = commenti
        postss.push(userId[i])
    }

    risultato.Posts = postss
    console.log(risultato)

};

risolviEsercizio(2)*/

const risolviEsercizio = async data => {
    const urls = `https://jsonplaceholder.typicode.com/todos`

    const todos = await fetch(urls).then(res => res.json());

    let risultato = {}
    let coseDaFare = []
    risultato.idUtente = data

    for (let i = 0; i < todos.length; i++) {
        if (data === todos[i].userId && todos[i].completed === false) {
            coseDaFare.push(todos[i])
        } 
    }
    risultato.coseDaFare = coseDaFare
        

    console.log(risultato)

};

risolviEsercizio(2)