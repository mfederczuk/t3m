# 2. Branches Overall #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [1. Introduction](introduction.md)  
Next: [3. Master Branch](master-branch.md)

The _"lifespan"_ of a branch is the period from the point when the branch is created to the point when it is deleted.  
Branches MUST always be merged back into the branch they originally diverged from.  
After a branch is merged, it MUST be deleted, ending the lifespan of it.  
The only branch where these rules do not apply is the master branch, which is explained in
the next section [3. Master Branch](master-branch.md).

Branch names consist of one or more _"components"_ that are separated by a single forward slash (`/`).  
Branch names MUST comply with the following rules:

* The entire name MUST NOT contain more than 8 components
* Each component MUST be at least 2 characters long and MUST NOT be longer than 32 characters
* The entire name (including component separators) MUST NOT be longer than 60 characters
* Each component MUST only consist of **ASCII** lowercase letters, digits and dashes (`[a-z0-9-]`)
* Each component MUST NOT have leading or trailing dashes
* Each component MUST NOT include a substring of two or more consecutive dashes
* The name SHOULD be free of spelling errors, only consist of English words, single letters,
  shortened English words (e.g.: `doc`, `tmp`, `dir`, ...) or proper nouns in any language
  (these SHOULD also be free of spelling errors)

Some branch types are exempt from some of these rules or have more restrictions.  
All of these exceptions will be explicitly pointed out.
