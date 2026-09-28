{
  "title": "Sound Dynamic Deadlock Prediction in Linear Time",
  "authors": [
    "Hünkar Can Tunç",
    "umang",
    "Andreas Pavlogiannis",
    "Mahesh Viswanathan"
  ],
  "date": "2023-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "PLDI 2023",
  "publication_short": "PLDI 2023",
  "abstract": "Deadlocks are one of the most notorious concurrency bugs, and significant research has focused on detecting them efficiently. Dynamic predictive analyses work by observing concurrent executions, and reason about alternative interleavings that can witness concurrency bugs. Such techniques offer scalability and sound bug reports, and have emerged as an effective approach for concurrency bug detection, such as data races. Effective dynamic deadlock prediction, however, has proven a challenging task, as no deadlock predictor currently meets the requirements of soundness, high-precision, and efficiency. In this paper, we first formally establish that this tradeoff is unavoidable, by showing that (a) sound and complete deadlock prediction is intractable, in general, and (b) even the seemingly simpler task of determining the presence of potential deadlocks, which often serve as unsound witnesses for actual predictable deadlocks, is intractable. The main contribution of this work is a new class of predictable deadlocks, called sync(hronization)-preserving deadlocks. Informally, these are deadlocks that can be predicted by reordering the observed execution while preserving the relative order of conflicting critical sections. We present two algorithms for sound deadlock prediction based on this notion. Our first algorithm SPDOffline detects all sync-preserving deadlocks, with running time that is linear per abstract deadlock pattern, a novel notion also introduced in this work. Our second algorithm SPDOnline predicts all sync-preserving deadlocks that involve two threads in a strictly online fashion, runs in overall linear time, and is better suited for a runtime monitoring setting. We implemented both our algorithms and evaluated their ability to perform offline and online deadlock-prediction on a large dataset of standard benchmarks.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2304.03692"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=PTLTzFIdDs8"
    },
    {
      "name": "Publication page",
      "url": "https://umangmathur.org/publications/2023-pldi-tunc-syncp-deadlock-prediction/"
    }
  ],
  "doi": "10.1145/3591291"
}
