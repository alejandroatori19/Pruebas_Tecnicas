export const TAMANO_BLOQUE = 20
export const ANCHURA_TABLERO = 25
export const ALTURA_TABLERO = 35

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