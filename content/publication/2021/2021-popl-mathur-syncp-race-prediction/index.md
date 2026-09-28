{
  "title": "Optimal Prediction of Synchronization-Preserving Races",
  "authors": [
    "umang",
    "Andreas Pavlogiannis",
    "Mahesh Viswanathan"
  ],
  "date": "2021-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "POPL 2021",
  "publication_short": "POPL 2021",
  "abstract": "Concurrent programs are notoriously hard to write correctly, as scheduling nondeterminism introduces subtle errors that are both hard to detect and to reproduce. The most common concurrency errors are $\\textit{(data) races}$, which occur when memory-conflicting actions are executed concurrently. Consequently, considerable effort has been made towards developing efficient techniques for race detection. The most common approach is $\\textit{dynamic race prediction}$: given an observed, race-free trace $\\sigma$ of a concurrent program, the task is to decide whether events of $\\sigma$ can be correctly reordered to a trace $\\sigma^*$ that witnesses a race hidden in $\\sigma$. In this work we introduce the notion of $\\textit{sync(hronization)-preserving races}$. A sync-preserving race occurs in $\\sigma$ when there is a witness $\\sigma^*$ in which synchronization operations (e.g., acquisition and release of locks) appear in the same order as in $\\sigma$. This is a broad definition that $\\textit{strictly subsumes}$ the famous notion of happens-before races. Our main results are as follows. First, we develop a sound and complete algorithm for predicting sync-preserving races. For moderate values of parameters like the number of threads, the algorithm runs in $\\tilde{O}(\\mathcal{N})$ time and space, where $\\mathcal{N}$ is the length of the trace $\\sigma$. Second, we show that the problem has a $\\Omega(\\mathcal{N}/\\log^2 \\mathcal{N})$ space lower bound, and thus our algorithm is essentially $\\textit{time and space optimal}$. Third, we show that predicting races with $\\textit{even just a single}$ reversal of two sync operations is $\\mathsf{NP}$-complete and even $\\mathsf{W}[1]$-hard when parameterized by the number of threads. Thus, sync-preservation characterizes $\\textit{exactly}$ the tractability boundary of race prediction, and our algorithm is nearly $\\textit{optimal}$ for the tractable side. Our experiments show that our algorithm is fast in practice, while sync-preservation characterizes races often missed by state-of-the-art methods.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2010.16385"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=WYbKRn_sIVs"
    },
    {
      "name": "Publication page",
      "url": "https://umangmathur.org/publications/2021-popl-mathur-syncp-race-prediction/"
    }
  ],
  "doi": "10.1145/3434317"
}
