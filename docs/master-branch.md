# 3. Master Branch #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [2. Branches Overall](branches-overall.md)  
Next: [4. Topic Branches](topic-branches.md)

The master branch is the main branch of the repository.  
Every commit on this branch (not including the initial commit of a history) SHOULD contain a presentable and functional
state of the project.

The master branch MUST be the HEAD branch of all remotes of the repository.

A _"release commit"_ is a merge commit that is on the master branch, that is produced by merging a staging branch
and that has one or more _"release tags"_ pointing to it.
Staging branches are explained in section [4.5. Staging Branches](topic-branches/staging.md).  
A release tag is any tag that name starts with the lowercase letter `v`, followed by a valid version name of
the versioning system that the repository uses.  
Once a release tag is created, a new version with the same version name as the tag has encoded in its name MUST be
published.

As stated in the previous section, [2. Branches Overall](branches-overall.md), the master branch is the only branch
which lifespan is different than all other branches.  
Since the branch never diverged from any other branch, it also MUST never be merged into any other branch, which means
that the lifespan of the master branch must be endless and it MUST never be deleted.

The master branch MUST only contain merge commits. (the initial commit of a history is the exception)  
Fast-forwarding MUST NOT be used when merging into the master branch, even when the branch that is getting merged only
contains a single commit.

Existing history of the branch MUST NOT be altered.  
That means that any already existing commits on the branch MUST NOT be moved, removed, amended or altered in any way -
once a commit has been made on the master branch, it is final and immutable.  
There is only a single exception to this rule: If the author information (name or email address) of the commit is
outdated, the commit MAY be amended to update the author information.  
Even a small change like this might lead to the history getting completely messed up.
All collaborators should be informed that such a change is expected to happen.

The branch MUST be named either `master` or `main`.  
Which one of these names is used MUST be decided by the repository owner.  
The name MAY be changed at any time, but it SHOULD NOT be switched once it is chosen.  
Even when the branch is using `main` as the name, this document will still refer to it as the _"master branch"_.
