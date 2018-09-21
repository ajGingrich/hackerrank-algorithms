<?php

$Regex_Pattern = '/(?<![aeiuoAEIOU])./';

<!-- (?<!regex_2)regex_1 -->

<!-- The negative lookbehind (?<!) asserts regex_1 not to be immediately preceded by regex_2.  -->
<!-- Lookbehind is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.  -->

<!-- JavaScript do not support lookbehind. -->

?>
