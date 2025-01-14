---
title: "Optimistic Prediction of Synchronization-Reversal Data Races"
authors:
- zheng.shi
- umang
- Andreas Pavlogiannis
date: "2024-01-11T00:00:00Z"
doi: "10.48550/arXiv.2401.05642"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "International Conference on Software Engineering"
publication_short: "ICSE 2024"

abstract: |-
    Dynamic data race detection has emerged as a key technique for ensuring reliability of concurrent software in practice. However, dynamic approaches can often miss data races owing to nondeterminism in the thread scheduler. Predictive race detection techniques cater to this shortcoming by inferring alternate executions that may expose data races without re-executing the underlying program. More formally, the dynamic data race prediction problem asks, given a trace $\sigma$ of an execution of a concurrent program, can $\sigma$ be correctly reordered to expose a data race? Existing state-of-the art techniques for data race prediction either do not scale to executions arising from real world concurrent software, or only expose a limited class of data races, such as those that can be exposed without reversing the order of synchronization operations.
    In general, exposing data races by reasoning about synchronization reversals is an intractable problem. In this work, we identify a class of data races, called Optimistic Sync(hronization)-Reversal races that can be detected in a tractable manner and often include non-trivial data races that cannot be exposed by prior tractable techniques. We also propose a sound algorithm OSR for detecting all optimistic sync-reversal data races in overall quadratic time, and show that the algorithm is optimal by establishing a matching lower bound. Our experiments demonstrate the effectiveness of OSR on our extensive suite of benchmarks, OSR reports the largest number of data races, and scales well to large execution traces.

tags:
- fuzzing
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://arxiv.org/pdf/2401.05642.pdf
url_code:
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
