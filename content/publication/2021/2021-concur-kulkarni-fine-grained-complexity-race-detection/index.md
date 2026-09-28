{
  "title": "Dynamic Data-Race Detection through the Fine-Grained Lens",
  "authors": [
    "Rucha Kulkarni",
    "umang",
    "Andreas Pavlogiannis"
  ],
  "date": "2021-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "CONCUR 2021",
  "publication_short": "CONCUR 2021",
  "abstract": "Data races are among the most common bugs in concurrency. The standard approach to data-race detection is via dynamic analyses, which work over executions of concurrent programs, instead of the program source code. The rich literature on the topic has created various notions of dynamic data races, which are known to be detected efficiently when certain parameters (e.g., number of threads) are small. However, the fine-grained complexity of all these notions of races has remained elusive, making it impossible to characterize their trade-offs between precision and efficiency. In this work we establish several fine-grained separations between many popular notions of dynamic data races. The input is an execution trace $\\sigma$ with $\\mathcal{N}$ events, $\\mathcal{T}$ threads and $\\mathcal{L}$ locks. Our main results are as follows. First, we show that happens-before HB races can be detected in O($\\mathcal{N} \\cdot \\mathsf{min}(\\mathcal{T}, \\mathcal{L})$) time, improving over the standard O($\\mathcal{N} \\cdot \\mathcal{T}$) bound when $\\mathcal{L} = o(\\mathcal{T})$. Moreover, we show that even reporting an HB race that involves a read access is hard for 2-orthogonal vectors (2-OV). This is the first rigorous proof of the conjectured quadratic lower-bound in detecting HB races. Second, we show that the recently introduced synchronization-preserving races are hard to detect for 3-OV and thus have a cubic lower bound, when $\\mathcal{T} = \\Omega(\\mathcal{N})$. This establishes a complexity separation from HB races which are known to be strictly less expressive. Third, we show that lock-cover races are hard for 2-OV, and thus have a quadratic lower-bound, even when $\\mathcal{T} = 2$ and $\\mathcal{L} = \\omega(\\mathsf{log} \\, \\mathcal{N})$. The similar notion of lock-set races is known to be detectable in O($\\mathcal{N} \\cdot \\mathcal{L}$) time, and thus we achieve a complexity separation between the two. Moreover, we show that lock-set races become hitting-set (HS)-hard when $\\mathcal{L} = \\Theta(\\mathcal{N})$, and thus also have a quadratic lower bound, when the input is sufficiently complex. To our knowledge, this is the first work that characterizes the complexity of well-established dynamic race-detection techniques, allowing for a rigorous comparison between them.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2107.03569"
    },
    {
      "name": "Publication page",
      "url": "https://umangmathur.org/publications/2021-concur-kulkarni-fine-grained-complexity-race-detection/"
    }
  ],
  "doi": "10.4230/LIPIcs.CONCUR.2021.16"
}
