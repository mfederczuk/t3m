# 5. Development Branch #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [4. Topic Branches](topic-branches.md)  
Next: [6. Parallel Versions Variant](parallel-versions-variant.md)

The development branch is a combination of all main topic branches, the refactor branches and the cleanup branches.
(See sections [4.1. Main Topic Branches](topic-branches/main-topics.md),
[4.2. Refactor Branches](topic-branches/refactor.md) and
[4.3. Cleanup Branches](topic-branches/cleanup.md))  
It MUST only be used when implementing multiple features, changes, fixes, refactors or cleanups and where creating
an individual branch for each of these topics wouldn't be appropriate.
(e.g.: when all of these topic branches would just contain one commit)

This branches' lifespan is just like topic branches: it diverges from the master branch and merges back into
the master branch, where it MUST be deleted afterwards. (See section [3. Master Branch](master-branch.md))  
Thanks to dark magic, this branch may be revived as many times as is needed.  
That means that the branch MAY be created and deleted multiple times, but at any given time there MUST never exist more
than one instance of it.

The development branch SHOULD only be created and merged when no other main topic branches have been merged in
the current development phase, but this is not a necessity.
(See section [4.5.1. Development Phases](topic-branches/development-phases.md))

It is RECOMMENDED to only create and work on the development branch if only one person is currently working on
the project, since a bulk of the project's work will be done on the branch.

Just like on topic branches, commits on the development branch MAY be either regular commits or merge commits and the
commits on the branch MAY be moved, removed, amended or altered in any other way, as long as the branch is
not merged yet.

When it is the first time in the current development phase that the development branch is created,
then the first (and maybe only) component of the branch name MUST be `indev`.
Otherwise the first component MUST be `develop` or `dev`.  
The name MAY also contain additional components that are chosen by the repository owner or, if the owner allows it,
by the creator of this instance of the development branch.  
These additional components, and the complete name in its entirety, MUST still comply with the rules laid out in
section [2. Branches Overall](branches-overall.md).  
Note that, as previously described, there MUST never be more than one instance of the development branch,
regardless of the name that the branch uses.

When the development branch exists, any main topic branches MUST NOT exist, and
when at least one main topic branch exists, the development branch MUST NOT exist.
