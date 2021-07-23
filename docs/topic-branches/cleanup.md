# 4.3. Cleanup Branches #

\[[Table of Contents](../index.md#table-of-contents)\]
Up: [4. Topic Branches](../topic-branches.md)  
Previous: [4.2. Refactor Branches](refactor.md)  
Next: [4.4. Meta Branches](meta.md)

Cleanup branches are very simple branches that just exist to clean up the project.  
They MAY be used to fix internal formatting, remove unused or unnecessary files and to remove files that have been
accidentally tracked in the version control system. (e.g.: `node_modules` directories, generated binary files, ...)

Cleanup branches MUST NOT be used to correct grammar or spelling mistakes.  
Fix branches MUST be used for such things. (See section [4.1. Main Topic Branches](main-topics.md#fix-branches))

They also MUST NOT be used to change the internal structure of the project.  
Refactor branches are a better fit, and MUST be used instead. (See section [4.2. Refactor Branches](refactor.md))

Like the main topic branches, this type of branch MUST NOT be used to change meta and community files.

Cleanup branches MUST NOT change the behavior or public API of the project.

Their distinguishing component MUST be `cleanup`.
