# Armstrong Numbers

def is_armstrong_number(number):
    number_array = str(number)
    length = len(number_array)
    count = 0

    for num in number_array:
        count += (int(num)**length)

    return count == number
