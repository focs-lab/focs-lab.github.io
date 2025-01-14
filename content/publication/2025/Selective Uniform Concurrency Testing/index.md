---
title: "Selectively Uniform Concurrency Testing"
authors:
- huan.zhao
- Dylan Wolff
- umang
- Abhik Roychoudhury
date: "2025-01-14T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "International Conference on Architectural Support for Programming Languages and Operating Systems"
publication_short: "ASPLOS 2025"

abstract: |-
    Buggy behaviors in concurrent programs are notoriously elusive, as they may manifest only in few of exponentially many possible thread interleavings. Randomized concurrency testing techniques probabilistically sample from (instead of enumerating) the vast search space and have been shown to be both an effective as well as a scalable class of algorithms for automated discovery of concurrency bugs. In this work we focus on the key desirable characteristic of black-box randomized concurrency testing algorithms — uniformity of exploration. Unfortunately, prior randomized algorithms acutely fall short on uniformity and, as a result, struggle to expose bugs that only manifest in few, infrequent interleavings. Towards this, we show that, indeed, a sampling strategy for uniformly sampling over the interleaving space, is eminently achievable with minimal additional information for broad classes of programs. Moreover, when applied to a carefully selected subset of program events, this interleaving-uniformity strategy allows for an effective exploration of program behaviors. We present an online randomized concurrency testing algorithm named Selectively Uniform Random Walk (`SURW`) that builds on these insights. `SURW` is the first of its class to achieve interleaving-uniformity for a wide class of programs, or an arbitrary subset of events thereof. This property translates to effective behavioral exploration should a subset with desirable characteristics be selected. Extensive evaluation on leading concurrency benchmarks suggests `SURW` is able to expose more bugs and significantly faster than comparable randomized algorithms. In addition, we show that `SURW` is able to explore both the space of interleavings and behaviors more uniformly on real-world programs.

tags:
- fuzzing
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://abhikrc.com/pdf/asplos25.pdf
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
