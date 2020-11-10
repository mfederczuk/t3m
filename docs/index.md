<!-- TODO: release date -->

# t3m v1.0.0-rc01 #

This document is the official specification for the **t3m** **Git** branching system,
version 1.0.0-rc01 (released {{DATE}}).

---

Copyright &copy; 2021 Michael Federczuk

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
To view a copy of this license, visit <https://creativecommons.org/licenses/by-sa/4.0/> or send a letter to
Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

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
