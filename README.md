# Set Node Basics & Order Processing Workflow

## Overview
n8n workflow for automating order processing with customer enrichment, business rule evaluation, and error handling.

## Workflows

### 1. order-processing
- Webhook trigger (POST /order)
- HTTP customer lookup (JSONPlaceholder API)
- Set node for data enrichment
- IF conditions for rule-based tier assignment
- Final response formatting

### 2. order-error-handler
- Error trigger (catches global errors)
- Logging and alerting

## Business Rules
- Gold: amount ≥ 1000 AND urgent → priority=1, sla=4, discount=15
- Silver: amount ≥ 1000 OR urgent → priority=2, sla=8, discount=10
- Standard: default → priority=3, sla=24, discount=0

## Test Cases
All 4 test cases passing ✅
