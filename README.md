Below is a guide for updating this site.
This is a fork of [HugoBlox/theme-research-group](https://github.com/HugoBlox/theme-research-group).
The documentation there should be referred to for more advanced changes.

## Editing locally

`hugo` is used to build this site locally. Here is one way to install `hugo`. 

First, [install go](https://go.dev/doc/install). Then, [install the extended edition of `hugo`](https://gohugo.io/installation/linux/).
(It is important to not install `hugo` via `apt` because the one there is too old and does not work on this repo.)

After installing `hugo`, simply run `hugo server` to preview the site locally. 

### News

Copy one of the earlier postings in [content/news](/content/news/) and modify the file name, date and contents accordingly.

### People

Copy one of the folders in [content/authors](/content/authors/) and modify the name and contents accordingly. Do also remember to update the profile image. The image file should be named `avatar.[jpg|png]`. Either image format works but the name must be `avatar`.
(The folder is named "authors" just because it was like that when this repo was initially forked from HugoBlox.)

```yml
---
# Display name
title: Umang Mathur

link: https://www.comp.nus.edu.sg/~umathur/

# Full Name (for SEO)
first_name: Umang
last_name: Mathur

# Organizational groups that you belong to (for People widget)
#   Set this to `[]` or comment out if you are not using People widget.
user_groups:
  - Principal Investigator

social:
  - icon: orcid
    icon_pack: fab
    link: https://orcid.org/0000-0002-7610-0660
---
```

The possible labels for `user_groups` are as follows. Multiple labels can be included in the list.
- Principal Investigators
- Researchers
- Grad Students
- Administration
- Visitors
- Alumni

### Publications

Copy one of the folders in [content/publication](/content/publication/), such as [2024/Coarser Equivalences for Causal Concurrency](/content/publication/2024/Coarser%20Equivalences%20for%20Causal%20Concurrency/). There are two files, `cite.bib` and `index.md`. First, update `cite.bib` with the coresponding BibTeX. Then, update the fields in `index.md`.

Most fields are self-explanatory, but the `authors` and `publication_types` fields would benefit from some elaboration.

In the `authors` list, if a name matches a folder name under `content/authors` (e.g. [`umang`](/content/authors/umang/), [`zhendong.ang`](/content/authors/zhendong.ang/), [`huan.zhao`](/content/authors/huan.zhao/)), the rendered website will show the author's full name and have a hyperlink to the author's personal website.

The `publication_types` field expects a list of labels. So far we only use `publication_types: ["paper-conference"]`. Below is a reference containing the other labels in case we might want them some day:
- `paper_conference`: Conference paper
- `article_journal`: Journal article
- `article`: Preprint
- `report`: Report
- `book`: Book
- `chapter`: Book section
- `thesis`: Thesis
- `patent`: Patent
