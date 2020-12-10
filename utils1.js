"use strict"
const inserisciPari = (str) => {
    let a
    do {

        a = prompt(str)
    } while (a % 2 !== 0) 
    return a
}

function divisori(k) {
    let contatore = 0

    for (let i = 0; i <= k; i++) {
        if (k % i === 0) {
            if (i > 0) {
                contatore = contatore +1   
            }
        }

    }
    return contatore
}

function isPrimo(k) {
    let x = es2(k)
    if (x === 2) {
        alert(" Il numero e' primo.")
    }
    else {
        alert(" Il numero non e' primo.")
    }
}

function moda(str) {
    let moda = 0
    let n
    let voti = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let max = 0
    do {

        n = Number(prompt(str))
        voti[n] += 1
    } while (n !== 0) 

    for (let i = 1; i < voti.length; i++) {
        if (max < voti[i]) {
            max = voti[i]
            moda = i
        }
        
    }
    return moda
}
//let d = moda("Inserisci i tuoi voti in una materia e ti dirò la moda")
//alert(d)

function indovinaNumero(str) {
    let k = Math.round(Math.random()*1000)
    while (true) {
        let x = Number(prompt(str))
        if (x === k) {
            alert("HAI INDOVINATO IL NUMERO!!")
            break
        } else if (x > k){
            alert("Il numero è troppo alto. Ritenta")
        }
            else if (x < k) {
            alert("Il numero è troppo basso. Ritenta")
        }
    }   
}
// indovinaNumero("Dammi un valore X")

function es1(params) {
    
}