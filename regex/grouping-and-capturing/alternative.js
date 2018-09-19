var Regex_Pattern = /^(Mr|Mrs|Dr|Er)\.([a-z]|[A-Z])+$/;

// Alternations, denoted by the | character, match a single item out of several possible items separated by the vertical bar.
// When used inside a character class, it will match characters; when used inside a group, it will match entire expressions (i.e., everything to the left or everything to the right of the vertical bar).
// We must use parentheses to limit the use of alternations.

// (Bob|Kevin|Stuart) will match either Bob or Kevin or Stuart.
// ([a-f]|[A-F]) will match any of the following characters: a, b, c, d, e, f, A, B, C, D, E, or F.
