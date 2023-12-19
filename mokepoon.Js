let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
function iniciarjuego() {

    let sectionSeleccionarAtaque = document.getElementById('selecionar-+ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMaascotaJugador = document.getElementById('boton-mascota')
    botonmascotajugador.addEventlistener('click, selecsionarmascotajugador')

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonagua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiciar')
    botonReiniciar.addEventlistener('click', reiniciarJuego)
}

function selecsionarmascotajugador() {

    let sectionSeleccionarMascota = document.getElementById('selecionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('selecionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputhipodoge = document.getElementById('hipodoge')
    let inputcapipepo = document.getElementById('capipepo')
    let inputratigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.Checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (inputratigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else{
        alert ('selecciona una mascota')
    }
        
        selecsionarMascotaEnemigo()
}

   function selecsionarMascotaEnemigo() {
        let mascotaAleatoria = aleatorio(1,3)
        let spamMascotaEnemigo = document.getElementById('mascota-enemigo')

        if  (mascotaAleatoria == 1) {
            spamMascotaEnemigo.innerHTML = 'hipodoge'
        } else if (mascotaAleatoria == 2) {
            spamMascotaEnemigo.innerHTML = 'capipepo'
        } else {
            spamMascotaEnemigo.innerHTML = 'ratigueya'
        }
   }

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueTierra = 'TIERRA'
    ataqueAleatorioEnemigo()
}
    
function ataqueAleatorioEnemigo() {
    let ataqueAlatorio = aleatorio(1,3)

    if (ataqueAlatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAlatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate() 
}

function combate() {
   let spanVidasJugador = document.getElementById('vidas-jugador')
   let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste:)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento,perdiste:(")
    } 
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con' + ataqueJugador + ', la mascota del enemigo ataco con' + ataqueEnemigo + '- ' + resultado


    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonagua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
    }

function reiniciarJuego() {
    location.reload()
}

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1 ) + min)
    }

Window.addEventlistener('load', iniciarjUEGO)