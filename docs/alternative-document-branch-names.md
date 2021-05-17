# 8. Alternative Branch Names for Documents #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [7. Undefined Branches](undefined-branches.md)  
Next: [Appendix A. Examples](examples.md)

Even though most of the time **Git** is used to track software, sometimes documents will also be kept under
version control. (like this document)  
In this case, some of the original names of the branches (e.g.: `feature`, `indev`, ...) aren't as fitting.

Because of this, there exists an assortment of alternative names that the owner of the repository may choose to use
instead:

|    Original     |          Alternative          | Defined in Section                                                         |
| :-------------: | :---------------------------: | :------------------------------------------------------------------------- |
| `master`/`main` | `master`/`main` _(no change)_ | [3. Master Branch](master-branch.md)                                       |
|    `feature`    |          `addition`           | [4.1. Main Topic Branches](topic-branches/main-topics.md#feature-branches) |
|    `change`     |          `revision`           | [4.1. Main Topic Branches](topic-branches/main-topics.md#change-branches)  |
|      `fix`      |         `correction`          | [4.1. Main Topic Branches](topic-branches/main-topics.md#fix-branches)     |
|   `refactor`    |         `restructure`         | [4.2. Refactor Branches](topic-branches/refactor.md)                       |
|    `cleanup`    |    `cleanup` _(no change)_    | [4.3. Cleanup Branches](topic-branches/cleanup.md)                         |
|     `meta`      |     `meta` _(no change)_      | [4.4. Meta Branches](topic-branches/meta.md)                               |
|    `staging`    |    `staging` _(no change)_    | [4.5. Staging Branches](topic-branches/staging.md)                         |
|     `indev`     |            `draft`            | [5. Development Branch](development-branch.md)                             |
|    `develop`    |    `develop` _(no change)_    | [5. Development Branch](development-branch.md)                             |
|  `unreleased`   |  `unreleased` _(no change)_   | [6. Parallel Versions Variant](parallel-versions-variant.md)               |

If the owner of the repository chooses to use the alternative names, then all of them must be used.  
Just picking some of the alternative names and not using all of the must not be done.

The [repository of the **t3m** specification] uses these alternative names.

[repository of the **t3m** specification]: https://github.com/mfederczuk/t3m
