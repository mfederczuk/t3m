# 4.1. Main Topic Branches #

\[[Table of Contents](../index.md#table-of-contents)\]
Up: [4. Topic Branches](../topic-branches.md)  
Previous: [4. Topic Branches](../topic-branches.md)  
Next: [4.2. Refactor Branches](refactor.md)

Main topic branches is a subcategory of topic branches.  
These branches are the only topic branches that MAY alter the behavior or public API of the project.

The main topic branches MUST NOT be used to change meta and community files like readme files, licenses, etc.  
Meta branches, explained in section [4.4. Meta Branches](meta.md), are used for such things.

## Feature Branches ##

The purpose of feature branches is to track new features, enhancements or other additions to the project.

This type of branch MUST NOT break backwards compatibility of the project - only backwards compatible additions MUST be
introduced.

If new additions replace old features, a deprecation notice SHOULD be added to the old features as well or they MAY even
be removed, but *only* if backwards compatibility is not broken by it.

Feature branches' distinguishing component MUST be `feature`.

## Change Branches ##

Change branches are, as the name suggests, used to track changes, adjustments or other revisions to the behavior or
public API of the project.  
This is the only type of topic branch that MAY break backwards compatibility.

In addition to behavior or API changes, change branches MAY also include new additions, behavior fixes or changes to
the internal project structure, but only if these additional non-behavior changes are not the primary focus of
the branch.  
In the case of altering the internal project structure, refactor branches, explained in
section [4.2. Refactor Branches](refactor.md), MUST be used for it.

The distinguishing component of this type MUST be `change`.

## Fix Branches ##

Fix branches track important fixes or corrections of the project.  
This includes fixes to the behavior or public API of the project or changes to text.
(like changing the wording or fixing grammatical errors)

This branch type MUST NOT be used to fix internal formatting.  
Cleanup branches exist for this purpose. They are explained in the section [4.3. Cleanup Branches](cleanup.md).

Like feature branches, backwards compatibility MUST NOT be broken, though with fixes this is a tricky topic.  
If the behavior of a feature is greatly different than what was originally intended, "fixing" it might be considered
breaking backwards compatibility.  
In this case, it MAY be best to not use a fix branch, but either a feature or change branch.
(either add a new, correct feature and deprecate the old one or change the existing one greatly)

The best way to prevent such a dilemma is to avoid it in the first place; every feature should be thoroughly tested.

The distinguishing component of fix branches MUST be `fix`.
