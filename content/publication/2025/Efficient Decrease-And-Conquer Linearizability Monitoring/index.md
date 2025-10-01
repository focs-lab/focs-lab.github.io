---
title: "Efficient Decrease-And-Conquer Linearizability Monitoring"
authors:
- zheng.han.lee
- umang
date: "2025-08-16T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "The ACM SIGPLAN Conference on Object-oriented Programming, Systems, Languages, and Applications"
publication_short: "OOPSLA 2025"

abstract: |-
    Linearizability has become the de facto correctness specification for implementations of concurrent data structures. While formally verifying such implementations remains challenging, linearizability monitoring has emerged as a promising first step to rule out early problems in the development of custom implementations, and serves as a key component in approaches that stress test such implementations. In this work, we investigate linearizability monitoring -- check if an execution history of an implementation is linearizable. While this problem is intractable in general, a systematic understanding of when it becomes tractable has remained elusive. We revisit this problem and first present a unified `decrease-and-conquer' algorithmic framework for linearizability monitoring. At its heart, this framework asks to identify special linearizability-preserving values in a given history -- values whose presence yields an equilinearizable sub-history when removed, and whose absence indicates non-linearizability. We prove that a polynomial time algorithm for the problem of identifying linearizability-preserving values, yields a polynomial time algorithm for linearizability monitoring, while conversely, intractability of this problem implies intractability of the monitoring problem. We demonstrate our framework's effectiveness by instantiating it for several popular data types -- sets, stacks, queues and priority queues -- deriving polynomial time algorithms for each, with the unambiguity restriction, where each insertion to the underlying data structure adds a distinct value. We optimize these algorithms to achieve the optimal log-linear time complexity by amortizing the cost of solving sub-problems through efficient data structures. Our implementation and evaluation on publicly available implementations show that our approach scales to large histories and outperforms existing tools.

featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://arxiv.org/abs/2410.04581
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
