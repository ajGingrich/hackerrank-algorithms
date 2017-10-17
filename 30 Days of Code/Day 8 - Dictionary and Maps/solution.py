n = int(input())
dict = {}

for i in range(1, n+1):
    data = input().split(' ')
    dict[data[0]] = data[1]

a = input()
while a:
    if a in dict:
        print(a + '=' + dict.get(a))
    else:
        print('Not found')
    try:
        a = input()
    except:
        a = False



