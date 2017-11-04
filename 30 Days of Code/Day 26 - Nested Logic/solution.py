def make_int_array(arr):
    res = []
    for item in arr:
        res.append(int(item))
    return res

def library_fine(actual, expected):
    # year
    if actual[2] < expected[2]:
        return 0
    if actual[2] > expected[2]:
        return 10000

    # month
    if actual[1] < expected[1]:
        return 0
    if actual[1] > expected[1]:
        return 500 * (actual[1] - expected[1])

    # day
    if actual[0] > expected[0]:
        return 15 * (actual[0] - expected[0])

    return 0

actual = input().split(' ')
expected = input().split(' ')

print(library_fine(make_int_array(actual), make_int_array(expected)))