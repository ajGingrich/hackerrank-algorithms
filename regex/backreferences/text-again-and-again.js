var Regex_Pattern = /^([a-z])(\w)(\s)(\W)(\d)(\D)([A-Z])([a-zA-Z])([aeiouAEIOU])(\S)\1\2\3\4\5\6\7\8\9\10$/;

//better --> '^([a-z]\w\s\W\d\D[A-Z][a-z,A-Z][aieouAEIOU]\S)\1$

// \group_number
// This tool (\1 references the first capturing group) matches the same text as previously matched by the capturing group.
// (\d)\1: It can match 00, 11, 22, 33, 44, 55, 66, 77, 88 or 99.
