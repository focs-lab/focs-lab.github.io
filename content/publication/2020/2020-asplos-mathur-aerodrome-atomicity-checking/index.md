{
  "title": "Atomicity Checking in Linear Time using Vector Clocks",
  "authors": [
    "umang",
    "Mahesh Viswanathan"
  ],
  "date": "2020-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "ASPLOS 2020",
  "publication_short": "ASPLOS 2020",
  "abstract": "Multi-threaded programs are challenging to write. Developers often need to reason about a prohibitively large number of thread interleavings to reason about the behavior of software. A non-interference property like atomicity can reduce this interleaving space by ensuring that any execution is equivalent to an execution where all atomic blocks are executed serially. We consider the well studied notion of conflict serializability for dynamically checking atomicity. Existing algorithms detect violations of conflict serializability by detecting cycles in a graph of transactions observed in a given execution. The number of edges in such a graph can grow quadratically with the length of the trace making the analysis not scalable. In this paper, we present AeroDrome, a novel single pass linear time algorithm that uses vector clocks to detect violations of conflict serializability in an online setting. Experiments show that AeroDrome scales to traces with a large number of events with significant speedup.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2001.04961"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=pJfl3_hWzQ4"
    },
    {
      "name": "Tool",
      "url": "https://github.com/focs-lab/rapid"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2020-asplos-mathur-aerodrome-atomicity-checking/"
    }
  ],
  "doi": "10.1145/3373376.3378475"
}
