---
title: "Coarser Equivalences for Causal Concurrency"
authors:
- Azadeh Farzan
- umang
date: "2024-01-05T00:00:00Z"
doi: "https://doi.org/10.1145/3632873"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "51st ACM SIGPLAN Symposium on Principles of Programming Languages"
publication_short: "POPL 2024"

abstract: |-
    *Trace theory* (formulated by Mazurkiewicz in 1987) is a principled framework for defining equivalence relations for concurrent program runs based on a commutativity relation over the set of atomic steps taken by individual program threads. Its simplicity, elegance, and algorithmic efficiency makes it useful in many different contexts including program verification and testing. It is well-understood that the larger the equivalence classes are, the more benefits they would bring to the algorithms and applications that use them. In this paper, we study relaxations of trace equivalence with the goal of maintaining its algorithmic advantages.

    We first prove that the largest appropriate relaxation of trace equivalence, an equivalence relation that preserves the order of steps taken by each thread and what write operation each read operation observes, does not yield efficient algorithms. Specifically, we prove a *linear space lower bound* for the problem of checking, in a streaming setting, if two arbitrary steps of a concurrent program run are *causally concurrent* (i.e. they can be reordered in an equivalent run) or *causally ordered* (i.e. they always appear in the same order in all equivalent runs). The same problem can be decided in constant space for trace equivalence. Next, we propose a new commutativity-based notion of equivalence called *grain equivalence* that is strictly more relaxed than trace equivalence, and yet yields a constant space algorithm for the same problem. This notion of equivalence uses commutativity of *grains*, which are sequences of atomic steps, in addition to the standard commutativity from trace theory. We study the two distinct cases when the grains are contiguous subwords of the input program run and when they are not, formulate the precise definition of causal concurrency in each case, and show that they can be decided in *constant space*, despite being strict relaxations of the notion of causal concurrency based on trace equivalence.

tags:
- trace-equivalence
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.comp.nus.edu.sg/~umathur/papers/grains-popl24.pdf
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
