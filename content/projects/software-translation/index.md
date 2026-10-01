---
title: Translation of large scale software repositories across programming languages
type: project
weight: 30
summary: Migrating software across languages while preserving behavior across an entire codebase.
show_date: false
share: false
---

Moving a software repository to a new language means much more than translating individual functions. Dependencies, interfaces, and language-specific assumptions must continue to fit together. A translation that looks plausible in isolation can quietly change the behavior of the whole system.

We develop methods for breaking this task into manageable pieces while retaining the structure and intent of the original program. Our work on **program skeletons** separates high-level program structure from implementation details, allowing individual fragments to be translated and checked within a common framework. We are extending this approach toward repository-scale migration, where preserving behavior across module boundaries is central.

## Selected publication

[Program Skeletons for Automated Program Translation]({{< relref "/publication/2025/Program Skeletons for Automated Program Translation" >}}).

[All projects]({{< relref "/projects" >}})
