{
  "title": "Data Race Detection on Compressed Traces",
  "authors": [
    "Dileep Kini",
    "umang",
    "Mahesh Viswanathan"
  ],
  "date": "2018-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "ESEC/FSE 2018",
  "publication_short": "ESEC/FSE 2018",
  "abstract": "We consider the problem of detecting data races in program traces that have been compressed using straight line programs (SLP), which are special context-free grammars that generate exactly one string, namely the trace that they represent. We consider two classical approaches to race detection --- using the happens-before relation and the lockset discipline. We present algorithms for both these methods that run in time that is linear in the size of the compressed, SLP representation. Typical program executions almost always exhibit patterns that lead to significant compression. Thus, our algorithms are expected to result in large speedups when compared with analyzing the uncompressed trace. Our experimental evaluation of these new algorithms on standard benchmarks confirms this observation.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/1807.08427"
    },
    {
      "name": "Tool",
      "url": "http://github.com/umangm/ziptrack"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2018-fse-kini-compressed-race-detection/"
    }
  ],
  "doi": "10.1145/3236024.3236025",
  "award": "2018 ACM SIGSOFT Distinguished Paper Award"
}
