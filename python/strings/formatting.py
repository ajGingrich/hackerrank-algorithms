def print_formatted(number):
    width = len(bin(number)[2:])

    for n in range(1, number + 1):
        b = bin(n)[2:]
        o = str(oct(n))[2:]
        h = str(hex(n))[2:].upper()
        print(str(n).rjust(width), str(o).rjust(width), str(h).rjust(width), str(b).rjust(width), end='\n')

if __name__ == '__main__':
    n = int(input())
    print_formatted(n)
