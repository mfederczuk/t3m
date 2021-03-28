# 4.2. Refactor Branches #

\[[Table of Contents](../index.md#table-of-contents)\]
Up: [4. Topic Branches](../topic-branches.md)  
Previous: [4.1. Main Topic Branches](main-topics.md)

Refactor branches are for changing and improving the internal structure of the project.  
They may be used to rewrite old and hard to maintain systems or migrate from an old and/or deprecated library.

Refactor branches must not be used to just fix internal formatting or remove unnecessary files.  
They must also not change the behavior or public API of the project.
If this is needed, a change branch must be used instead.
(See section [4.1. Main Topic Branches](main-topics.md#change-branches))

Refactor branches must use `refactor` as their distinguishing component.
