if __name__ == '__main__':
    n = int(input())

    for i in range(n):
        print(i**2)

# list comprehension
[print(i**2) for i in range(n)]

# OR
print(*[num**2 for num in range(n)], sep='\n')
