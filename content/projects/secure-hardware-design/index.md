---
title: Formal Methods for Secure Hardware Design
type: project
weight: 20
summary: Languages, type systems, and verification techniques for building safe and secure hardware, including Anvil and its guarantees against timing hazards.
show_date: false
share: false
---

Hardware designs combine concurrent components whose correctness depends on precise timing and communication. Subtle mistakes in these interactions can undermine both functional correctness and security. We investigate how programming languages and formal methods can make hardware easier to design, compose, and verify.

A central part of this work is **Anvil**, a hardware description language that uses a type system to prevent timing hazards. Anvil makes timing relationships explicit and checks contracts between communicating modules, while retaining control over cycle-level timing and supporting dynamic timing behavior.

## Research directions

- **Safe hardware languages.** Designing abstractions and type systems that make timing and communication requirements explicit and checkable.
- **Compositional verification.** Reasoning about individual modules and the contracts needed for their safe composition into larger designs.
- **Secure hardware design.** Developing foundations and tools for expressing and checking security requirements alongside functional correctness.
- **Translation and tool support.** Exploring how existing hardware designs can be translated into safer languages, with type checking, testing, simulation, and formal verification helping to validate the result.

## Selected publication

[Anvil: A General-Purpose Timing-Safe Hardware Description Language]({{< relref "/publication/2026/2026-asplos-yu-anvil-hdl" >}}). ASPLOS 2026.

[All projects]({{< relref "/projects" >}})
