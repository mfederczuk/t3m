# 4.5. Staging Branches #

\[[Table of Contents](../index.md#table-of-contents)\]
Up: [4. Topic Branches](../topic-branches.md)  
Previous: [4.4. Meta Branches](meta.md)  
Next: [5. Development Branch](../development-branch.md)

Staging branches are used to prepare for a new release of the project.  
Commits on these branches must only update project dependencies (in a backwards compatible manor), update version names,
version codes, dates, etc.

The names of staging branches are the first exception to the branch naming rules, which have been laid out in
section [2. Branches Overall](../branches-overall.md).

Like all other topic branches, staging branches must have the distinguishing component, which must be `staging`.  
Unlike other topic branches, staging branches' names must not contain more than 2 components.  
The rest of the name must be the name of the version that is planned to be released next.

For example, a staging branch that prepares to release version `1.2.5-rc01`, would be called `staging/1.2.5-rc01`.

The following paragraph uses a term which is defined in the next subsection:

* [4.5.1. Development Phases](development-phases.md)

Staging Branches must only be merged if at least one of the main topic branches or the development branch
has been merged into the master branch in the current development phase.
(See sections [3. Master Branch](../master-branch.md),
[4.1. Main Topic Branches](main-topics.md) and
[5. Development Branch](../development-branch.md))  
If only refactor branches, cleanup branches or meta branches have been merged, staging branches must not be merged.
(See sections [4.2. Refactor Branches](refactor.md),
[4.3. Cleanup Branches](cleanup.md) and
[4.4. Meta Branches](meta.md))

When a staging branch is merged into the master branch, the resulting merge commit must be tagged with a release tag.
