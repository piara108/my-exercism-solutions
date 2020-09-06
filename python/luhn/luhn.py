# Luhn

class Luhn:
    def __init__(self, card_num):
        self.card_num = card_num

    def valid(self):
        number_group = self.card_num.split(' ')
        # number_group = str(self.card_num)

        for x in range(0, len(number_group), 2):
            print(x)

        # print(number_group)



# luhn = Luhn('234 567 891 234')
luhn  = Luhn(123456789)
luhn.valid()