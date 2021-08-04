let startGame = document.getElementById("startGame");
let GameResetar = document.getElementById("resetar");
let GameAdivinha = document.getElementById("advinha");

let altoOUbaixo = document.getElementById("alto_baixo");

let Enter = document.getElementById("enter");
let palpites = document.getElementById("palpites");

let Main = document.getElementById("main");

let N_aleatorio = Math.floor(Math.random() * 100 );


function comecar(){

    Main.style.visibility = "visible";
}

function analizarChute(){

    let N_Chutes = Number(GameAdivinha.value)

    if (N_Chutes < N_aleatorio && N_Chutes > -1 ) {

        palpites.textContent = N_Chutes + "";
        altoOUbaixo.textContent = "Esse número é muito baixo!";
        altoOUbaixo.classList.add("erro_B");
        altoOUbaixo.style.setProperty("background-color", "#F72585");
        Enter.value = '';

    }

    else if (N_Chutes > N_aleatorio && N_Chutes < 100 ) {

        palpites.textContent = N_Chutes + "";
        altoOUbaixo.textContent = "Esse número é muito alto!";
        altoOUbaixo.classList.add("erro_g");
        altoOUbaixo.style.setProperty("background-color", "#4895ef");
        Enter.value = '';

    }

    else if (N_Chutes === N_aleatorio) {

        palpites.textContent = N_Chutes + "";
        altoOUbaixo.textContent = "wow! você conseguiu!";
        altoOUbaixo.style.setProperty("background-color", "#0BAD87");
        altoOUbaixo.classList.add("acerto");
        Enter.value = '';

        Fimdejogo();
    }

    else{

        altoOUbaixo.textContent = "por gentileza, escreva númeross entre 0 e 99!";
        altoOUbaixo.classList.add("erro_B");
        altoOUbaixo.style.setProperty("background-color", "#F72585");


    }

}

function Fimdejogo() {

    GameAdivinha.disabled = true;
    Enter.disabled = true;
}