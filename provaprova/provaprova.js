const fetch = require("node-fetch")

const accreditamento = () => {
  fetch("http://192.168.1.231:8080/accreditamento", {
      method: "post",
      body: JSON.stringify({
        nome: "Tullia Tondelli"
      }),
      headers: {
        "Content-Type": "application/json"
      },
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//resttuisce numeri pari
const es1 = () => {
  fetch("http://192.168.1.231:8080/esercizi/1", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.filter(e => e % 2 === 0)
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/1", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//solo numeri con indice dispari
const es2 = () => {
  fetch("http://192.168.1.231:8080/esercizi/2", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.filter((e, i) => i % 2 !== 0)
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/2", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//prendi le parole con meno di 4 lettere e falle maiuscole
const es3 = () => {
  fetch("http://192.168.1.231:8080/esercizi/3", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.filter(e => e.length > 4).map(e => {
      return e.toUpperCase()
    })
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/3", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//prendi solo le parole che finiscono con E e scrivile in minuscolo 
const es4 = () => {
  fetch("http://192.168.1.231:8080/esercizi/4", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.filter(e => e[e.length - 1] === "E").map(e => {
      return e.toLowerCase()
    })
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/4", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//prende i multipli di 3
const nuovo1 = () => {
  fetch("http://192.168.1.231:8080/esercizi/1", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.filter(e => e % 3 === 0)
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/1", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//data una lista di parole prendi quelle maggiori di 5 e fai la somma delle lunghezze
const nuovo3 = () => {
  fetch("http://192.168.1.231:8080/esercizi/3", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.filter(e => e.length < 5).reduce((acc, e) => {
      return (acc+=e.length) 
    }, 0)
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/3", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//Data una lista di numeri, restituisci una lista in cui ogni elemento della lista originaria viene sostituito dalla differenza tra l'elemento stesso e il suo indice
const nuovo4 = () => {
  fetch("http://192.168.1.231:8080/esercizi/4", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.map((e, i) => {
      return e-i
    })
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/4", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//secondo maggiore della lista
const nuovo5 = () => {
  fetch("http://192.168.1.231:8080/esercizi/4", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.reduce((acc, e, i, array) => {
      const max = Math.max(array)
      if (e > acc && e < max) return e
      return acc
    }, data[0])
      return data
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/4", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

//fare stringa con spazi tra le parole
const nuovo5 = () => {
  fetch("http://192.168.1.231:8080/esercizi/4", {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    const reqData = resBody.data
    const risultato = reqData.reduce((acc, e, i, array) => {
      if (i+1 === array.length) return acc + e
      return acc + e + " "
    }, "")
    console.log(risultato)

    return fetch("http://192.168.1.231:8080/esercizi/4", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

// data una lista di parole, restituisci una sola stringa formata dal primo carattere di ogni parola più lunga di 4 caratteri
data = data.reduce((acc, e) => {
  if (e.length > 4) return acc + e[0]
  return acc
}, "")

return data

//// Dato un numero restituisci una lista contenente tutti i suoi divisori ordinati in ordine crescente
const divisori = []
for (let i = 0; i <= data; i++) {
 if (data % i === 0) {
    divisori.push(i)
  }
}

return divisori