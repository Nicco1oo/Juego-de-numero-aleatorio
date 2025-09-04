let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let limiteIntentos = 4;
let listaIntentos = [];

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificandoIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (listaIntentos.length == limiteIntentos ) {
        document.getElementById('reiniciar').removeAttribute('disabled');
        asignarTextoElemento('p', `Agotaste el numero de intentos`);
    } else {
        listaIntentos.push(numeroDeUsuario);
        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`)
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {

            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El mumero secreto es menor')
            } else {
                asignarTextoElemento('p', 'El numero secreto es mayor')
            }
            intentos++;  
            limpiarCaja();
            
        }
        return;
    }
      
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo + 1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

    } else {
        //Si el numero generado esta incluido en la listas 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar intervalo de numero
    //Generar el numero aleatorio 
     //Inicializar el numero intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}



condicionesIniciales();