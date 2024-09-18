// Función para dibujar una pieza en una casilla
function dibujarPieza(pieza, fila, columna) {
    if (pieza in simbolosPiezas){
        ctx.font = '32px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = pieza.toUpperCase() === pieza ? '#000' : '#fff'; // Las piezas negras están en mayúsculas
        ctx.fillText(simbolosPiezas[pieza], columna * tamanioCuadrado + tamanioCuadrado / 2, fila * tamanioCuadrado + tamanioCuadrado / 2);
    }
}

// Función para dibujar todas las piezas en el tablero
function inicializarTablero() {
    tablero.forEach ((fila, filaPieza) => {
        fila.forEach ((pieza, columnaPieza) => {
            dibujarPieza (pieza, filaPieza, columnaPieza);
        });
    });
}

function obtencionCoordenadas (evento) {
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

function gestionClick (evento){
    // Obtienes coordenadas del evento x e y
    const { fila, columna } = obtencionCoordenadas (evento);

    // Se comprueba si en la posicion hay pieza valida
    if (!(tablero[fila][columna] in simbolosPiezas)){
        return
    }
}


















document.addEventListener('DOMContentLoaded', () => {
    // Obtener el elemento del canvas y su contexto de dibujo
    const canvas = document.getElementById('chessboard');
    const ctx = canvas.getContext('2d');

    const tamanioTablero = 8;
    const tamanioCuadrado = canvas.width / tamanioTablero;
    
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
                    
    let tablero = tableroInicial;

    // Definir los simbolos de las piezas
    const simbolosPiezas = {
        'r': '♖', 'n': '♘', 'b': '♗', 'q': '♕', 'k': '♔', 'p': '♙',
        'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
    };

    // Función para dibujar el tablero de ajedrez
    function dibujarTablero() {
        for (let fila = 0; fila < tamanioTablero; fila++) {
            for (let columna = 0; columna < tamanioTablero; columna++) {
                ctx.fillStyle = (fila + columna) % 2 === 0 ? '#eee' : '#333';
                ctx.fillRect(columna * tamanioCuadrado, fila * tamanioCuadrado, tamanioCuadrado, tamanioCuadrado);
            }
        }
    }





















    // Inicializar el tablero de ajedrez
    dibujarTablero();
    inicializarTablero();
    

    // Añadir evento de click a una pieza (Infinito)
    //while (true){
      // Prevent the default action on click
    canvas.addEventListener('click', (evento) => {
        evento.preventDefault(); // Prevent default action
        gestionClick(evento);
    });
    //}
});

