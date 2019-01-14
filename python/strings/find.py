def count_substring(string, sub_string):
    return len([string[i] for i in range(len(string)-len(sub_string) + 1) if string[i:len(sub_string)+i] == sub_string])

## done myself but came up with same answer as discussions :thinking_face:
