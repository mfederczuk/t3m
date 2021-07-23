# 4.2. Refactor Branches #

\[[Table of Contents](../index.md#table-of-contents)\]
Up: [4. Topic Branches](../topic-branches.md)  
Previous: [4.1. Main Topic Branches](main-topics.md)  
Next: [4.3. Cleanup Branches](cleanup.md)

Refactor branches are for changing and improving the internal structure of the project.  
They MAY be used to rewrite old and hard to maintain systems or migrate from an old and/or deprecated library.

Refactor branches MUST NOT be used to just fix internal formatting or remove unnecessary files.
Cleanup branches, which are explained in the next section, [4.3. Cleanup Branches](cleanup.md), MUST be used for that.  
They also MUST NOT change the behavior or public API of the project.
If this is needed, a change branch MUST be used instead.
(See section [4.1. Main Topic Branches](main-topics.md#change-branches))

Refactor branches MUST use `refactor` as their distinguishing component.
