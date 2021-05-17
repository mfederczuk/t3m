# Appendix A. Examples #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [8. Alternative Branch Names for Documents](alternative-document-branch-names.md)  
Next: [Appendix A. Creative Commons Attribution-ShareAlike 4.0 International](cc-by-sa-4.0.md)

This section describes examples of both the regular **t3m** system and the **t3m Parallel Versions** system.
(See section [6. Parallel Versions Variant](parallel-versions-variant.md))  
The examples are in form of **Git** networks of theoretical repositories in a similar style of
the `git log --all --oneline --graph` command.

## Example A: **t3m** regular ##

The example here is a note-keeping app.

```txt
* (HEAD -> master, tag: v2.0) Merge in labels feature
|\
| * (feature/labels)
|/
*
|\
| * (refactor/)
|/
* Merge in checklists feature
*
|\
| * (feature/checklists)
|/
* (tag: v2.0) Merge in share button
|\
| * (feature/share) Add share button to note details screen
|/
* (tag: v1.0-indev02) Merge in note deletion feature
|\
| * (feature/delete)
| * Enter selection mode on long press note item
|/
*
* (tag: v1.0-indev01) Merge in TODO
|\
| * (indev)
| * Add note details screen
| * Add note list screen
|/
* Initial Commit
```

## Example B: **t3m Parallel** ##

```txt
* (v1-master)
| * (v2-master)
| | * (v3-master)
| |/
| *
|/
*
|
* Initial Commit
```
