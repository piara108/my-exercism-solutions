# Word Count

import re

def count_words(sentence):
    scrub_sentence = re.sub(r'[^\w\s+_+]', ' ', sentence.lower()).split()
    word_count = {}

    for word in scrub_sentence:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1

    return word_count

# print(count_words('Hello, where, are! we/ going? Hello'))
# print(count_words("word"))
# print(count_words("one fish two fish red fish blue fish"))
print(count_words("one,two,three"))
# count_words('Hello, where, are! we/ going?')
