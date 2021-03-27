# 6. Parallel Versions Variant #

\[[Table of Contents](index.md#table-of-contents)\]
Up: [Top](index.md)  
Previous: [5. Development Branch](development-branch.md)

The **t3m Parallel Versions** system (or just **t3m Parallel**) is a variant of the regular **t3m** system.  
The repository owner must choose between using the variant or the regular system, as both systems are mutually exclusive;
it is not possible to use both at the same time.  
Changing which system is used after the repository is created and after commits have already been created is not
recommended.

**t3m Parallel** may be thought of multiple instances of the regular system inside a single repository.  
The master branch is split into several distinct branches, each with its own "ecosystem" of topic and development
branches. (See sections [4. Topic Branches](topic-branches.md) and [5. Development Branch](development-branch.md))  
These "ecosystems" track the development of a different major, backwards-incompatible version of the project.  
Here it is apparent that this variant was crafted to work in tandem with **[Semantic Versioning v2.0.0]**.  
If the versioning system (that isn't **Semantic Versioning v2.0.0**) used in the repository doesn't have a major version
like in **Semantic Versioning v2.0.0**, any number in the system that is conceptually as close to
**Semantic Versioning v2.0.0**'s major version should be used to base these "ecosystems" on.

This variant should be used for projects where multiple major versions are supposed to, simultaneously, be available and
useable independant of each other.  
Some examples would be software libraries/frameworks, specification documents or command line tool programs.  
The regular **t3m** system should be used for projects where only one version (the latest one) should be available,
used and be worked with.  
For example: games, websites, mobile apps, other GUI applications or media types like images, audios or videos.

When using **t3m Parallel**, all branch names must be prefixed with the major version that is developed on the branch.  
This prefix must start with the letter `v`, which is followed by a positive decimal integer with no leading zeros
(except if the number is only a single zero) and end with a dash (`-`). (e.g.: `v0-`, `v5-`, `v27-`)  
The integer must not be greater than 9999.

The repository owner may decide that the trailing substring of `-master` may be omitted for all master branches.
(i.e.: the branch named `v2-master` may be named just `v2`)  
If this decision is chosen, then all master branches must follow this rule.
(e.g.: there must never be branches named `v1-master`, `v2` and `v3-master`.
They must either be named `v1-master`, `v2-master` and `v3-master` or just `v1`, `v2` and `v3`)

Even though the major version is already encoded in the first component of the branch name, the naming rules of staging
branches must be retained; the second component of staging branch names must still be the full version name.
(See section [4.5. Staging Branches](topic-branches/staging.md))

Branches with the same major version prefix must only diverge from and merge into other branches with the same
major version prefix. (i.e.: a branch named `v2-develop` must not merge into `v3-master`)  
The only exception to this rule are the master branches.  
Master branches must either be orphan branches or they must diverge from other master branches that have a lower
major version than themselves.
(i.e.: `v2-master` must either be an orphan or diverge from either `v0-master` or `v1-master`)  
It is recommended to always diverge a new master branch from the one whose major version is just one integer below the
new one. (e.g.: `v1-master` diverges from `v0-master`, `v4-master` diverges from `v3-master`, ...)  
Master branches still must not merge into other branches and have an endless lifespan.

If the same or similar change is supposed to be added to multiple major versions, then a new branch must be created for
every major version the change should be applied to.
These new branches should have the same name. (not including the major version prefix)
(e.g.: `v1-feature/cool-new-feature` and `v2-feature/cool-new-feature`)  
Commits may be cherry picked from one branch to the other, or one may start off at the same commit and
then be rebased to the correct branch.

If in the unfinished initial development phase
(see section [4.5.1. Development Phases](topic-branches/development-phases.md))
it is not yet clearly established which major version will be released first, the major version prefix must be omitted,
and the master branch must be named `unreleased`.  
At any point in the unfinished initial development phase, or at the very latest when leaving the phase,
all branches must be renamed to match the before laid out rules.

The [repository of the **t3m** specification] uses this variant.

[Semantic Versioning v2.0.0]: https://semver.org/spec/v2.0.0.html "Semantic Versioning 2.0.0"
[repository of the **t3m** specification]: https://github.com/mfederczuk/t3m
