# Cognito Innovations Stack

This repository contains a Next.js frontend, an Express/TypeScript backend, and supporting MySQL and Redis services. Docker Compose orchestrates all containers for a consistent local environment.

## Prerequisites

- Docker Desktop 4.0+ (includes Docker Compose v2)

## Environment Variables

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```
2. Adjust secrets (database credentials, API version, etc.) as needed.

Compose automatically loads variables from `.env`. The backend uses port `3001` by default to avoid conflicts with the Next.js dev server.

## Running the Stack

```bash
docker compose up --build
```

Available endpoints:

- Frontend: <http://localhost:3000>
- Backend API: <http://localhost:3001>
- MySQL: `localhost:3306`
- Redis: `localhost:6379`

To stop the stack:

```bash
docker compose down
```

Add `-v` to remove MySQL/Redis volumes when you need a clean slate.
