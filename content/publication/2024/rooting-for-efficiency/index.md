---
title: "Rooting for Efficiency: Mechanised Reasoning about Array-Based Trees in Separation Logic"
authors:
- Qiyuan Zhao
- George Pîrlea
- zhendong.ang
- umang
- Ilya Sergey
date: "2024-01-09T00:00:00Z"
doi: "10.1145/3636501.3636944"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "Certified Programs and Proofs 2024"
publication_short: "CPP 2024"

award: 2024 CPP Distinguished Paper Award

abstract: |-
  Array-based encodings of tree structures are often preferable to linked or abstract data type-based representations for efficiency reasons. Compared to the more traditional encodings, array-based trees do not immediately offer convenient induction principles, and the programs that manipulate them often implement traversals non-recursively, requiring complex loop invariants for their correctness proofs.
  In this work, we provide a set of definitions, lemmas, and reasoning principles that streamline proofs about arraybased trees and programs that work with them. We showcase our proof techniques via a series of small but characteristic examples, culminating with a large case study: verification of a C implementation of a recently published *tree clock* data structure in a Separation Logic embedded into Coq.

tags:
- tree clocks
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.comp.nus.edu.sg/~umathur/papers/arboreta-cpp24.pdf
url_code: 'https://github.com/verse-lab/arboreta'
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
