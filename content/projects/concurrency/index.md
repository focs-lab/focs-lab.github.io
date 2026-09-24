---
title: Concurrency
type: project
weight: 10
summary: Algorithms and tools for testing and verifying concurrent software, with a focus on race detection, predictive analysis, fuzzing, and weak memory.
show_date: false
share: false
---

Concurrent programs must behave correctly across many possible interactions between threads and processes. Bugs can depend on rare schedules, subtle synchronization patterns, or the memory model of the underlying language and hardware. We develop algorithms and tools that make these behaviors easier to explore, understand, and verify.

Our work connects the mathematical foundations of concurrency with practical program analysis. We study both the complexity of verification problems and techniques that scale to real executions.

## Research directions

- **Race detection and predictive analysis.** Detecting data races and other concurrency errors efficiently, including bugs that can be inferred from an execution even when they do not occur in that execution.
- **Concurrency testing and fuzzing.** Guiding the exploration of thread schedules toward new behaviors and hard-to-find bugs.
- **Memory models and language semantics.** Understanding weak memory and message-passing concurrency, and developing foundations for testing and verifying concurrent programs in Go.
- **Runtime verification.** Monitoring whether concurrent executions satisfy correctness conditions such as linearizability.

## Selected publications

- [Dynamic Race Detection with O(1) Samples]({{< relref "/publication/2026/2026-cacm-zhang-dynamic-race-detection" >}}). CACM 2026.
- [Greybox Fuzzing for Concurrency Testing]({{< relref "/publication/2024/Greybox Fuzzing for Concurrency Testing" >}}). ASPLOS 2024.
- [How Hard Is Weak-Memory Testing?]({{< relref "/publication/2024/How Hard Is Weak-Memory Testing%3F" >}}). POPL 2024.

[All projects]({{< relref "/projects" >}})
