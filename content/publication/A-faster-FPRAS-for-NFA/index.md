---
title: 'A faster FPRAS for #NFA'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Kuldeep S. Meel
  - Sourav Chakraborty
  - umang

date: "2024-04-08T00:00:00Z"


# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: 2024 Symposium on Principles of Database Systems
publication_short: PODS 2024

abstract: |
  Given a non-deterministic finite automaton (NFA) A with m states, and a natural number n (presented in unary), the #NFA problem asks to determine the size of the set L(A_n) of words of length n accepted by A. While the corresponding decision problem of checking the emptiness of L(A_n) is solvable in polynomial time, the #NFA problem is known to be #P-hard. Recently, the long-standing open question -- whether there is an FPRAS (fully polynomial time randomized approximation scheme) for #NFA -- was resolved in \cite{ACJR19}. The FPRAS due to \cite{ACJR19} relies on the interreducibility of counting and sampling, and computes, for each pair of state q and natural number i <= n, a set of O(\frac{m^7 n^7}{epsilon^7}) many uniformly chosen samples from the set of words of length i that have a run ending at q (\epsilon is the error tolerance parameter of the FPRAS). This informative measure -- the number of samples maintained per state and length -- also affects the overall time complexity with a quadratic dependence.
  Given the prohibitively high time complexity, in terms of each of the input parameters, of the FPRAS due to \cite{ACJR19}, and considering the widespread application of approximate counting (and sampling) in various tasks in Computer Science, a natural question arises: Is there a faster FPRAS for #NFA that can pave the way for the practical implementation of approximate #NFA tools? In this work, we demonstrate that significant improvements in time complexity are achievable. Specifically, we have reduced the number of samples required for each state to be independent of m, with significantly less dependence on n and ϵ, maintaining only \widetilde{O}(\frac{n^4}{epsilon^2}) samples per state.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2312.13320'
url_code: ''
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
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---


