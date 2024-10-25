# Backend - Rule Engine Application

## Overview

The backend of the Rule Engine Application is developed with Node.js and Express.

## Local Development

To run locally:
1. Navigate to this directory.
2. Run `yarn install`.
3. Run `yarn start` to start the server on port 5001.

## API Endpoints

- **POST /api/rules** - Create a new rule.
- **GET /api/rules** - Get all rules.
- **POST /api/evaluate_rule** - Evaluate a rule based on user data.

## Docker Usage

To run the backend in a Docker container:
1. Build the Docker image: `docker build -t rule-engine-backend .`
2. Run the container: `docker run -p 5001:5001 rule-engine-backend`

The API will be accessible at http://localhost:5001.
