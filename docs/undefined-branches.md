# 7. Undefined Branches #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [6. Parallel Versions Variant](parallel-versions-variant.md)  
Next: [8. Alternative Branch Names for Documents](alternative-document-branch-names.md)

Undefined branches are branches that have no rules applied to them.  
They MAY be used for any reason, in any way.

A branch is considered to be undefined if it isn't a previously described branch and if one of the following cases
applies:

* the branch name starts with one of the following character strings:
  * `_`
  * `.`
  * `0`
  * `aid`
  * `assist`
  * `demo`
  * `help`
  * `local`
  * `personal`
  * `rewrite`
  * `serve`
  * `temp`
  * `test`
  * `tmp`
  * `user`
  * `util`
  * `quack`
* the branch is a local branch that will never be pushed to a remote
* the branch is pushed to a remote where no other person is expected to push or pull from that remote
  (e.g.: a private repository, a company-private repository where only one person works on, ...)
