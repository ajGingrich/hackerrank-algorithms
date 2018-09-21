<?php

$Regex_Pattern = '/^(\2tic|(tac))+$/';
<!-- NOTE - Forward reference is supported by JGsoft, .NET, Java, Perl, PCRE, PHP, Delphi and Ruby regex flavors. -->

// Forward reference creates a back reference to a regex that would appear later.
// Forward references are only useful if they're inside a repeated group.
// Then there may arise a case in which the regex engine evaluates the backreference after the group has been matched already.
?>
