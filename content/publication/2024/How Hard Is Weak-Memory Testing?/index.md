---
title: "How Hard Is Weak-Memory Testing?"
authors:
- Soham Chakraborty
- Shankara Narayanan Krishna
- umang
- Andreas Pavlogiannis
date: "2024-01-05T00:00:00Z"
doi: "https://doi.org/10.1145/3632908"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "51st ACM SIGPLAN Symposium on Principles of Programming Languages"
publication_short: "POPL 2024"

abstract: |-
    Weak-memory models are standard formal specifications of concurrency across hardware, programming languages, and distributed systems. A fundamental computational problem is *consistency testing*: is the observed execution of a concurrent program in alignment with the specification of the underlying system? The problem has been studied extensively across Sequential Consistency (SC) and weak memory, and proven to be NP-complete when some aspect of the input (e.g., number of threads/memory locations) is unbounded. This unboundedness has left a natural question open: are there efficient *parameterized* algorithms for testing?

    The main contribution of this paper is a deep hardness result for consistency testing under many popular weak-memory models: the problem remains NP-complete even in its *bounded* setting, where candidate executions contain a bounded number of threads, memory locations, and values. This hardness spreads across several Release-Acquire variants of C11, a popular variant of its Relaxed fragment, popular Causal Consistency models, and the POWER architecture. To our knowledge, this is the first result that fully exposes the hardness of weak-memory testing and proves that the problem *admits no parameterization* under standard input parameters. It also yields a computational separation of these models from SC, x86-TSO, PSO, and Relaxed, for which bounded consistency testing is either known (for SC), or shown here (for the rest), to be in polynomial time.

tags:
- memory-model
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.comp.nus.edu.sg/~umathur/papers/rc20-rv-consistency-popl24.pdf
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
