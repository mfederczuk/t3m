# 4.3. Cleanup Branches #

\[[Table of Contents](../index.md#table-of-contents)\]
Up: [4. Topic Branches](../topic-branches.md)  
Previous: [4.2. Refactor Branches](refactor.md)  
Next: [4.4. Meta Branches](meta.md)

Cleanup branches are very simple branches that just exist to clean up the project.  
They may be used to fix internal formatting, remove unused or unnecessary files and to remove files that have been
accidentally tracked in the version control system. (e.g.: `node_modules` directories, generated binary files, ...)

Cleanup branches must not be used to correct grammar or spelling mistakes.  
Fix branches must be used for such things. (See section [4.1. Main Topic Branches](main-topics.md#fix-branches))

They must also not be used to change the internal structure of the project.  
Refactor branches are a better fit, and must be used instead. (See section [4.2. Refactor Branches](refactor.md))

Like the main topic branches, this type of branch must not be used to change meta and community files.

Under no circumstance may cleanup branches change the behavior or public API of the project.

Cleanup branches' distinguishing component must be `cleanup`.
