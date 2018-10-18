def is_matched(expression):
    stack = []
    dict = {'(':')', '[':']', '{':'}'}

    for c in expression:
        if dict.get(c):
            stack.append(dict[c])
        else:
            if len(stack) == 0 or c != stack[len(stack) - 1]:
                return False
            stack.pop()
    return len(stack) == 0