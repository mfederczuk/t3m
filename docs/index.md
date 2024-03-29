# t3m v1.0.0-rc01 #

This document is the official specification for the **t3m** **Git** branching system,
version 1.0.0-rc01 (released 2021-05-17).

---

Copyright &copy; 2021 Michael Federczuk

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
To view a copy of this license, refer to the section entitled "Creative Commons Attribution-ShareAlike 4.0 International",
visit <https://creativecommons.org/licenses/by-sa/4.0/> or send a letter to
Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

---

The key words "MUST", "MUST NOT", "REQUIRED", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this
document are to be interpreted as described in [RFC 2119].

[RFC 2119]: https://datatracker.ietf.org/doc/html/rfc2119

---

## Abstract ##

The general build-up of **t3m** is one master branch and several types of topic branches.

The master branch is the main branch of the repository, which should always contain a functional state of the project.

The development of the project is done on topic branches, where several different types exist.  
Each type of topic branch is used for a different type of modification to the files of the repository.  
These topic branches diverge from the master branch and then get merged back into the master branch after the
development of the topic has finished.

## Table of Contents ##

* [1. Introduction](introduction.md)
* [2. Branches Overall](branches-overall.md)
* [3. Master Branch](master-branch.md)
* [4. Topic Branches](topic-branches.md)
  * [4.1. Main Topic Branches](topic-branches/main-topics.md)
  * [4.2. Refactor Branches](topic-branches/refactor.md)
  * [4.3. Cleanup Branches](topic-branches/cleanup.md)
  * [4.4. Meta Branches](topic-branches/meta.md)
  * [4.5. Staging Branches](topic-branches/staging.md)
    * [4.5.1. Development Phases](topic-branches/development-phases.md)
* [5. Development Branch](development-branch.md)
* [6. Parallel Versions Variant](parallel-versions-variant.md)
* [7. Undefined Branches](undefined-branches.md)
* [8. Alternative Branch Names for Documents](alternative-document-branch-names.md)
* [Appendix A. Creative Commons Attribution-ShareAlike 4.0 International](cc-by-sa-4.0.md)
