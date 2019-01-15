def has_char(i, c):
    if d[i] is 'alpha':
        return c.isalnum()
    elif d[i] is 'alphan':
        return c.isalpha()
    elif d[i] is 'digits':
        return c.isdigit()
    elif d[i] is 'lower':
        return c.islower()
    elif d[i] is 'upper':
        return c.isupper()

    return False


if __name__ == '__main__':
    s = input()
    d = ['alpha', 'alphan', 'digits', 'lower', 'upper']

    for i in range(5):
        res = False
        for c in s:
            res = has_char(i, c)
            if res is True:
                break

        print('True' if res else 'False')
