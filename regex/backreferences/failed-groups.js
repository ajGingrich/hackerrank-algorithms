var Regex_Pattern = /^\d\d(-?)\d\d\1\d\d\1\d\d$/;

// Backreference to a capturing group that match nothing is different from backreference to a capturing group that did not participate in the match at all.

// Here, b? is optional and matches nothing.
// Thus, (b?) is successfully matched and capture nothing.
// o is matched with o and \1 successfully matches the nothing captured by the group.

// In most regex flavors (excluding JavaScript), (b)?o\1 fails to match o.
// Here, (b) fails to match at all. Since, the whole group is optional the regex engine does proceed to match o.
// The regex engine now arrives at \1 which references a group that did not participate in the match attempt at all.
// Thus, the backreference fails to match at all.
