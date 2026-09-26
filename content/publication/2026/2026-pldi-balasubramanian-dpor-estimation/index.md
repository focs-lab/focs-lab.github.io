{
  "title": "State Space Estimation for DPOR-based Model Checkers",
  "authors": [
    "A. R. Balasubramanian",
    "Mohammad Hossein Khoshechin Jorshari",
    "Rupak Majumdar",
    "umang",
    "Minjian Zhang"
  ],
  "date": "2026-04-04T00:00:00+00:00",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "PLDI 2026",
  "publication_short": "PLDI 2026",
  "abstract": "We study the estimation problem for concurrent programs: given a bounded program P, estimate the number of Mazurkiewicz trace–equivalence classes induced by its interleavings. This quantity informs two practical questions for enumeration-based model checking: how long a model checking run is likely to take, and what fraction of the search space has been covered so far. We first show that the counting problem is #P-hard even for restricted programs and, unless P = NP, inapproximable within any subexponential factor, ruling out efficient exact or randomized approximation algorithms. We then give a Monte Carlo approach to obtain a polynomial-time unbiased estimator. We convert a stateless optimal DPOR algorithm into an unbiased estimator by viewing its exploration as a bounded-depth, bounded-width tree whose leaves correspond to maximal Mazurkiewicz traces. A classical estimator due to Knuth, when applied to this tree, yields an unbiased estimate. To control the variance, we employ stochastic enumeration by maintaining a small population of partial paths at each depth whose evolution is coupled. We have implemented our estimator in the JMC model checker and evaluated it on shared-memory benchmarks. We find that, with modest computational budgets, our estimator yields stable estimates—typically within a 20% band—within a few hundred trials, even when the state space contains 10^5–10^6 equivalence classes. Finally, we show how the same machinery can be used to estimate model-checking cost by weighting all explored graphs, not only complete traces. Our algorithms provide the first provable polynomial-time unbiased estimators for counting traces—a problem of considerable importance when allocating model checking resources.",
  "featured": false,
  "links": [
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=M504uKzrEwA"
    },
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2512.23996"
    },
    {
      "name": "Publication page",
      "url": "https://umangmathur.org/publications/2026-pldi-balasubramanian-dpor-estimation/"
    }
  ],
  "doi": "10.1145/3808291"
}
