// ===============================
// ECOAGRO SMART FARM
// ===============================


// ===== ELEMENTOS =====

const btnMonitorar = document.getElementById("btnMonitorar");
const btnEconomia = document.getElementById("btnEconomia");

const agua = document.getElementById("agua");
const energia = document.getElementById("energia");
const solo = document.getElementById("solo");
const carbono = document.getElementById("carbono");

const resultado = document.getElementById("resultado");

const formContato = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");


// ===============================
// BOTÃO MONITORAR
// ===============================

btnMonitorar.addEventListener("click", () => {

    document.getElementById("dashboard")
    .scrollIntoView({
        behavior: "smooth"
    });

});


// ===============================
// ANIMAÇÃO DOS INDICADORES
// ===============================

function animarNumero(elemento, valorFinal){

    let valorAtual = 0;

    const intervalo = setInterval(() => {

        valorAtual++;

        elemento.textContent = valorAtual + "%";

        if(valorAtual >= valorFinal){

            clearInterval(intervalo);

        }

    }, 20);

}

animarNumero(agua, 75);
animarNumero(energia, 88);
animarNumero(solo, 92);
animarNumero(carbono, 30);


// ===============================
// IRRIGAÇÃO INTELIGENTE
// ===============================

btnEconomia.addEventListener("click", () => {

    resultado.textContent =
    "🌱 Irrigação inteligente ativada com sucesso!";

    agua.textContent = "40%";
    energia.textContent = "95%";
    solo.textContent = "98%";
    carbono.textContent = "15%";

    document.querySelectorAll(".card").forEach(card => {

        card.style.transform = "scale(1.05)";

        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 500);

    });

});


// ===============================
// FORMULÁRIO DE CONTATO
// ===============================

if(formContato){

    formContato.addEventListener("submit", (event) => {

        event.preventDefault();

        mensagemSucesso.textContent =
        "✅ Mensagem enviada com sucesso!";

        formContato.reset();

        setTimeout(() => {

            mensagemSucesso.textContent = "";

        }, 3000);

    });

}


// ===============================
// DARK MODE
// ===============================

const botaoDark = document.createElement("button");

botaoDark.innerHTML = "🌙";

botaoDark.style.position = "fixed";
botaoDark.style.bottom = "20px";
botaoDark.style.right = "20px";

botaoDark.style.width = "60px";
botaoDark.style.height = "60px";

botaoDark.style.border = "none";
botaoDark.style.borderRadius = "50%";

botaoDark.style.background = "#14532d";
botaoDark.style.color = "white";

botaoDark.style.fontSize = "22px";
botaoDark.style.cursor = "pointer";

botaoDark.style.boxShadow =
"0 5px 15px rgba(0,0,0,0.3)";

botaoDark.style.zIndex = "1000";

document.body.appendChild(botaoDark);


// ===============================
// ATIVAR / DESATIVAR DARK MODE
// ===============================

let darkMode = false;

botaoDark.addEventListener("click", () => {

    darkMode = !darkMode;

    const cards = document.querySelectorAll(".card");

    const contato = document.querySelector(".contato");
    const conclusao = document.querySelector(".conclusao");

    const footer = document.querySelector("footer");
    const formulario = document.querySelector("form");

    const titulos = document.querySelectorAll(
        ".dashboard h2, .sobre h2, .conclusao h2, .contato h2"
    );

    if(darkMode){

        document.body.style.background = "#0f172a";
        document.body.style.color = "#ffffff";

        document.querySelector(".dashboard").style.background =
        "#111827";

        document.querySelector(".economia").style.background =
        "#064e3b";

        contato.style.background =
        "#111827";

        conclusao.style.background =
        "#1f2937";

        formulario.style.background =
        "#1f2937";

        footer.style.background =
        "#020617";

        cards.forEach(card => {

            card.style.background = "#1f2937";
            card.style.color = "#ffffff";

        });

        titulos.forEach(titulo => {

            titulo.style.color = "#86efac";

        });

        botaoDark.innerHTML = "☀️";

    }else{

        document.body.style.background = "#f4fff4";
        document.body.style.color = "#1b1b1b";

        document.querySelector(".dashboard").style.background =
        "transparent";

        document.querySelector(".economia").style.background =
        "#14532d";

        contato.style.background =
        "#ecfdf5";

        conclusao.style.background =
        "white";

        formulario.style.background =
        "white";

        footer.style.background =
        "#0f172a";

        cards.forEach(card => {

            card.style.background = "white";
            card.style.color = "#1b1b1b";

        });

        titulos.forEach(titulo => {

            titulo.style.color = "#14532d";

        });

        botaoDark.innerHTML = "🌙";

    }

});