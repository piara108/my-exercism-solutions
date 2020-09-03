# Reverse String

def reverse(text):
    return ''.join([x for x in text[::-1]])

print(reverse('text'))
