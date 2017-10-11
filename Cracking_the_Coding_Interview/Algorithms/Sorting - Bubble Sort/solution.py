n = int(input().strip())
a = list(map(int, input().strip().split(' ')))

totalSwaps = 0

for i in range(n):
    # number of swap this iteration
    numSwaps = 0
    for j in range(n-1):
        if a[j] > a[j+1]:
            temp = a[j+1]
            a[j+1] = a[j]
            a[j] = temp
            numSwaps += 1
            totalSwaps += 1
    if numSwaps == 0: # the array is sorted
        break

print('Array is sorted in ' + str(totalSwaps) + ' swaps.')
print('First Element: ' + str(a[0]))
print('Last Element: ' + str(a[len(a)-1]))