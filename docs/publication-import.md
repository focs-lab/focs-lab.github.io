# Publication import

Source: https://umangmathur.org/publications/ (fetched 17 September 2026). The live publication page contains 44 entries; its sitemap independently lists the same 44 publication detail pages.

Added the 31 missing entries using their detail pages and BibTeX, including available abstracts, DOI, paper links and awards. Retained the 13 existing publication bundles and their URLs. The publication listing retains its text, year and publication-type filters. Publication detail links in the imported entries record their sources.

The CV contains a longer bibliography; this import follows the requested publication webpage.

Where the source page’s metadata used a migration year instead of its publication year, the listing date uses January 1 of the publication year (not an asserted exact publication date). DOI URLs are normalized to DOI identifiers for the Hugo theme.

## Publication types

Classify entries by their publication venue: conference papers include POPL, PLDI, and OOPSLA papers published in PACMPL; standalone journal articles use the journal category. The 44 entries comprise 41 conference papers and three journal articles (CACM 2026, FMSD 2020, and TAC 2022). None is a thesis.

Corrected erroneous thesis tags on the CAV 2018 and CAV 2020 papers and the TAC 2022 article against their source publication pages and bibliography. Also aligned OOPSLA 2018 and the two POPL 2026 papers with the conference classification used for the other PACMPL conference papers.

## Additional papers supplied by Umang — 19 September 2026

Added six conference papers from the supplied BibTeX: ATC 2026, APLAS 2026, FM 2026, two TACAS 2026 papers, and VMCAI 2026. The site now contains 50 publications (47 conference papers and three journal articles). Preserved the supplied titles, author order, citation keys, and BibTeX fields; removed the HTML space entities in the ATC entry and normalized formatting. Linked Alexey Paznikov, Michael Schwarz, and Umang Mathur to their existing author profiles.

Exposed the supplied Springer pages, DOI identifiers, arXiv papers, and code artifacts through the publication buttons. The VMCAI entry's `selected` flag maps to `featured`. No abstracts or missing bibliographic details were invented.

Publication dates use the first of the supplied month as a sorting anchor, not an asserted publication day. ATC's November month comes from its [official conference schedule](https://sigops.org/s/conferences/atc/2026/cfp.html). ATC and APLAS are marked “To appear”; their separate `publishDate` values use the notification dates documented in `news-sources.md`, so Hugo includes them before their conference months. The APLAS conference list still uses an earlier title; retained Umang's supplied title, which matches the [arXiv version](https://arxiv.org/abs/2609.00246).
