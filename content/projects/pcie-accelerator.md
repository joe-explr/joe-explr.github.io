---
title: "Datacenter PCIe Accelerator Co-Simulation Platform"
description: "QEMU-Vivado co-simulated PCIe accelerator with DMA/MSI-X, NIC bridge and ZeroMQ transport."
tags: ["FPGA", "PCIe", "QEMU", "Vivado", "Systems"]
date: "2024-12-01"
github: "https://github.com/username/pcie-cosim-platform"
---

## Overview

Developed a comprehensive co-simulation platform that enables reproducible host-FPGA verification without requiring RTL changes. This platform bridges the gap between software simulation and hardware development.

![PCIe Co-Simulation Architecture](/images/pcie-cosim-architecture.png)

## Architecture

### QEMU Integration
- Extended QEMU to support custom PCIe device models
- Implemented device enumeration and BAR mapping
- Created virtual PCIe fabric for host communication

### Vivado Co-Simulation
- Integrated Xilinx Vivado simulator with QEMU
- Real-time RTL simulation alongside software execution
- Cycle-accurate timing for hardware verification

### DMA Engine
- Implemented scatter-gather DMA for efficient data transfer
- Memory-mapped I/O for control register access
- Ring buffer management for high-throughput operations

### MSI-X Interrupts
- Full MSI-X interrupt support with multiple vectors
- Interrupt coalescing for performance optimization
- Low-latency interrupt delivery path

## Transport Layer

### ZeroMQ Integration
- Asynchronous message passing between QEMU and Vivado
- High-performance socket communication
- Support for multiple simulation instances

### NIC Bridge
- Network interface card abstraction layer
- Packet processing pipeline simulation
- Integration with virtual network infrastructure

## Benefits

1. **Reproducible Testing**: Consistent simulation environment across development machines
2. **No RTL Changes**: Test hardware designs without modifications
3. **Early Integration**: Verify software-hardware interaction before tape-out
4. **Debugging**: Full visibility into both software and hardware state

## Technical Stack

- **Host Emulation**: QEMU
- **RTL Simulation**: Xilinx Vivado
- **IPC**: ZeroMQ
- **Languages**: C, Verilog, Python
