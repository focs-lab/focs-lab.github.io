{
  "title": "Anvil: A General-Purpose Timing-Safe Hardware Description Language",
  "authors": [
    "Jason Zhijingcheng Yu",
    "aditya.ranjan.jha",
    "umang",
    "Trevor E. Carlson",
    "Prateek Saxena"
  ],
  "date": "2026-03-22T00:00:00+00:00",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "ASPLOS 2026",
  "publication_short": "ASPLOS 2026",
  "abstract": "Expressing hardware designs using hardware description languages (HDLs) routinely involves using stateless signals whose values change according to their underlying registers. Unintended behaviours can arise when the stored values in these underlying registers are mutated while their dependent signals are expected to remain constant across multiple cycles. Such timing hazards are common because, with a few exceptions, existing HDLs lack abstractions for values that remain unchanged over multiple clock cycles, delegating this responsibility to hardware designers. Designers must then carefully decide whether a value should remain unchanged, sometimes even across hardware modules. This paper proposes Anvil, an HDL which statically prevents timing hazards with a novel type system. Anvil is the only HDL we know of that guarantees timing safety, i.e., absence of timing hazards, without sacrificing expressiveness for cycle-level timing control or dynamic timing behaviours. Unlike many HLS languages that abstract away the differences between registers and signals, Anvil's type system exposes them fully while capturing the timing relationships between register value mutations and signal usages to enforce timing safety. This, in turn, enables safe composition of communicating hardware modules by static enforcement of timing contracts that encode timing constraints on shared signals. Such timing contracts can be specified parametric on abstract time points that can vary during run-time, allowing the type system to statically express dynamic timing behaviour. We have implemented Anvil and successfully used it to implement key timing-sensitive modules, comparing them against open-source SystemVerilog counterparts to demonstrate the practicality and expressiveness of the generated hardware.",
  "featured": false,
  "links": [
    {
      "name": "Publication page",
      "url": "https://umangmathur.org/publications/2026-asplos-yu-anvil-hdl/"
    }
  ],
  "doi": "10.1145/3779212.3790125",
  "url_pdf": "https://arxiv.org/abs/2503.19447"
}
