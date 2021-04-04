# 2. Branches Overall #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [1. Introduction](introduction.md)

The _"lifespan"_ of a branch is the period from the point when the branch is created to the point when it is deleted.  
Branches must always be merged back into the branch they originally diverged from.  
After a branch is merged, it must be deleted, ending the lifespan of it.

Branch names consist of one or more _"components"_ that are separated by a single forward slash (`/`).  
Branch names must comply with the following rules:

* The entire name must not contain more than 8 components
* Each component must be at least 2 characters long and must not be longer than 32 characters
* The entire name (including component separators) must not be longer than 60 characters
* Each component must only consist of **ASCII** lowercase letters, digits and dashes (`[a-z0-9-]`)
* Each component must not have leading or trailing dashes
* Each component must not include a substring of two or more consecutive dashes
* The name should be free of spelling errors, only consist of English words, single letters,
  shortened English words (e.g.: `doc`, `tmp`, `dir`, ...) or proper nouns in any language
  (these should also be free of spelling errors)

Some branch types are exempt from some of these rules or have more restrictions.  
All of these exceptions will be explicitly pointed out.
