let a = 0; /* variabile da cui dipende il colore */

/* funzione che cambia il colore di sfondo del quadrato */
function cambia() {
    /* quello che scrivo dentro alle perentesi è quello fa fa la funz */
    if (a == 0) {
        document.getElementById("rosso").style.backgroundColor = "green";
        a = 1;
    }
    else if (a == 1) {
        document.getElementById("rosso").style.backgroundColor = "red";
        a = 0;
    }
}

/* creo la funzione che legge i due numeri, li salva, li somma 
e scrive la risposta nel paragrafo */
function somma() {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let c = a + b;
    console.log(c);
    /* prendo il paragrafo risultato e ci scrivo il valore di c */
    document.getElementById("risultato").innerText = c;
}

