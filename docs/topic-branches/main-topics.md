# 4.1. Main Topic Branches #

\[[Table of Contents](../index.md#table-of-contents)\]
Up: [4. Topic Branches](../topic-branches.md)  
Previous: [4. Topic Branches](../topic-branches.md)

Main topic branches is a subcategory of topic branches.  
These branches are the only topic branches that may alter the behavior or public API of the project.

The main topic branches must not be used to change meta and community files like readme files, licenses, etc.

## Feature Branches ##

The purpose of feature branches is to track new features, enhancements or other additions to the project.

This type of branch must not break backwards compatibility of the project - only backwards compatible additions must be
introduced.

If new additions replace old features, a deprecation notice should be added to the old features as well or they may even
be removed, but *only* if backwards compatibility is not broken by it.

Feature branches' distinguishing component must be `feature`.

## Change Branches ##

Change branches are, as the name suggests, used to track changes, adjustments or other revisions to the behavior or
public API of the project.  
This is the only type of topic branch that may break backwards compatibility.

In addition to behavior or API changes, change branches may also include new additions, behavior fixes or changes to
the internal project structure, but only if these additional non-behavior changes are not the primary focus of
the branch.

The distinguishing component of this type must be `change`.

## Fix Branches ##

Fix branches track important fixes or corrections of the project.  
This includes fixes to the behavior or public API of the project or changes to text.
(like changing the wording or fixing grammatical errors)

This branch type must not be used to fix internal formatting.

Like feature branches, backwards compatibility must not be broken, though with fixes this is a tricky topic.  
If the behavior of a feature is greatly different than what was originally intended, "fixing" it might be considered
breaking backwards compatibility.  
In this case, it may be best to not use a fix branch, but either a feature or change branch.
(either add a new, correct feature and deprecate the old one or change the existing one greatly)

The best way to prevent such a dilemma is to avoid it in the first place; every feature should be thoroughly tested.

The distinguishing component of fix branches must be `fix`.
