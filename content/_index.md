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
        We are a research group in the [Programming Languages & Software Engineering lab](https://nus-plse.github.io) in the [National University of Singapore](https://nus.edu.sg).


        ### Interests
        Theoretical foundations of computer systems, with a current focus on:
          1. Dynamic analysis algorithms for detecting concurrency bugs
          2. Fuzz testing for concurrent software
          3. Algorithmic foundations for analysis problems beyond sequential consistency (weak memory and message passing concurrency)

        ### Projects
        We are currently working on implementing some of our proposed algorithms into ThreadSanitizer. You can follow the progress in our [blog](/blog).

        ### Sponsors/Grants
        Our work is/was supported by the following sponsors/grants:
          1. Singapore Ministry of Education (MoE) Academic Research Fund (AcRF) Tier 1 grant.
          2. National Research Foundation, Singapore, and Cyber Security Agency of Singapore under its National Cybersecurity R&D Programme (Fuzz Testing \<NRF-NCR25-Fuzz-0001\>).

        ### Reading Groups
        We currently run two reading groups. You may contact [Daniel](mailto:dws.lim@nus.edu.sg) if you are interested to join.
          1. [Automata](https://www.mimuw.edu.pl/~bojan/paper/automata-toolbox-book) (Wednesday 1-2pm @ COM3 MR21)
          2. Logic/Type Theory (Monday 5-6pm @ COM3 MR25)

  # - block: markdown
  #   content:
  #     title:
  #     subtitle:
  #     text: |
  #       {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
  #   design:
  #     columns: '1'

  - block: people
    content:
      title: Members
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - Principal Investigator
          - Research Fellows
          - PhD Students
          - Research Assistants
          - Undergraduate Students
          - Alumni
          - Visitors
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: true

  - block: collection
    content:
      title: News
      subtitle:
      text:
      count: 5
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

  - block: collection
    content:
      title: Publications
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: publication
    design:
      view: citation
      columns: '1'
    # text: |
    #   {{% cta cta_link="./publication/" cta_text="All publications →" %}}
---
