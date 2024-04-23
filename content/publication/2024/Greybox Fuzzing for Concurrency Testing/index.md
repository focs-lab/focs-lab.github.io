---
title: "Greybox Fuzzing for Concurrency Testing"
authors:
- Dylan Wolff
- zheng.shi
- Gregory J. Duck
- umang
- Abhik Roychoudhury
date: "2024-04-23T00:00:00Z"
doi: "https://doi.org/10.1145/3620665.3640389"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "International Conference on Architectural Support for Programming Languages and Operating Systems"
publication_short: "ASPLOS 2024"

abstract: |-
    Uncovering bugs in concurrent programs is a challenging problem owing to the exponentially large search space of thread interleavings. Past approaches towards concurrency testing are either optimistic — relying on random sampling of these interleavings — or pessimistic — relying on systematic exploration of a reduced (bounded) search space. In this work, we suggest a fresh, pragmatic solution neither focused only on formal, systematic testing, nor solely on unguided sampling or stress-testing approaches. We employ a biased random search which guides exploration towards neighborhoods which will likely expose new behavior. As such it is thematically similar to greybox fuzz testing, which has proven to be an effective technique for finding bugs in sequential programs. To identify new behaviors in the domain of interleavings, we prune and navigate the search space using the “reads-from” relation. Our approach is significantly more efficient at finding bugs per schedule exercised than other state-of-the art concurrency testing tools and approaches. Experiments on widely used concurrency datasets also show that our greybox fuzzing inspired approach gives a strict improvement over a randomized baseline scheduling algorithm in practice via a more uniform exploration of the schedule space. We make our concurrency testing infrastructure “Reads-From Fuzzer” (RFF) available for experimentation and usage by the wider community to aid future research.

tags:
- fuzzing
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.comp.nus.edu.sg/~umathur/papers/rff-asplos24.pdf
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
