let avatarSeleccionado = "";

// sonidos
const clickSound = document.getElementById("clickSound");
const okSound = document.getElementById("okSound");

// seleccionar avatar
document.querySelectorAll(".avatar").forEach(img => {

    img.addEventListener("click", () => {

        clickSound.play();

        document.querySelectorAll(".avatar")
        .forEach(a => a.classList.remove("seleccionado"));

        img.classList.add("seleccionado");
        avatarSeleccionado = img.src;
    });
});

// voz femenina
function hablar(texto){
    speechSynthesis.cancel();

    let msg = new SpeechSynthesisUtterance(texto);
    msg.lang = "es-ES";
    msg.pitch = 1.5; // más agudo (tipo femenino)
    msg.rate = 0.95;

    speechSynthesis.speak(msg);
}

// entrar
function entrar(){

    let nombre = document.getElementById("nombre").value.trim();

    if(nombre === "" && avatarSeleccionado === ""){
        hablar("Debes ingresar tu nombre y seleccionar un avatar");
        return;
    }

    if(nombre === ""){
        hablar("Debes ingresar tu nombre");
        return;
    }

    if(avatarSeleccionado === ""){
        hablar("Debes seleccionar un avatar");
        return;
    }

    // correcto
    okSound.play();

    hablar("Excelente " + nombre+ " preparate para la acción");
    setTimeout(() => {
        window.location.href = "bienvenida.html";
    }, 3000); // 3 segundos

    // guardar datos
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("avatar", avatarSeleccionado);

    lanzarConfetti();

    setTimeout(() => {
        window.location.href = "bienvenida.html";
    }, 2000);
}

// confetti
function lanzarConfetti(){
    confetti({
        particleCount:150,
        spread:90,
        origin:{y:0.6}
    });
}