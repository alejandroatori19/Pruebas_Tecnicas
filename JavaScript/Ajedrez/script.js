// Función para dibujar una pieza en una casilla
function dibujarPieza (pieza, fila, columna) {
    if (pieza in listaPiezas){
        ctx.font = '32px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = pieza.toUpperCase() === pieza ? '#fff' : '#05d'; // Las piezas negras están en mayúsculas
        ctx.fillText(listaPiezas[pieza], columna * tamanioCuadrado + tamanioCuadrado / 2, fila * tamanioCuadrado + tamanioCuadrado / 2);
    }
}

// Funcion de eliminar una pieza de su casilla
function eliminarPieza (fila, columna){
    tablero[fila][columna] = 0
}

// Función para dibujar el tablero
function dibujarTablero() {
    for (let fila = 0; fila < tamanioTablero; fila++){
        for (let columna = 0; columna < tamanioTablero; columna++){
            ctx.fillStyle = (fila + columna) % 2 === 0 ? '#eee' : '#333';
            ctx.fillRect(columna * tamanioCuadrado, fila * tamanioCuadrado, tamanioCuadrado, tamanioCuadrado);
            if (tablero[fila][columna] in listaPiezas){
                dibujarPieza (tablero[fila][columna], fila, columna);
            }
        }
    }
}

// Funcion de extracción de coordenadas en el click
function obtencionCoordenadasDesdeClick (evento) {
    // Obtención de coordenadas de click
    const tablero = canvas.getBoundingClientRect();
    const coordenadaX = evento.clientX - tablero.left;
    const coordenadaY = evento.clientY - tablero.top;

    // Conversion a casillas entre 0 y 7 (8x8 el tablero)
    const columna = Math.floor(coordenadaX / tamanioCuadrado);
    const fila = Math.floor(coordenadaY / tamanioCuadrado);

    // Devuelve la posición
    return { fila, columna };
}

function comprobacionesRequisitosMinimos (pieza){
    // Se comprueba si en la posicion hay pieza valida (Si no, no hace nada)
    if (!(pieza in listaPiezas)){
        return false;
    }
    
    // Si es 1 entonces es blancas por tanto debe ser mayuscula
    if  (usuarioMovimiento == 1 && pieza.toLowerCase() == pieza){
        return false;
    } 

    if (usuarioMovimiento == 2 && pieza.toUpperCase () == pieza){
        return false;
    }

    return true;
}

moverFicha

// Función que marca las casillas a las que se puede mover
function marcarCasillasDisponiblesMovimiento (pieza, fila, columna){
    movimientos = movimientoPiezas[pieza];

}

// Método general
function movimientoPieza (evento){
    // Obtienes coordenadas del evento x e y
    const { fila, columna } = obtencionCoordenadasDesdeClick (evento);
    const pieza = tablero[fila][columna];

    if (comprobacionesRequisitosMinimos (pieza, fila, columna)){
        console.log ("Pieza valida");
    
        // Marcar las casillas que tiene disponibles
        marcarCasillasDisponiblesMovimiento (pieza, fila, columna);
    
        
        if (usuarioMovimiento == 1){
            usuarioMovimiento = 2;
        }
        else{
            usuarioMovimiento = 1;
        }
    }



    

}




/*
 * INICIALIZACION DEL MAIN
 */

// Obtener el elemento del canvas y su contexto de dibujo
const canvas = document.getElementById('chessboard');
const ctx = canvas.getContext('2d');

// Definicion de tamaños de casilla del tablero
const tamanioTablero = 8;
const tamanioCuadrado = canvas.width / tamanioTablero;
    
// Tablero inicial
const tableroInicial = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];
        
// Generacion de estado de tablero actual
let tablero = tableroInicial;

// Definicion de piezas con su simbolo
const listaPiezas = {
    'r': '♖', 
    'n': '♘', 
    'b': '♗', 
    'q': '♕', 
    'k': '♔', 
    'p': '♙',
    'R': '♖', 
    'N': '♘', 
    'B': '♗', 
    'Q': '♕', 
    'K': '♔', 
    'P': '♙'
};

// Definicion de movimientos de piezas (Por códigos)
/*
 * 1 -> Linea recta (solo delante)
 * 2
 * 3 -> Diagonal
 * 4 -> En L
 */
const movimientoPiezas = {
    'p': 1, 
    'r': 1                        
};

// Indica el que mueve la pieza (1 -> Blanco, 2-> Negro)
let usuarioMovimiento = 1;
let fichaSeleccionada = false;

// Inicializar el tablero de ajedrez
dibujarTablero();
    

// Añadir evento de click a una pieza (Infinito)
//while (true){
      // Prevent the default action on click
canvas.addEventListener('click', movimientoPieza);
   


