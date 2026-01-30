---
title: "University Simple-C Compiler"
description: "Complete compiler with lexical analysis, parsing, semantic checks, LLVM-style IR, and x86 code generation."
tags: ["Compilers", "C++", "LLVM", "x86"]
date: "2024-09-01"
---

## Overview

A fully-featured compiler for a subset of C, implementing the complete compilation pipeline from source code to x86 assembly. Built as part of graduate coursework to understand compiler construction fundamentals.

## Compilation Pipeline

### 1. Lexical Analysis (Lexer)
- Tokenization using finite automata
- Handling of keywords, identifiers, literals
- Comment stripping and whitespace handling
- Line and column tracking for error messages

### 2. Parsing (Parser)
- Recursive descent parser
- Abstract Syntax Tree (AST) construction
- Operator precedence handling
- Error recovery and reporting

### 3. Semantic Analysis
- Symbol table management
- Type checking and inference
- Scope resolution
- Declaration before use verification

### 4. Intermediate Representation
- LLVM-style three-address code
- Static Single Assignment (SSA) form
- Control flow graph construction
- Basic block identification

### 5. Optimization Passes
- Constant folding
- Dead code elimination
- Common subexpression elimination
- Copy propagation

### 6. Code Generation
- x86-64 assembly output
- Register allocation (linear scan)
- Instruction selection
- Stack frame management

## Language Features Supported

- **Data Types**: int, char, arrays, pointers
- **Control Flow**: if/else, while, for, switch
- **Functions**: Declaration, definition, recursion
- **Operators**: Arithmetic, logical, bitwise, comparison
- **Memory**: Stack allocation, pointer arithmetic

## Example

**Input (Simple-C):**
```c
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

**Output (x86-64):**
```asm
factorial:
    pushq   %rbp
    movq    %rsp, %rbp
    cmpl    $1, %edi
    jg      .L2
    movl    $1, %eax
    jmp     .L1
.L2:
    pushq   %rdi
    subl    $1, %edi
    call    factorial
    popq    %rdi
    imull   %edi, %eax
.L1:
    popq    %rbp
    ret
```

## Technical Stack

- **Implementation**: C++
- **Parser Generator**: Hand-written recursive descent
- **IR Format**: LLVM-inspired three-address code
- **Target**: x86-64 Linux
