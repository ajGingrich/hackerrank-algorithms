def swap_case(s):
    ## try to use list comprehensions next..
    res = ""
    for c in s:
        # ternary in python
        res += c.lower() if c.isupper() else c.upper()
    return res

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)
