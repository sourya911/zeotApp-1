# Rule Engine Application

A full-stack Rule Engine application that allows users to create, manage, and evaluate rules. The frontend is built with **React**, while the backend is developed using **Node.js** and **Express**.

## Table of Contents
- [Features](#features)
- [Dockerization](#dockerization)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Accessing the Application](#accessing-the-application)

---

## Features
- Create and manage rules based on user-defined criteria.
- Evaluate rules dynamically against a set of attributes.
- User-friendly interface for interacting with rules.

---

## Dockerization
- docker build -t exam-frontend .
- docker run -p 3000:3000 exam-frontend

### Prerequisites
- **Docker** and **Docker Compose** should be installed on your system.
- Node.js and npm installed
- Docker and Docker Compose installed

### Getting Started
1. **Clone the Repository**
   ```bash
   git clone https://github.com/sourya911/zeotapp-1
   cd rule-engine-application

## Project Structure
```plaintext
rule-engine-application/
├── frontend/                        # React frontend
│   ├── src/                         # React source files
│   └── Dockerfile                   # Dockerfile for frontend
├── backend/                         # Express backend
│   ├── src/                         # Express source files
│   └── Dockerfile                   # Dockerfile for backend
├── docker-compose.yml               # Docker Compose configuration
├── README.md                        # Main project documentation
└── .gitignore                       # Ignored files for version control
```
## Usage
- View and manage rules through the frontend interface.
- Evaluate rules based on user-defined criteria and receive results in real time.

## Environment Variables
- MONGO_URI=mongodb+srv://user321:OMsgk20MbCMhhEUA@cluster0.nfnw30m.mongodb.net/rule_engine_db?retryWrites=true&w=majority&appName=Cluster0
- PORT=5001




