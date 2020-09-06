# Protein Translation

def proteins(strand):
    codons = {
        'AUG': 'Methionine',
        'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
        'UUA': 'Leucine', 'UUG': 'Leucine',
        'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
        'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
        'UGU': 'Cysteine', 'UGC': 'Cysteine',
        'UGG': 'Tryptophan',
        'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP',
    }

    chunks = [strand[x:x+3] for x in range(0, len(strand), 3)]
    proteins = []

    for prtn in chunks:
        if codons[prtn] == 'STOP':
            return proteins
        else:
            proteins.append(codons[prtn])
    
    return proteins
