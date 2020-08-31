# Hamming

def distance(strand_a, strand_b):
    strand_length = len(strand_a)
    hamming_distance = 0

    if len(strand_a) != len(strand_b): raise ValueError('Strand lengths are not equal')
    
    for x in range(strand_length):
        if strand_a[x] != strand_b[x]:
            hamming_distance += 1
    
    return hamming_distance
