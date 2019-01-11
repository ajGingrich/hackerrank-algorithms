if __name__ == '__main__':
    d = {}
    res = []
    scores = []

    for _ in range(int(input())):
        name = input()
        score = float(input())
        scores.append(score)

        d[name] = score

    val = sorted(set(scores))[1]

    [res.append(n) for n,s in d.items() if d[n] == val]
    res.sort()
    [print(name) for name in res]
