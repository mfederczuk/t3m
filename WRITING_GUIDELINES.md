# Writing & Formatting Guidelines #

This file lists rules and guidelines for the writing and formatting style that
must be followed for the specification of **t3m**.

The script [`check`](check) tries to find and report violations of these rules
and also other some other mistakes.  
If you think that the script reported something that isn't a violation or
mistake, create an issue about it.

## Writing Guidelines ##

* Do not refer to the writer, i.e.: do not use "I", "my", etc.
* Do not refer to the reader, i.e.: do not use "you", "your", etc.
* Do not use "for example", use "e.g.:" instead
* Do not use "that means", use "i.e.:" instead
* Do not use "forbidden" or "not allowed", use "must not" instead
* Do not use "shall" or "shall not", use "must" or "must not" instead
* Do not use "can", "cannot" or "can not", use "may" or "may not" instead
* Only add a link/reference once in each section it appears
  (Navigation links do not count)
* When listing and indeterminate amount of things:
  * Use an ellipsis (three consecutive periods) when the list is inside
    parenthesis
  * Use "etc." when the list is outside of parenthesis
* Info/Specifications for branches should follow the same structure:
  * Description of the branch(es)
  * Usage of the branche(es) / What the branch(es) is/are used for /
    What the branche(es) must do
  * (optional) What the branche(es) are not for /
    What the branch(es) must not do
  * The lifetime of the branch(es)
  * (optional) Attributes of commits on the branch(es)
  * The name of the branche(es)
  * Anything else

## Formatting Guidelines ##

* Do not use backslashes for line breaks, use two consecutive spaces instead.  
  No other trailing whitespace other than that
* No lines just containing whitespace
* No letters or digits after column 80 (footnotes are the exception)
* No lines longer than 180 (footnotes included)
* Do not use equal characters or dashes for headings, only use octothorpes (#)
* Headings are formatted with octothorpes on both sides
* No lines with just one or two dashes
* Horizontal separators must have exactly three dashes
* Regular emphasis is formatted with one asterisk on both sides (*\*like this\**)
* Strong emphasis is formatted with two asterisks on both sides (**\*\*like this\*\***)
* Try to avoid regular emphasis / Use regular emphasis sparingly
* Proper nouns are formatted with strong emphasis.  
  Do not use strong emphasis otherwise
* Explicitly called out names and inline quotes are put into quotes and
  formatted in regular emphasis (quotes are included in emphasis) (_\_"like this"\__)
* Files must only contain printable characters, spaces and newlines
