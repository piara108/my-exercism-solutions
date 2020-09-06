# RNA Transcription

def to_rna(dna_strand):
    nucleotides = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }

    return ''.join([nucleotides[nt] for nt in dna_strand ])
