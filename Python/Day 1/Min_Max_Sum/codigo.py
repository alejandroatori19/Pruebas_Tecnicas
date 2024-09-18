import math
import os
import random
import re
import sys

def generarLista (aleatorio = False):
    if aleatorio:
        return [random.randint(1, 100) for _ in range(5)]
    else:
        return [1, 2, 3, 4, 5]
    

def miniMaxSum(arr):
    listaSumas = [0, 0, 0, 0, 0]
    for i in range (len (arr)):
        for j in range (len (listaSumas)):
            if j != i:
                listaSumas[j] += arr[i]

    print ("Sumas:", listaSumas)

    maximo = max (listaSumas)
    minimo = min (listaSumas)

    print ("Maximo valor:", maximo)
    print ("Minimo valor:", minimo)

    return
    
if __name__ == '__main__':

    lista = generarLista ()

    print ("Lista Inicial:", lista)

    miniMaxSum(lista)
