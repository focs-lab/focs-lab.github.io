{
  "title": "Checking LTL[F,G,X] on Compressed Traces in Polynomial Time",
  "authors": [
    "Minjian Zhang",
    "umang",
    "Mahesh Viswanathan"
  ],
  "date": "2021-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "ESEC/FSE 2021",
  "publication_short": "ESEC/FSE 2021",
  "abstract": "The problem of checking if a program execution meets a formal specification arises in many software engineering tasks including runtime verification and designing test oracles. When online analysis is not possible, execution trace logs are stored for offline postmortem analysis, often in a compressed format to reduce disk space and warehousing requirements. A straightforward method for checking if a compressed execution satisfies a property is to first decompress it and then analyze the resulting uncompressed execution. In this paper, we consider the problem of checking if an execution trace, compressed using a grammar-based lossless compression scheme, satisfies a specification expressed in linear temporal logic, without explicitly decompressing it. In general, this problem is known to be intractable (PSPACE-hard in the size of the compressed trace and the LTL formula). We show that the problem can be solved in polynomial time for the fragment LTL[F,G,X], which comprises of all Boolean and modal operators of LTL except the until operator. Our algorithm for analyzing SLPs (a grammar-based compression scheme) is effective in practice — for a suite of large execution traces obtained from open source projects, our algorithm shows significant speed ups when compared with the performance of checking LTL properties over corresponding uncompressed traces.",
  "featured": false,
  "links": [
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2021-fse-zhang-compressed-ltl/"
    }
  ],
  "url_pdf": "https://www.comp.nus.edu.sg/~umathur/papers/compressed-ltl-fse2021.pdf",
  "doi": "10.1145/3468264.3468557"
}
