import math


def is_prime(n):
    if n == 1:
        return 'Not prime'
    if n == 2:
        return 'Prime'
    if n % 2 == 0:
        return 'Not prime'

    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return 'Not prime'
    return 'Prime'

length = int(input())

for j in range(length):
    num = int(input())
    print(is_prime(num))