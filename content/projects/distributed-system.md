---
title: "Distributed System - Multi-Paxos Sharded Datastore"
description: "Built and evaluated a Multi-Paxos + 2PC sharded datastore, implementing WAL recovery and distributed locking."
tags: ["Distributed Systems", "Paxos", "2PC", "Go"]
date: "2025-01-15"
github: "https://github.com/username/distributed-paxos-datastore"
---

## Overview

A comprehensive distributed datastore implementation featuring Multi-Paxos consensus combined with Two-Phase Commit (2PC) for handling cross-shard transactions.

![Multi-Paxos Consensus Architecture](/images/distributed-paxos-architecture.png)

## Key Features

### Multi-Paxos Consensus
- Implemented Multi-Paxos protocol for leader election and log replication
- Ensured strong consistency guarantees across replicas
- Handled leader failures with automatic re-election

### Two-Phase Commit (2PC)
- Coordinated transactions spanning multiple shards
- Implemented prepare and commit phases with proper rollback handling
- Managed coordinator failures gracefully

### Write-Ahead Logging (WAL)
- Implemented WAL for durability and crash recovery
- Log compaction and snapshotting for storage efficiency
- Fast recovery after node restarts

### Distributed Locking
- Built distributed lock manager for concurrency control
- Deadlock detection and prevention mechanisms
- Lock timeout and automatic release

## Performance Analysis

Analyzed the performance impact of cross-shard coordination on:
- **Latency**: Measured round-trip times for single-shard vs cross-shard operations
- **Throughput**: Evaluated system throughput under varying workloads
- **Scalability**: Tested horizontal scaling with increasing number of shards

## Technical Stack

- **Language**: Go
- **Consensus**: Multi-Paxos
- **Transactions**: Two-Phase Commit
- **Storage**: Custom WAL implementation
- **Testing**: Chaos engineering for fault injection

## Lessons Learned

1. Trade-offs between consistency and availability in distributed systems
2. Importance of proper failure handling in consensus protocols
3. Impact of network partitions on system behavior
4. Optimizations for reducing cross-shard coordination overhead
