# sandbox
This is my project for deploy simple app with Terraform and CI/CD with monitoring tools 

# DevOps Sandbox App

This repository is for practicing real-world DevOps workflows in a safe, isolated environment. The goal is to build, test, deploy, monitor and destroy a simple application using modern DevOps tools — without touching any production systems.

## 🧱 What It Does

- Deploys a simple Node.js or Flask web app
- Uses Docker to containerize the application
- Runs GitHub Actions for CI/CD
- Provisions infrastructure with Terraform (e.g., DigitalOcean or K3s)
- Deploys with Docker Compose or Kubernetes
- Integrates monitoring with Grafana Cloud or UptimeRobot
- Supports safe cleanup with `terraform destroy`

## 🛠 Tech Stack

- **GitHub Actions** - CI/CD automation
- **Terraform** - Infrastructure as Code
- **Docker** - Containerization
- **Kubernetes** / **K3s** or **Docker Compose** - Orchestration
- **Grafana Cloud** - Monitoring & dashboards
- **UptimeRobot** - Uptime tracking (optional)

## 🚀 Goals

- Practice end-to-end DevOps workflows
- Gain confidence with automation, deployments, and monitoring
- Learn how to build and tear down environments safely

## 📦 App Example

A minimal "Hello World" app in either Flask or Node.js. The app can be swapped out anytime to test different deployments.

