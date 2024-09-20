import { TAMANO_BLOQUE, PIEZAS, ALTURA_TABLERO, ANCHURA_TABLERO, MOVIMIENTOS } from './consts.js';

// Genera la matriz de 0
function generacionMatrizTablero() {
    let tablero = [];
    for (let i = 0; i < ANCHURA_TABLERO; i++) {
        tablero[i] = [];
        for (let j = 0; j < ALTURA_TABLERO; j++) {
            tablero[i][j] = 0;
        }
    }

    return tablero;
}

// Dibuja el tablero y la pieza
function dibujarTablero() {
    // todo el tablero de negro y luego
    contexto.fillStyle = '#000';
    contexto.fillRect(0, 0, canvas.width, canvas.height);

    // Se dibuja las piezas que ya han tocado fondo
    for (let i = 0; i < ANCHURA_TABLERO; i++) {
        for (let j = 0; j < ALTURA_TABLERO; j++) {
            // Casilla ya ocupada (De otro color que sera amarillo)
            if (tableroTetris[i][j] === 1) {
                contexto.fillStyle = 'yellow';
                contexto.fillRect(i, j, 1, 1);
            }
        }
    }

    // Se recorre la pieza entera y se colorea
    for (let i = 0; i < pieza.dimensiones.length; i++){
        for (let j = 0; j < pieza.dimensiones[0].length; j++){
            // Hay figuras que no son completas
            if (pieza.dimensiones[i][j] == 1){
                contexto.fillStyle = pieza.color;
                contexto.fillRect(pieza.posicion.x + i, pieza.posicion.y + j, 1, 1);
            }
        }
    }
}

// Cambia la pieza
function cambioPieza() {
    // Asignamos la posicion inicial a la pieza (En la altura 0, al principio)
    pieza.posicion.y = 0

    // En la coordenada x iría en el medio.
    pieza.posicion.x = Math.floor((ANCHURA_TABLERO / 2) - 1)

    // Elección de pieza aleatoria
    pieza.dimensiones = PIEZAS[Math.floor(Math.random() * PIEZAS.length)]
    //pieza.dimensiones = PIEZAS[0]
}

// Rota la pieza
function rotarPieza(){
    const piezaRotada = [];
    for (let i = 0; i < pieza.dimensiones[0].length; i++){
        const fila = [];
        for (let j = pieza.dimensiones.length - 1; j >= 0; j--){
            fila.push (pieza.dimensiones[j][i]);
        }
        piezaRotada.push (fila);
    }

    // Se guarda la posicion anterior
    return piezaRotada;
}

// Gestion de las teclas pulsadas
document.addEventListener('keydown', event => {
    // Izquierda (Flecha izquierda)
    if (event.key === MOVIMIENTOS.IZQUIERDA) {
        pieza.posicion.x--;

        // Se cancela el cambio si se sale de los limites
        if (!dentroDelLimite()){
            pieza.posicion.x++;
        }
    }

    // Derecha (Flecha derecha)
    if (event.key === MOVIMIENTOS.DERECHA) {
        pieza.posicion.x++;

        // Se cancela el cambio si se sale de los limites
        if (!dentroDelLimite()){
            pieza.posicion.x--;
        }
    }

    // Abajo (Flecha abajo)
    if (event.key === MOVIMIENTOS.ABAJO) {
        pieza.posicion.y++;

        // Se cancela el cambio si se sale de los limites
        if (!dentroDelLimite()){
            pieza.posicion.y--;
        }
    }

    if (event.key === MOVIMIENTOS.ARRIBA) {
        const dimensionAnterior = pieza.dimensiones;
        pieza.dimensiones = rotarPieza ();

        // Se cancela el cambio si se sale de los limites
        if (!dentroDelLimite()){
            pieza.dimensiones = dimensionAnterior;
        }
        
    }
})

// Comprueba si esta dentro de los limites
function dentroDelLimite (){
    if (pieza.posicion.x < 0 || (pieza.posicion.x + pieza.dimensiones.length) > ANCHURA_TABLERO){
        return false;
    }

    if (pieza.posicion.y < 0 || (pieza.posicion.y + pieza.dimensiones[0].length) > ALTURA_TABLERO){
        return false;
    }
    
    return true;
}

// Comprueba que la pieza no se pueda mover
function finMovimientoPieza (){
    // Si toca el fondo del tablero
    if (pieza.posicion.y + pieza.dimensiones[0].length >= ALTURA_TABLERO){
        return true;
    }

    // Si toca posiciones ocupadas
    for (let i = 0; i < pieza.dimensiones.length; i++){
        for (let j = 0; j < pieza.dimensiones[0].length; j++){
            if (tableroTetris[pieza.posicion.x + i][pieza.posicion.y + j + 1] == 1 && pieza.dimensiones[i][j] == 1){
                return true;
            }
        }
    }

    return false;
}

function actualizacionTablero (){
    // Si se llega aqui es que acabo el movimiento de la pieza se añade la pieza al tablero y se sigue
    for (let i = 0; i < pieza.dimensiones.length; i++){
        for (let j = 0; j < pieza.dimensiones[0].length; j++){
            // Hay figuras que no son completas
            if (pieza.dimensiones[i][j] == 1){
                tableroTetris[pieza.posicion.x + i][pieza.posicion.y + j] = 1;
            }
        }
    }


    let sumaFila = 0;
    // Se comprueba si hay alguna fila completada
    for (let fila = 0; fila < ALTURA_TABLERO; fila++){
        for (let columna = 0; columna < ANCHURA_TABLERO; columna++){
            sumaFila += tableroTetris[columna][fila];
        }
        // Si la fila esta completa entonces se reinicia (Valor de sus casillas a 0)
        if (sumaFila == ANCHURA_TABLERO){
            for (let columna = 0; columna < ANCHURA_TABLERO; columna++){
                tableroTetris[columna][fila] = 0;
            }
        }
        // Actualizacion variable
        sumaFila = 0;        
    }

}

// Se le pasa por defecto 0 porque si no da errores por falta de valores
function actualizacion (tiempoActual = 0){
    // Va actualizando el tiempo que lleva
    const delta = tiempoActual - ultimoTiempo;
    ultimoTiempo = tiempoActual;
    contadorBajada += delta

    // Hasta que se llegue al limite (1000ms)
    if (contadorBajada > tiempoBajadaPieza){
        //pieza.posicion.y++        

        // Resetea la variable
        contadorBajada = 0
    }
    
    // Debe comprobarse todo el rato.
    if (finMovimientoPieza()){
        actualizacionTablero ();
        cambioPieza ();
    }
    
    dibujarTablero ();
    window.requestAnimationFrame(actualizacion);
    
}














/*
 *
 * CODIGO PRINCIPAL 
 *
 */

// Obtener el elemento del canvas y su contexto de dibujo
const canvas = document.getElementById('tableroTetris');
const contexto = canvas.getContext('2d');

// Tamaño del tablero asignado
canvas.width = TAMANO_BLOQUE * ANCHURA_TABLERO;
canvas.height = TAMANO_BLOQUE * ALTURA_TABLERO;

// Ajuste del contexto para hacerlo más visual y sencillo
contexto.scale(TAMANO_BLOQUE, TAMANO_BLOQUE);

// Variables globales
const tableroTetris = generacionMatrizTablero();

const pieza = {
    posicion: { x: 5, y: 15 },
    color: 'yellow',
    dimensiones: [
        [1, 1],
        [1, 1]
    ]
}

let contadorBajada = 0
let ultimoTiempo = 0
let tiempoBajadaPieza = 1000

dibujarTablero(tableroTetris);
cambioPieza ()
actualizacion ()
