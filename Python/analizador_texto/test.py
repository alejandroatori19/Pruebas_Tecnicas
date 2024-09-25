# Importacion de librerías
from langdetect import detect, detect_langs
import analyzer_text_library

path = r"C:\Users\Usuario\Desktop\Pruebas_Tecnicas\Python\analizador_texto\texto.txt"

isFile, fileContent = analyzer_text_library.load_text_from_file (path)

if isFile:
    language = detect(fileContent)
    print("Detected language:", language)

    # Detect possible languages and their probabilities
    languages = detect_langs(fileContent)
    print("Possible languages with probabilities:", languages)