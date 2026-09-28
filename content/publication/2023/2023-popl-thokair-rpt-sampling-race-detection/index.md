{
  "title": "Dynamic Race Detection With O(1) Samples",
  "authors": [
    "Mosaad Al Thokair",
    "Minjian Zhang",
    "umang",
    "Mahesh Viswanathan"
  ],
  "date": "2023-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "POPL 2023",
  "publication_short": "POPL 2023",
  "abstract": "Happens before-based dynamic analysis is the go-to technique for detecting data races in large scale software projects due to the absence of false positive reports. However, such analyses are expensive since they employ expensive vector clock updates at each event, rendering them usable only for in-house testing. In this paper, we present a sampling-based, randomized race detector that processes only constantly many events of the input trace even in the worst case. This is the first sub-linear time (i.e., running in o(n) time where n is the length of the trace) dynamic race detection algorithm; previous sampling based approaches like Pacer run in linear time (i.e., O(n)). Our algorithm is a property tester for HB-race detection -- it is sound in that it never reports any false positive, and on traces that are far, with respect to hamming distance, from any race-free trace, the algorithm detects an HB-race with high probability. Our experimental evaluation of the algorithm and its comparison with state-of-the-art deterministic and sampling based race detectors shows that the algorithm does indeed have significantly low running time, and detects races quite often.",
  "featured": false,
  "links": [
    {
      "name": "CACM 2026 article",
      "url": "https://umangmathur.org/publications/2026-cacm-zhang-dynamic-race-detection/"
    },
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2506.20127"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=uJAADF-2i6c"
    },
    {
      "name": "Media Coverage",
      "url": "https://www.comp.nus.edu.sg/features/2023-concurrency-bugs-umathur/"
    },
    {
      "name": "Publication page",
      "url": "https://umangmathur.org/publications/2023-popl-thokair-rpt-sampling-race-detection/"
    }
  ],
  "doi": "10.1145/3571238",
  "award": "ACM SIGPLAN Distinguished Paper Award; SIGPLAN Research Highlights; CACM Research Highlights"
}
