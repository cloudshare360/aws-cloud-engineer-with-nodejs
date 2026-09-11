---
name: aws-cloud-engineering
description: Learn and apply AWS cloud engineering concepts and services, including EC2, S3, IAM, VPC, RDS, Lambda, API Gateway, and deployment best practices.
---

# AWS Cloud Engineering

This skill codifies the AWS learning track from `readme.md` section 7.

## Core AWS Services to Learn

| Category | Services |
|---|---|
| Compute | EC2, Lambda, Elastic Beanstalk, ECS/EKS (basics), Auto Scaling |
| Storage | S3, EBS, Glacier |
| Networking | VPC, Route 53, CloudFront, ELB |
| Database | RDS, DynamoDB, ElastiCache |
| Security & Identity | IAM, Cognito, Secrets Manager, KMS |
| Monitoring | CloudWatch, CloudTrail, X-Ray |
| API & Integration | API Gateway, SQS, SNS, EventBridge |

## Learning Goals (`readme.md` section 7)

- Host frontend applications on AWS (S3 + CloudFront, or Amplify).
- Deploy backend APIs on AWS infrastructure (EC2, Elastic Beanstalk, or Lambda + API Gateway).
- Configure identity, security, and networking.
- Connect applications to managed databases (RDS).
- Understand monitoring, logging, and scaling.
- Learn serverless and container concepts.

## AWS Architecture Mindset

- **Frontend/backend separation** — decouple client and server.
- **API Gateway as entry point** — single front door for APIs.
- **Managed storage and databases** — prefer RDS, S3 over self-managed.
- **Security and least-privilege access** — IAM roles and policies scoped to minimum permissions.
- **Observability and maintenance** — logging, monitoring, and alerting from day one.

## Getting Started with AWS

1. Create an AWS account: https://aws.amazon.com/free
2. Set up the AWS CLI:
   ```bash
   aws --version
   aws configure
   ```
3. Use the free tier where possible.
4. Enable MFA on the root account.
5. Create an IAM user with programmatic access for daily work.

## Deployment Patterns

### Deploy a Node.js API
- Option A: EC2 instance serving Express behind a load balancer.
- Option B: Elastic Beanstalk for managed Node.js hosting.
- Option C: Lambda + API Gateway for serverless (requires refactoring handlers).

### Deploy a Frontend App
- Option A: S3 static hosting + CloudFront CDN.
- Option B: S3 + Route 53 custom domain.
- Option C: AWS Amplify for CI/CD.

## Best Practices

- Use environment variables for configuration.
- Never hardcode secrets — use Secrets Manager or Parameter Store.
- Enable CloudWatch logging and alarms.
- Use IAM roles instead of access keys where possible.
- Tag resources for cost tracking.

## Related Documentation

- `readme.md` — Section 7 (AWS Cloud Engineer Track).
- `How-To-Do/aws/` — placeholder for future AWS hands-on guides.
- `.kilo/skills/fullstack-development/` — full-stack integration.

## Daily Discipline

- Track time and costs in the free tier dashboard.
- Document each service explored.
- Commit infrastructure-as-code or notes daily.
