{
  "title": "Computing Information Flow Using Symbolic Model-Checking",
  "authors": [
    "Rohit Chadha",
    "umang",
    "Stefan Schwoon"
  ],
  "date": "2014-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "FSTTCS 2014",
  "publication_short": "FSTTCS 2014",
  "abstract": "Several measures have been proposed in literature for quantifying the information leaked by the public outputs of a program with secret inputs. We consider the problem of computing information leaked by a deterministic or probabilistic program when the measure of information is based on (a) min-entropy and (b) Shannon entropy. The key challenge in computing these measures is that we need the total number of possible outputs and, for each possible output, the number of inputs that lead to it. A direct computation of these quantities is infeasible because of the state-explosion problem. We therefore propose symbolic algorithms based on binary decision diagrams (BDDs). The advantage of our approach is that these symbolic algorithms can be easily implemented in any BDD-based model-checking tool that checks for reachability in deterministic non-recursive programs by computing program summaries. We demonstrate the validity of our approach by implementing these algorithms in a tool Moped-QLeak, which is built upon Moped, a model checker for Boolean programs. Finally, we show how this symbolic approach extends to probabilistic programs.",
  "featured": false,
  "links": [
    {
      "name": "Tool",
      "url": "https://github.com/umangm/mopedqleak"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2014-fsttcs-chadha-information-flow/"
    }
  ],
  "doi": "10.4230/LIPIcs.FSTTCS.2014.505"
}
