{
  "title": "Dynamic Race Prediction in Linear Time",
  "authors": [
    "Dileep Kini",
    "umang",
    "Mahesh Viswanathan"
  ],
  "date": "2017-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "PLDI 2017",
  "publication_short": "PLDI 2017",
  "abstract": "Writing reliable concurrent software remains a huge challenge for today's programmers. Programmers rarely reason about their code by explicitly considering different possible inter-leavings of its execution. We consider the problem of detecting data races from individual executions in a sound manner. The classical approach to solving this problem has been to use Lamport's happens-before (HB) relation. Until now HB remains the only approach that runs in linear time. Previous efforts in improving over HB such as causally-precedes (CP) and maximal causal models fall short due to the fact that they are not implementable efficiently and hence have to compromise on their race detecting ability by limiting their techniques to bounded sized fragments of the execution. We present a new relation weak-causally-precedes (WCP) that is provably better than CP in terms of being able to detect more races, while still remaining sound. Moreover, it admits a linear time algorithm which works on the entire execution without having to fragment it.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/1704.02432"
    },
    {
      "name": "Tool",
      "url": "http://github.com/focs-lab/rapid"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=AYPg7Z1AV5w"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2017-pldi-kini-wcp-race-prediction/"
    }
  ],
  "doi": "10.1145/3062341.3062374"
}
