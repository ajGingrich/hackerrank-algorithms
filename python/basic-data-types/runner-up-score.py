if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    l = list(arr)

    print(max([l[i] for i in range(len(l)) if l[i] != max(l)]))
