---
title: Design of reliable and secure hardware systems
type: project
weight: 20
summary: Languages, type systems, and verification techniques for building safe and secure hardware, including Anvil and its guarantees against timing hazards.
show_date: false
share: false
---

Hardware design is slow, and mistakes are expensive. Errors in timing, communication, or security can survive simulation and surface only after fabrication, forcing costly respins. As designs grow more complex, checking correctness late in the design cycle becomes an increasingly fragile strategy.

We design programming languages and verification frameworks that help engineers build efficient, correct, and secure hardware, with correctness checks built into the design process. Our language **Anvil** makes timing contracts explicit and uses a type system to rule out timing hazards, while preserving control over cycle-level behavior. Our broader goal is to make strong guarantees compatible with the performance and flexibility that hardware design demands.

## Research directions

- **Safe hardware languages.** Designing abstractions and type systems that make timing and communication requirements explicit and checkable.
- **Compositional verification.** Reasoning about individual modules and the contracts needed for their safe composition into larger designs.
- **Secure hardware design.** Developing foundations and tools for expressing and checking security requirements alongside functional correctness.
- **Translation and tool support.** Exploring how existing hardware designs can be translated into safer languages, with type checking, testing, simulation, and formal verification helping to validate the result.

## Selected publication

[Anvil: A General-Purpose Timing-Safe Hardware Description Language]({{< relref "/publication/2026/2026-asplos-yu-anvil-hdl" >}}). ASPLOS 2026.

[All projects]({{< relref "/projects" >}})
