# 1. Introduction #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [Top](index.md)  
Next: [2. Branches Overall](branches-overall.md)

**t3m** is a **Git** branching system that was based off of and inspired by other popular branching models and systems
like [Vincent Driessen's "A successful Git branching model"] (**git-flow**) and **[GitHub Flow]**.

Officially, the name _"t3m"_ has no meaning associated with it.  
In the early planning phases of **t3m**, the system was supposed to be made up of just three types of topic branches and
one master branch, which is where the name was derived from. (**t**opic branches x**3** & one **m**aster)  
Since then, the system was expanded but the initial name was not dropped and has lost its meaning.

[Vincent Driessen's "A successful Git branching model"]: https://nvie.com/posts/a-successful-git-branching-model "A successful Git branching model &raquo; nvie.com"
[GitHub Flow]: https://guides.github.com/introduction/flow/ "Understanding the GitHub flow &middot; GitHub Guides"

## About the Contents of this Document ##

The following topics and concepts of **Git** need to be known beforehand to fully understand everything in
this document as these terms *won't* be explained in any sections:
(the amount of exclamation marks next to the term signifies how important the topic is to this document)

* commits (!!!)
  * merge commits (!!)
  * amending commits (!)
* branches (!!!)
  * merging (!!!)
    * fast-forwarding (!!)
  * rebasing (!)
* cherry-picking (!)
* remotes (!)
  * remote HEAD branch (!)

This document specifies how branches in a **Git** repository must be designed, how they must be used, and how the
development on branches must effect the project and the repository.  
This includes, but is not limited to, how branches are named, what kind of development must be done on them, from which
other branches they diverge from and to which other branches they merge into.

The specification does *not* include which versioning system must to be used for the project that is tracked in the
repository. (though it is recommended to use **[Semantic Versioning v2.0.0]** or a close derivative of it)  
The design of commits, the type, structure or implementation details of the project and who may work on the project are
also not specified in this document and are free to decide.

[Semantic Versioning v2.0.0]: https://semver.org/spec/v2.0.0.html "Semantic Versioning 2.0.0"
