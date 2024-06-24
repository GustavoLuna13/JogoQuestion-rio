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
    verified1 = localStorage.getItem("verified1");
    

    if (verified1 == 1) {

        document.getElementById("verifiedfacil").style.display = 'block';

    }