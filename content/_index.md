---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  # - block: hero
  #   content:
  #     title: |
  #       Foundations of Computer Systems Lab
  #     # image:
  #     #   filename: welcome.jpg
  #     text: |
  #       <br>
  #       We are a research group in the <a href="https://nus-plse.github.io/">Programming Languages & Software Engineering lab</a> in the <a href="https://nus.edu.sg">National University of Singapore</a>.
  #       <br>
  #       <br>
  #       **Interests**

  - block: markdown
    content:
      title: |
        Foundations of Computer Systems Lab
      # image:
      #   filename: welcome.jpg
      text: |
        We are a research group in the [Programming Languages & Software Engineering lab](https://nus-plse.github.io) at the [National University of Singapore](https://nus.edu.sg).

        ### Interests
        Theoretical foundations of computer systems, with a current focus on:
          1. Dynamic analysis algorithms for detecting concurrency bugs
          2. Fuzz testing for concurrent software
          3. Algorithmic foundations for analysis problems beyond sequential consistency (weak memory and message passing concurrency)

        ### Reading Groups
        We currently run a reading group on the [Lean theorem prover](https://lean-lang.org/), which is held once every week on Wednesday 1-2pm. You may contact [Richard](mailto:richardw@u.nus.edu) if you are interested to join.

  - block: collection
    content:
      title: News
      subtitle:
      text:
      count: 12
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: news
    design:
      view: news
      columns: '1'

---
