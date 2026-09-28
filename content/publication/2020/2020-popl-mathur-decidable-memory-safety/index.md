{
  "title": "Deciding Memory Safety for Single-Pass Heap-Manipulating Programs",
  "authors": [
    "umang",
    "Adithya Murali",
    "Paul Krogmeier",
    "P. Madhusudan",
    "Mahesh Viswanathan"
  ],
  "date": "2020-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "POPL 2020",
  "publication_short": "POPL 2020",
  "abstract": "We investigate the decidability of automatic program verification for programs that manipulate heaps, and in particular, decision procedures for proving memory safety for them. We extend recent work that identified a decidable subclass of uninterpreted programs to a class of alias-aware programs that can update maps. We apply this theory to develop verification algorithms for memory safety--- determining if a heap-manipulating program that allocates and frees memory locations and manipulates heap pointers does not dereference an unallocated memory location. We show that this problem is decidable when the initial allocated heap forms a forest data-structure and when programs are streaming-coherent, which intuitively restricts programs to make a single pass over a data-structure. Our experimental evaluation on a set of library routines that manipulate forest data-structures shows that common single-pass algorithms on data-structures often fall in the decidable class, and that our decision procedure is efficient in verifying them.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/1907.00298"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=mcUuD9Khkns"
    },
    {
      "name": "Tool",
      "url": "https://github.com/umangm/streamverif"
    },
    {
      "name": "Publication page",
      "url": "https://umangmathur.org/publications/2020-popl-mathur-decidable-memory-safety/"
    }
  ],
  "doi": "10.1145/3371103"
}
