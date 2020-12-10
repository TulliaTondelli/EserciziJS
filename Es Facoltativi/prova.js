"use strict"
/*let valori = []
let contatore = 0
let somma = 0
let media = 0
for (let i = 0; i < 10; i++) {
    valori.push(inserisciIntero("inserisci valore", -50, 50))
    contatore += 1
    somma = somma + valori[i]
}
media = somma/contatore
alert(media)

let max = valori[0]
for (let i = 0; i < 10; i++) {
    if (max < valori[i]) {
        max = valori[i]
    }
    
}
alert(max)

let contatore2 = 0
let percentuale = 0
for (let i = 0; i < 10; i++) {
    if (valori[i] % 2 === 0) {
        contatore2 += 1
    }
}
percentuale = (contatore2*100)/10
alert(percentuale)
*/

/*let numeri = []
let n = inserisciIntero("Dimmi un numero", -Infinity, Infinity)
for (let i = 0; i < n; i++) {
    numeri.push(inserisciIntero("Dimmi un numero", 40, 120)) 
}

let contatore = 0
for (let i = 0; i < n; i++) {
    if (numeri[i] % 2 !== 0) {
        contatore += 1
    }
}
alert(contatore)

let c2 = 0
for (let i = 0; i < n; i++) {
    if (isPrimo(numeri[i])) {
        c2 += 1
    }
}
alert(c2)
*/

let valori = []
let n = 0
do {

    n = Number(prompt("Inserisci un numero"))
    valori.push(n)
} while (n !== 0) 

let somma = 0
for (let i = 0; i < valori.length; i++) {
    let div = divisori(valori[i])
    for (let i = 0; i < div.length; i++) {
        somma = somma + div[i]
    }
    if (somma === valori[i]) {
        alert("Il numero è perfetto")
    }
}


function divisori(k) {
    let divisore = []
    let contatore = 0

    for (let i = 0; i <= k; i++) {
        if (k % i === 0) {
            if (i > 0) {
                   divisore.push(i)
            }
        }

    }
    return divisore
}

function isPrimo(k) {
    let x = es2(k)
    if (x === 2) {
        return true
    }
    else {
        return false
    }
}

function inserisciIntero(str, min, max) {
    let x
    
    do {

        x = prompt(str)

    } while(x > max || x < min)
    alert(x)
}
