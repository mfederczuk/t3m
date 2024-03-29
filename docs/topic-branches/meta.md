# 4.4. Meta Branches #

\[[Table of Contents](../index.md#table-of-contents)\]
Up: [4. Topic Branches](../topic-branches.md)  
Previous: [4.3. Cleanup Branches](cleanup.md)  
Next: [4.5. Staging Branches](staging.md)

Meta branches' purpose is to track any additions, changes, fixes or cleanups to meta and community files like
readme files, licenses, issue templates, etc.  
This type MAY also be used for project setup. (Makefiles, `package.json`, ...)

Meta branches MUST NOT change the behavior or public API of the project.

The distinguishing component for all meta branches MUST be `meta`.  
A requirement specific to meta branches: the full name of meta branches MUST NOT be any of the following ones:

* `meta/feature`
* `meta/change`
* `meta/fix`
* `meta/cleanup`

## Combined Meta Branches ##

A combined meta branch is a meta branch that purpose is narrowed down by combining it with the purpose of either one
the main topic branches or cleanup branches.
(See sections [4.1. Main Topic Branches](main-topics.md) and [4.3. Cleanup Branches](cleanup.md))

The function of such a branch is the same as whichever other topic branch type was combined with, but only applied to
meta and community files.

To distinguish a combined meta branch from a regular meta branch, and to determine with which other topic branch type
the combined meta branch was combined with, the name of the branch MUST contain an additional component after
the distinguishing component and before the user-chosen components.
(bringing the least amount of components a combined meta branches' name MUST contain up to 3)  
This additional component MUST be the same component as the topic branch type, that was combined with, uses.
(i.e.: the names of combined meta branches MUST start with either `meta/feature/`, `meta/change/`, `meta/fix/` or
`meta/cleanup/`)
