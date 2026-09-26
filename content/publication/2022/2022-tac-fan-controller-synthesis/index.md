{
  "title": "Controller Synthesis for Linear System With Reach-Avoid Specifications",
  "authors": [
    "Chuchu Fan",
    "Zengyi Qin",
    "umang",
    "Qiang Ning",
    "Sayan Mitra",
    "Mahesh Viswanathan"
  ],
  "date": "2022-01-01T00:00:00Z",
  "publication_types": [
    "article-journal"
  ],
  "publication": "TAC 2022",
  "publication_short": "TAC 2022",
  "abstract": "We address the problem of synthesizing provably correct controllers for linear systems with reach-avoid specifications. Discrete abstraction-based controller synthesis techniques have been developed for linear and nonlinear systems with various types of specifications. However, these methods typically suffer from the state space explosion problem. Our solution decomposes the overall synthesis problem into two smaller, and more tractable problems: one synthesis problem for an open-loop controller, which can produce a reference trajectory, and a second for synthesizing a tracking controller, which can enforce the other trajectories to follow the reference trajectory. As a key building-block result, we show that, once a tracking controller is fixed, the reachable states from an initial neighborhood, subject to any disturbance, can be overapproximated by a sequence of ellipsoids, with shapes that are independent of the open-loop controller. Hence, the open-loop controller can be synthesized independently to meet the reach-avoid specification for an initial neighborhood. Moreover, we are able to reduce the problem of synthesizing open-loop controllers to satisfiability problems over quantifier-free linear real arithmetic. The number of linear constraints in the satisfiability problem is linear to the number of hyperplanes as the surfaces of the polytopic obstacles and goal sets. The overall synthesis algorithm, computes a tracking controller, and then iteratively covers the entire initial set to find open-loop controllers for initial neighborhoods. The algorithm is sound and, for a class of robust systems, is also complete. We implement this synthesis algorithm in a tool RealSyn ver 2.0 and use it on several benchmarks with up to 20 dimensions. Experiment results are very promising: RealSyn ver 2.0 can find controllers for most of the benchmarks in seconds.",
  "featured": false,
  "links": [
    {
      "name": "Publication page",
      "url": "https://umangmathur.org/publications/2022-tac-fan-controller-synthesis/"
    }
  ],
  "url_pdf": "https://umangmathur.org/papers/realsyn-tac.pdf",
  "doi": "10.1109/TAC.2021.3069723"
}
