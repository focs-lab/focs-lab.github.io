---
title: Formal verification and testing for concurrent software
type: project
weight: 10
summary: Algorithms and tools for testing and verifying concurrent software, with a focus on race detection, predictive analysis, fuzzing, and weak memory.
show_date: false
share: false
---

A concurrent program can pass thousands of tests and still fail under a thread schedule that nobody anticipated. Weak memory and subtle synchronization make these failures difficult to reproduce—and even harder to rule out.

We develop algorithms for detecting races, predicting bugs from observed executions, and directing testing toward unexplored behaviors. Alongside these tools, we study verification methods and the semantics of concurrent languages, connecting practical bug discovery with rigorous guarantees of correctness.

## Research directions

- **Memory models and language semantics.** Understanding weak memory and message-passing concurrency, and developing rigorous semantics for concurrent programming languages such as Go.
- **Testing, runtime verification, and predictive analysis.** Finding concurrency bugs through fuzzing and schedule exploration, monitoring correctness conditions such as linearizability, and predicting errors from observed executions.
- **Formal verification.** Developing proof techniques and automated methods for establishing the correctness of concurrent programs and distributed protocols.

## Selected publications

- [Dynamic Race Detection with O(1) Samples]({{< relref "/publication/2026/2026-cacm-zhang-dynamic-race-detection" >}}). CACM 2026.
- [Greybox Fuzzing for Concurrency Testing]({{< relref "/publication/2024/Greybox Fuzzing for Concurrency Testing" >}}). ASPLOS 2024.
- [How Hard Is Weak-Memory Testing?]({{< relref "/publication/2024/How Hard Is Weak-Memory Testing%3F" >}}). POPL 2024.

[All projects]({{< relref "/projects" >}})
