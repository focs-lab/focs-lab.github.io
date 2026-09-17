{
  "title": "What Happens-After the First Race? Enhancing the Predictive Power of Happens-Before Based Dynamic Race Detection",
  "authors": [
    "umang",
    "Dileep Kini",
    "Mahesh Viswanathan"
  ],
  "date": "2018-01-01T00:00:00Z",
  "publication_types": [
    "article-journal"
  ],
  "publication": "OOPSLA 2018",
  "publication_short": "OOPSLA 2018",
  "abstract": "Dynamic race detection is the problem of determining if an observed program execution reveals the presence of a data race in a program. The classical approach to solving this problem is to detect if there is a pair of conflicting memory accesses that are unordered by Lamport’s happens-before (HB) relation. HB based race detection is known to not report false positives, i.e., it is sound. However, the soundness guarantee of HB only promises that the first pair of unordered, conflicting events is a schedulable data race. That is, there can be pairs of HB-unordered conflicting data accesses that are not schedulable races because there is no reordering of the events of the execution, where the events in race can be executed immediately after each other. We introduce a new partial order, called schedulable happens-before (SHB) that exactly characterizes the pairs of schedulable data races — every pair of conflicting data accesses that are identified by SHB can be scheduled, and every HB-race that can be scheduled is identified by SHB. Thus, the SHB partial order is truly sound. We present a linear time, vector clock algorithm to detect schedulable races using SHB. Our experiments demonstrate the value of our algorithm for dynamic race detection — SHB incurs only little performance overhead and can scale to executions from real-world software applications without compromising soundness.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/pdf/1808.00185"
    },
    {
      "name": "Tool",
      "url": "https://github.com/focs-lab/rapid"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=3Kv2h3_wII4"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2018-oopsla-mathur-shb-race-detection/"
    }
  ],
  "doi": "10.1145/3276515"
}
