---
title: "Program Skeletons for Automated Program Translation"
authors:
- Bo Wang
- tianyu.li
- Ruishi Li
- umang
- Prateek Saxena
date: "2025-06-13T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "46th ACM SIGPLAN Conference on Programming Language Design and Implementation"
publication_short: "PLDI 2025"

abstract: |-
    Translating software between programming languages is a challenging task, for which automated techniques have been elusive and hard to scale up to larger programs. A key difficulty in cross-language translation is that one has to re-express the intended behavior of the source program into idiomatic constructs of a different target language. This task needs abstracting away from the source language-specific details, while keeping the overall functionality the same. In this work, we propose a novel and systematic approach for making such translation amenable to automation based on a framework we call program skeletons. A program skeleton retains the high-level structure of the source program by abstracting away and effectively summarizing lower-level concrete code fragments, which can be mechanically translated to the target programming language. A skeleton, by design, permits many different ways of filling in the concrete implementation for fragments, which can work in conjunction with existing data-driven code synthesizers. Most importantly, skeletons can conceptually enable sound decomposition, i.e., if each individual fragment is correctly translated, taken together with the mechanically translated skeleton, the final translated program is deemed to be correct as a whole. We present a prototype system called SKEL embodying the idea of skeleton-based translation from Python to JavaScript. Our results show promising scalability compared to prior works. For 9 real-world Python programs, some with more than about 1k lines of code, 95% of their code fragments can be automatically translated, while about 5% require manual effort. All the final translations are correct with respect to whole-program test suites.

featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://dl.acm.org/doi/pdf/10.1145/3729287
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
