# 4. Topic Branches #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [3. Master Branch](master-branch.md)  
Next: [5. Development Branch](development-branch.md)

Topic branches is a category of branches that track the development process of a single topic, like a new feature or
a bug fix.

These branches have a relatively short lifespan.  
They MUST diverge from the master branch, MUST merge back into the master branch once the topic is finished and MUST be
deleted afterwards. (See section [3. Master Branch](master-branch.md))

A topic branch MUST only be merged into the master branch when no commits have been added on the master branch since
the topic branch has diverged from the master branch.  
This may be achieved by rebasing the topic branch onto the master branch after a different branch was merged into
the master branch.

At any given time, there SHOULD be no more than one person working on the same topic branch to avoid
mismatched histories, though this is not strictly defined.

Commits on these branches MAY be normal commits or merge commits.  
As long as a topic branch is not merged, commits on it MAY be moved, removed, amended or altered in any other way.

The names of topic branches MUST contain at least 2 components.  
The first component of the branch name MUST be the _"distinguishing component"_, which determines the type of
the topic branch.  
The rest of the name after the distinguishing component is chosen by the repository owner or, if the owner allows it,
by the branch creator.

All types of topic branches are defined in the following subsections:

* [4.1. Main Topic Branches](topic-branches/main-topics.md)
* [4.2. Refactor Branches](topic-branches/refactor.md)
* [4.3. Cleanup Branches](topic-branches/cleanup.md)
* [4.4. Meta Branches](topic-branches/meta.md)
* [4.5. Staging Branches](topic-branches/staging.md)
