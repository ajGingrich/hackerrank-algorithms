var Regex_Pattern = /(ok){3,}/;

// Parenthesis ( ) around a regular expression can group that part of regex together. This allows us to apply different quantifiers to that group.
//
// These parenthesis also create a numbered capturing. It stores the part of string matched by the part of regex inside parentheses.
//
// These numbered capturing can be used for backreferences. ( We shall learn about it later )

// ()
// (?: ) can be used to create a non-capturing group. It is useful if we do not need the group to capture its match.
