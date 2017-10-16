n = int(input())

def make_array(index, string):
    res = ""
    if index == 'even':
        for c in range(0, len(string), 2):
            res += string[c]
    elif index == 'odd':
        for c in range(1, len(string), 2):
            res += string[c]
    return res

for i in range(n):
    word = input()
    even = make_array('even', word)
    odd = make_array('odd', word)
    print(even + " " + odd)




