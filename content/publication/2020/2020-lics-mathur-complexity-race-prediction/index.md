{
  "title": "The Complexity of Data Race Prediction",
  "authors": [
    "umang",
    "Andreas Pavlogiannis",
    "Mahesh Viswanathan"
  ],
  "date": "2020-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "LICS 2020",
  "publication_short": "LICS 2020",
  "abstract": "Writing concurrent programs is notoriously hard due to scheduling non-determinism. The most common concurrency bugs are data races, which are accesses to a shared resource that can be executed concurrently. Dynamic data-race prediction is the most standard technique for detecting data races: given an observed, data-race-free trace $\\sigma$, the task is to determine whether $sigma$ can be reordered to a trace $\\sigma^*$ that exposes a data-race. Although the problem has received significant practical attention for over three decades, its complexity has remained elusive. In this work, we address this lacuna, identifying sources of intractability and conditions under which the problem is efficiently solvable. Given a trace $\\sigma$ of size $n$ over $k$ threads, our main results are as follows. First, we establish a general $O(k\\cdot n^{2\\cdot (k-1)})$ upper-bound, as well as an $O(n^k)$ upper-bound when certain parameters of $\\sigma$ are constant. In addition, we show that the problem is NP-hard and even W[1]-hard parameterized by $k$, and thus unlikely to be fixed-parameter tractable. Second, we study the problem over acyclic communication topologies, such as server-clients hierarchies. We establish an $O(k^2\\cdot d\\cdot n^2\\cdot \\log n)$ upper-bound, where $d$ is the number of shared variables accessed in $\\sigma$. In addition, we show that even for traces with $k=2$ threads, the problem has no $O(n^{2-\\epsilon})$ algorithm under the Orthogonal Vectors conjecture. Since any trace with 2 threads defines an acyclic topology, our upper-bound for this case is optimal wrt polynomial improvements for up to moderate values of $k$ and $d$. Finally, motivated by existing heuristics, we study a distance-bounded version of the problem, where the task is to expose a data race by a witness trace that is similar to $\\sigma$. We develop an algorithm that works in $O(n)$ time when certain parameters of $\\sigma$ are constant.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2004.14931"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=_2i0PFm3qiQ"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2020-lics-mathur-complexity-race-prediction/"
    }
  ],
  "doi": "10.1145/3373718.3394783"
}
