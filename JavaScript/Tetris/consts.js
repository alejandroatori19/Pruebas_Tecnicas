export const TAMANO_BLOQUE = 20
export const ANCHURA_TABLERO = 10
export const ALTURA_TABLERO = 20        //34

export const MOVIMIENTOS = {
  IZQUIERDA: 'ArrowLeft',
  ABAJO: 'ArrowDown',
  DERECHA: 'ArrowRight',
  ARRIBA: 'ArrowUp'
}

export const PIEZAS = [
  [ // la pieza amarilla
    [1, 1],
    [1, 1]
  ],

  [
    [1, 1, 1, 1]
  ],

  [ // es la pieza lila
    [0, 1, 0],
    [1, 1, 1]
  ],

  [ // la pieza verde
    [1, 1, 0],
    [0, 1, 1]
  ],

  [
    [0, 1, 1],
    [1, 1, 0]
  ],

  [
    [1, 0],
    [1, 0],
    [1, 1]
  ],

  [
    [0, 1],
    [0, 1],
    [1, 1]
  ]
]