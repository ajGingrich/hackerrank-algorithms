def print_formatted(number):
    width = len(format(number, "b"))
    for n in range(1, number + 1):
        b = format(n, "b")
        print(repr(n).rjust(width), repr(n).rjust(width), repr(n).rjust(width), repr(b).rjust(width), end='\n')

if __name__ == '__main__':
    n = int(input())
    print_formatted(n)
