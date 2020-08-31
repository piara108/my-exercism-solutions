# Raindrops

def convert(number):
    droplets = { 3: 'Pling', 5: 'Plang', 7: 'Plong'}
    drops = ''

    for x in [3, 5, 7]:
        if number % x == 0:
            drops += droplets[x]

    return drops if drops else str(number)
