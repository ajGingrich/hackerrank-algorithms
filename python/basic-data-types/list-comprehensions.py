if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    # nice way to read input at once
    # x, y, z, n = (int(input()) for _ in range(4))

    # standard way
    # ar = []
    # p = 0
    #
    # for i in range(x + 1):
    #     for j in range(y + 1):
    #         for k in range(z + 1):
    #             if i+j+k != n:
    #                 ar.append([])
    #                 ar[p] = [i , j, k]
    #                 p+=1
    #
    # print(ar)

    # with list comprehensions, doing samething.
    print([[i,j,k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if ((i + j + k) != n )])
