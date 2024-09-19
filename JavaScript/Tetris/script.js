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

    // Se dibuja la pieza que se esta tratando
    const dimensionesPieza = pieza.dimensiones;

    for (let i = 0; i < dimensionesPieza.length; i++){
        for (let j = 0; j < dimensionesPieza[0].length; j++){
            contexto.fillStyle = pieza.color;
            contexto.fillRect(pieza.posicion.x + i, pieza.posicion.y + j, 1, 1);
        }
    }
    console.log ("next")
}

function cambioPieza() {


}

function moverPieza() {

}

// Gestion de las teclas pulsadas
document.addEventListener('keydown', event => {
    // Izquierda (Flecha izquierda)
    if (event.key === MOVIMIENTOS.IZQUIERDA) {
        console.log ("IZQUIERDA");
        pieza.posicion.x--;
    }

    // Derecha (Flecha derecha)
    if (event.key === MOVIMIENTOS.DERECHA) {
        pieza.posicion.x++;
        console.log ("DERECHA");
    }

    // Abajo (Flecha abajo)
    if (event.key === MOVIMIENTOS.ABAJO) {
        pieza.posicion.y++;
        console.log ("ABAJO");
    }

    if (event.key === MOVIMIENTOS.ARRIBA) {
        pieza.posicion.y--;
        console.log ("ARRIBA");
    }
})


function actualizacion (){
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
/*
const pieza = {
    posicion: { x: 5, y: 15 },
    color: 'yellow',
    dimensiones: [
        [1, 1, 1, 1]
    ]
}
*/
dibujarTablero(tableroTetris);

actualizacion ()