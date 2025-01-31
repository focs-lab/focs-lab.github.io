---
title: "Predictive Monitoring against Pattern Regular Languages"
authors:
- zhendong.ang
- umang
date: "2024-01-05T00:00:00Z"
doi: "10.1145/3632915"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "51st ACM SIGPLAN Symposium on Principles of Programming Languages"
publication_short: "POPL 2024"

abstract: |-
    While current bug detection techniques for concurrent software focus on unearthing low-level issues such as data races or deadlocks, they often fall short of discovering more intricate temporal behaviours that can arise even in the absence of such low-level issues. In this paper, we focus on the problem of dynamically analysing concurrent software against high-level temporal specifications such as LTL. Existing techniques for runtime monitoring against such specifications are primarily designed for sequential software and remain inadequate in the presence of concurrency — violations may be observed only in intricate thread interleavings, requiring many re-runs of the underlying software in conjunction with the analysis. Towards this, we study the problem of *predictive runtime monitoring*, inspired by the analogous problem of *predictive data race detection* studied extensively recently. The predictive runtime monitoring question asks, given an execution σ, if it can be soundly reordered to expose violations of a specification. In general, this problem may become easily intractable when either the specifications or the notion of reorderings used is complex.

    In this paper, we focus on specifications that are given in regular languages. Our notion of reorderings is *trace equivalence*, where an execution is considered a reordering of another if it can be obtained from the latter by successively commuting adjacent independent actions. We first show that, even in this simplistic setting, the problem of predictive monitoring admits a super-linear lower bound of $O(n^α)$, where n is the number of events in the execution, and α is a parameter describing the degree of commutativity, and typically corresponds to the number of threads in the execution. As a result, predictive runtime monitoring even in this setting is unlikely to be efficiently solvable, unlike in the non-predictive setting where the problem can be checked using a deterministic finite automaton (and thus, a constant-space streaming linear-time algorithm).

    Towards this, we identify a sub-class of regular languages, called *pattern languages* (and their extension *generalized pattern languages*). Pattern languages can naturally express specific ordering of some number of (labelled) events, and have been inspired by popular empirical hypotheses underlying many concurrency bug detection approaches such as the “small bug depth” hypothesis. More importantly, we show that for pattern (and generalized pattern) languages, the predictive monitoring problem can be solved using a constant-space streaming linear-time algorithm. We implement and evaluate our algorithm `PatternTrack` on benchmarks from the literature and show that it is effective in monitoring large-scale applications.

tags:
- trace-equivalence
- predictive-monitoring
- patterntrack
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.comp.nus.edu.sg/~umathur/papers/patterntrack-popl24.pdf
url_code: https://zenodo.org/records/8424626
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
