import os

# -------------------------------------

def load_text_from_file (pathTextFile):
    if not os.path.exists (pathTextFile):
        return False, None

    # Detect the language of a single text
    with open (pathTextFile, 'r') as file:
        text = file.read ()

    return True, text

# -------------------------------------

def analyze_text (text, analyzerModel):
    results = None
    return results