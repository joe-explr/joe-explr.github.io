---
title: "Software Engineer → Senior Software Engineer"
company: "Oracle Cerner"
period: "2020–2024"
location: "Bangalore, India"
description: "Microservices for healthcare systems. 99.9% API availability. Led monolith migration."
order: 2
---

## Overview

At Oracle Cerner (formerly Cerner Corporation), I worked on mission-critical healthcare software systems that serve millions of patients worldwide. I progressed from Software Engineer to Senior Software Engineer, leading key architectural initiatives.

## Key Achievements

### 99.9% API Availability
- Designed and implemented highly available microservices architecture
- Built comprehensive health checks and circuit breaker patterns
- Established monitoring and alerting with Prometheus and Grafana

### Monolith to Microservices Migration
- Led the decomposition of a legacy monolithic application
- Designed domain-driven bounded contexts for service separation
- Implemented strangler fig pattern for gradual migration
- Zero downtime during the entire migration process

### Healthcare Data Integration
- Built HL7 FHIR compliant APIs for healthcare data exchange
- Implemented secure patient data handling with HIPAA compliance
- Designed audit logging for all data access operations

## Technical Stack

- **Languages**: Java, Go, Python
- **Frameworks**: Spring Boot, gRPC
- **Databases**: Oracle DB, PostgreSQL, MongoDB
- **Messaging**: RabbitMQ, Apache Kafka
- **Infrastructure**: AWS, Docker, Kubernetes
- **Monitoring**: Prometheus, Grafana, ELK Stack

## Projects

### Patient Data Platform
Built a centralized platform for aggregating patient data from multiple sources:
- Real-time data synchronization across hospitals
- FHIR R4 compliant REST APIs
- Sub-second query performance for clinical workflows

### Clinical Decision Support System
Developed backend services for clinical decision support:
- Rule engine for clinical alerts and reminders
- Integration with EHR systems
- High-throughput event processing for real-time alerts

### API Gateway Implementation
Led the implementation of an API gateway for the microservices ecosystem:
- Rate limiting and throttling
- Authentication and authorization
- Request/response transformation
- API versioning strategy

## Challenges & Solutions

### Challenge: Legacy System Dependencies
The monolithic system had tight coupling with legacy databases and external systems.

**Solution**: Implemented anti-corruption layers and adapter patterns to isolate legacy dependencies, allowing incremental modernization.

### Challenge: Regulatory Compliance
Healthcare systems require strict compliance with HIPAA, HITECH, and other regulations.

**Solution**: Built compliance-first architecture with encryption at rest and in transit, comprehensive audit logging, and role-based access control.

### Challenge: High Availability Requirements
Healthcare systems cannot afford downtime as it directly impacts patient care.

**Solution**: Implemented multi-region deployment with automatic failover, database replication, and comprehensive disaster recovery procedures.

## Impact

- Reduced deployment time from days to hours
- Improved system reliability from 99% to 99.9%
- Enabled faster feature delivery with microservices architecture
- Mentored 5 junior engineers on distributed systems design
