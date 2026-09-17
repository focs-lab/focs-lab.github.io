{
  "title": "A Tree Clock Data Structure for Causal Orderings in Concurrent Executions",
  "authors": [
    "umang",
    "Andreas Pavlogiannis",
    "Hünkar Can Tunç",
    "Mahesh Viswanathan"
  ],
  "date": "2022-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "ASPLOS 2022",
  "publication_short": "ASPLOS 2022",
  "abstract": "Dynamic techniques are a scalable and effective way to analyze concurrent programs. Instead of analyzing all behaviors of a program, these techniques detect errors by focusing on a single program execution. Often a crucial step in these techniques is to define a causal ordering between events in the execution, which is then computed using $\\textit{vector clocks}$, a simple data structure that stores logical times of threads. The two basic operations of vector clocks, namely join and copy, require $\\Theta(\\mathcal{T})$ time, where $\\mathcal{T}$ is the number of threads. Thus they are a computational bottleneck when $\\mathcal{T}$ is large. In this work, we introduce \\emph{tree clocks}, a new data structure that replaces vector clocks for computing causal orderings in program executions. Joining and copying tree clocks takes time that is roughly proportional to the number of entries being modified, and hence the two operations do not suffer the a-priori $\\Theta(\\mathcal{T})$ cost per application. We show that when used to compute the classic happens-before ($\\mathsf{HB}$) partial order, tree clocks are \\emph{optimal}, in the sense that no other data structure can lead to smaller asymptotic running time. Moreover, we demonstrate that tree clocks can be used to compute other partial orders, such as schedulable-happens-before ($\\mathsf{SHB}$) and the standard Mazurkiewicz ($\\mathsf{Maz}$) partial order, and thus are a versatile data structure. Our experiments show that just by replacing vector clocks with tree clocks, the computation becomes from $2.02 \\times$ faster ($\\mathsf{Maz}$) to $2.66 \\times$ ($\\mathsf{SHB}$) and $2.97 \\times$ ($\\mathsf{HB}$) on average per benchmark. These results illustrate that tree clocks have the potential to become a standard data structure with wide applications in concurrent analyses.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2201.06325"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=QUDSiPqoa9w"
    },
    {
      "name": "Media Coverage",
      "url": "https://www.comp.nus.edu.sg/features/2023-concurrency-bugs-umathur/"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2022-asplos-mathur-tree-clocks/"
    }
  ],
  "doi": "10.1145/3503222.3507734",
  "award": "ASPLOS 2022 Best Paper Award"
}
