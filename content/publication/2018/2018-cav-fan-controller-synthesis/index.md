{
  "title": "Controller Synthesis Made Real: Reach-avoid Specifications and Linear Dynamics",
  "authors": [
    "Chuchu Fan",
    "umang",
    "Sayan Mitra",
    "Mahesh Viswanathan"
  ],
  "date": "2018-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "CAV 2018",
  "publication_short": "CAV 2018",
  "abstract": "We address the problem of synthesizing provably correct controllers for linear systems with reach-avoid specifications. Our solution uses a combination of an open-loop controller and a tracking controller, thereby reducing the problem to smaller tractable problems. We show that, once a tracking controller is fixed, the reachable states from an initial neighborhood, subject to any disturbance, can be over-approximated by a sequence of ellipsoids, with sizes that are independent of the open-loop controller. Hence, the open-loop controller can be synthesized independently to meet the reach-avoid specification for an initial neighborhood. Exploiting several techniques for tightening the over-approximations, we reduce the open-loop controller synthesis problem to satisfiability over quantifier-free linear real arithmetic. The overall synthesis algorithm, computes a tracking controller, and then iteratively covers the entire initial set to find open-loop controllers for initial neighborhoods. The algorithm is sound and, for a class of robust systems, is also complete. We present RealSyn, a tool implementing this synthesis algorithm, and we show that it scales to several high-dimensional systems with complex reach-avoid specifications.",
  "featured": false,
  "links": [
    {
      "name": "Tool",
      "url": "https://github.com/umangm/realsyn"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2018-cav-fan-controller-synthesis/"
    }
  ],
  "url_pdf": "https://www.comp.nus.edu.sg/~umathur/papers/realsyn-cav2018.pdf",
  "doi": "10.1007/978-3-319-96145-3_19"
}
