var Regex_Pattern = /(.)(?!\1)/g;

// regex_1(?1regex_2)

// The negative lookahead (?!) asserts regex_1 not to be immediately followed by regex_2. Lookahead is excluded from the match (do not consume matches of regex_2),
// but only assert whether a match is possible or not.
