if __name__ == '__main__':
    N = int(input())
    l = []

    for line in range(N):
        a = input().split(' ')
        command = a[0]

        if command == 'insert':
            l.insert(int(a[1]), int(a[2]))
        elif command == 'print':
            print(l)
        elif command == 'remove':
            l.remove(int(a[1]))
        elif command == 'append':
            l.append(int(a[1]))
        elif command == 'sort':
            l.sort()
        elif command == 'pop':
            l.pop()
        elif command == 'reverse':
            l.reverse()
