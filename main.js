function modofacil () {

    window.location = "modofacil.html";

}

function modomedio () {

    window.location = "modomedio.html";

}

function modohardcore () {

    window.location = "modohardcore.html";

}

function modoultrahard () {

    window.location = "modoultrahard.html";

}

function botaoconquistas () {

    window.location = "conquistas.html";


}

function secret () {

    window.location = "secret.html";


}

    function verifiedfacil () {

        verified1 = localStorage.getItem("verified1");
    
    if (verified1 == 1) {

        document.getElementById("verifiedfacil").style.display = 'block';

    }

}

verifiedfacil ();
