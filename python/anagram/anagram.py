# Anagram

def find_anagrams(word, candidates):
    anagrams = []

    for term in candidates:
        word_lower, term_lower = word.lower(), term.lower()

        if word_lower != term_lower and sorted(word_lower) == sorted(term_lower):
            anagrams.append(term)

    return anagrams
