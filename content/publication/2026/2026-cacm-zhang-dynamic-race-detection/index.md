{
  "title": "Dynamic Race Detection with O(1) Samples",
  "authors": [
    "Minjian Zhang",
    "Mosaad Al Thokair",
    "umang",
    "Mahesh Viswanathan"
  ],
  "date": "2026-09-01T00:00:00+00:00",
  "publication_types": [
    "article-journal"
  ],
  "publication": "CACM 2026",
  "publication_short": "CACM 2026",
  "abstract": "Happens before-based dynamic analysis is the go-to technique for detecting data races in large-scale software projects due to the absence of false positive reports. However, such analyses are expensive, since they employ expensive vector clock updates at each event, rendering them usable only for in-house testing. In this paper, we present a sampling-based, randomized race detector that in the worst case, processes only a constant number of events from the execution trace being analyzed. This is the first sub-linear time (i.e., running in o(n) time where n is the length of the execution trace) dynamic race-detection algorithm; previous sampling-based approaches like Pacer run in linear time (i.e., O(n)). Our algorithm is a property tester for HB-race detection—it is sound in that it never reports any false positives, and on traces that are far (with respect to Hamming distance) from any race-free trace, the algorithm detects an HB-race with high probability. Our experimental evaluation of the algorithm and its comparison with state-of-the-art deterministic and sampling-based race detectors shows that the algorithm does indeed have significantly low running time and detects races quite often.",
  "featured": false,
  "links": [
    {
      "name": "Article",
      "url": "https://cacm.acm.org/research-highlights/dynamic-race-detection-with-o1-samples/"
    },
    {
      "name": "Original POPL 2023 paper",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2023-popl-thokair-rpt-sampling-race-detection/"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2026-cacm-zhang-dynamic-race-detection/"
    }
  ],
  "doi": "10.1145/3821579",
  "award": "CACM Research Highlights"
}
