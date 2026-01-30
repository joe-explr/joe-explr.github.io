---
title: "Understanding Paxos: A Practical Guide"
description: "Breaking down the Paxos consensus algorithm with practical examples and insights from implementing Multi-Paxos."
date: "2026-01-25"
---

## Introduction

Paxos is one of the most influential algorithms in distributed systems, yet it's notoriously difficult to understand. After implementing Multi-Paxos for my distributed datastore project, I want to share some insights that helped me grasp this powerful algorithm.

## The Problem: Consensus

In distributed systems, we often need multiple nodes to agree on a single value. This is harder than it sounds because:

1. **Network Failures**: Messages can be lost, delayed, or duplicated
2. **Node Failures**: Any node can crash at any time
3. **Asynchrony**: We can't assume anything about timing

## Basic Paxos Roles

Paxos defines three roles (a single node can play multiple roles):

### Proposers
- Propose values to be chosen
- Drive the protocol forward
- Handle conflicts between competing proposals

### Acceptors
- Vote on proposals
- Form a quorum to accept values
- Provide durability through persistence

### Learners
- Learn the chosen value
- Can be any node that needs to know the result

## The Two Phases

### Phase 1: Prepare

```
Proposer                    Acceptors
    |                           |
    |--- Prepare(n) ----------->|
    |                           |
    |<-- Promise(n, v?) --------|
    |                           |
```

1. Proposer picks a proposal number `n`
2. Sends `Prepare(n)` to a majority of acceptors
3. Each acceptor promises not to accept proposals < `n`
4. Acceptors reply with any value they've already accepted

### Phase 2: Accept

```
Proposer                    Acceptors
    |                           |
    |--- Accept(n, v) --------->|
    |                           |
    |<-- Accepted(n, v) --------|
    |                           |
```

1. If proposer received promises from a majority, it sends `Accept(n, v)`
2. Value `v` is either the highest-numbered accepted value from Phase 1, or proposer's own value
3. Acceptors accept if they haven't promised to a higher proposal

## Key Insight: Why It Works

The beauty of Paxos lies in how it handles competing proposals:

- Proposal numbers create a total ordering
- A proposer must learn about previous accepted values before proposing
- This ensures once a value is chosen, no other value can be chosen

## Multi-Paxos Optimization

Basic Paxos requires two round-trips per value. Multi-Paxos optimizes this:

1. Elect a stable leader
2. Leader skips Phase 1 for subsequent values
3. Only need one round-trip in the common case

## Lessons from Implementation

1. **Handle edge cases carefully**: Especially around leadership changes
2. **Persistence matters**: Acceptors must persist their state before responding
3. **Timeouts are tricky**: Too short causes thrashing, too long reduces availability
4. **Testing is essential**: Fault injection helped find many bugs

## Conclusion

Paxos is challenging but elegant. Understanding it opens doors to understanding Raft, Zab, and other consensus protocols that power modern distributed databases.

## Further Reading

- [Paxos Made Simple](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf) by Leslie Lamport
- [Paxos Made Live](https://research.google/pubs/pub33002/) by Google
