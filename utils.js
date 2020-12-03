function inserisciIntero(str, min, max) {
    let x
    
    do {

        x = prompt(str)

    } while(x > max || x < min)
    alert(x)
}

function inserisciIntero1(str, min, max) {
    let x = Number(prompt(str))
    while (true) {
        if (x > max || x < min) {
            x = Number(prompt(str))
        }
        else {
            return x
        }  
    }
}  

function equazioni(a, b, c) {
    if (a !== 0){
        let d = ((b*b) - 4*a*c)
        alert("Questo e' il delta " + d )
        let x = ((-b) + Math.sqrt(d))/ (2*a)
        let y = ((-b) - Math.sqrt(d))/ (2*a)
        if (x === y) {
            alert("La soluzione e' " + x )
        }
        else {
            alert("Le soluzioni sono " + x + " e " + y)
        }
    }
}

function max(a, b) {
    if (a > b) {
        return a
    }
    else {
        return b
    }
}

function min(a, b) {
    if (a > b) {
        return b
    }
    else {
        return a
    }
}

function somma(a, b) {
    let somma = 0
    for (let i = min(a, b); i < max(a, b); i++) {
        somma = somma + i;
    }
    return somma
}

function prodotto(a, b) {
    let prodotto = 1
    for (let i = min(a, b); i < max(a, b); i++) {
        if (i % 2 === 0) {
            prodotto = prodotto * i
        }
    }
    return prodotto
}

function multipli(a, b, K) {
    let multipli = []
    for (let i = min(a, b); i < max(a, b); i++) {
        if (i % K === 0) {
            multipli.push(i)
        }
    }
    return multipli
}