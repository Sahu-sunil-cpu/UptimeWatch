# Uptime Watch

Uptime Watch is a distributed website and DNS monitoring platform built as a TypeScript monorepo. It periodically checks monitored websites, records uptime and response-time data, verifies DNS resolution, stores monitoring ticks in PostgreSQL, and sends email alerts when a monitored resource goes down.

The project is designed around background workers and Redis Streams rather than performing monitoring work directly inside the API.

## Features

- Website uptime monitoring
- Website response-time tracking
- DNS monitoring and verification
- DNS response-time tracking
- Incident/alert creation
- Email notifications through Mailgun
- PostgreSQL persistence with Prisma
- Redis Streams for asynchronous job processing
- Separate workers for monitoring, persistence, DNS checks, scheduling, and notifications
- React dashboard for monitors, incidents, DNS monitors, and on-call views
- Dockerfiles and Docker Compose configuration for local containerized deployment
- TypeScript monorepo managed with pnpm and Turborepo

## Architecture

```text
                         ┌─────────────────────┐
                         │   React + Vite UI    │
                         │     :8080            │
                         └──────────┬──────────┘
                                    │ HTTP
                                    ▼
                         ┌─────────────────────┐
                         │   Express API       │
                         │     :3001           │
                         └──────────┬──────────┘
                                    │
                         ┌──────────┴──────────┐
                         ▼                     ▼
                  ┌──────────────┐      ┌──────────────┐
                  │  PostgreSQL  │      │    Redis     │
                  │    Prisma    │      │ Redis Streams│
                  └──────────────┘      └──────┬───────┘
                                               │
                 ┌─────────────────────────────┼─────────────────────────┐
                 │                             │                         │
                 ▼                             ▼                         ▼
          ┌─────────────┐              ┌─────────────┐           ┌─────────────┐
          │   Pusher    │              │  Web Worker │           │  DNS Worker │
          │ schedules   │─────────────►│ HTTP checks │           │ DNS checks  │
          │ monitor jobs│              └──────┬──────┘           └──────┬──────┘
          └─────────────┘                     │                         │
                                              └──────────┬──────────────┘
                                                         ▼
                                                  ┌─────────────┐
                                                  │  DB Worker  │
                                                  │ persist     │
                                                  │ ticks/alerts│
                                                  └─────────────┘

                           Redis notification stream
                                      │
                                      ▼
                              ┌─────────────┐
                              │Alert Worker │
                              │  Mailgun    │
                              └─────────────┘
```

### Monitoring flow

1. The API creates and manages website/DNS monitors.
2. `worker-pusher` periodically reads active monitors from PostgreSQL.
3. It publishes monitoring jobs to Redis Streams.
4. `worker-web` consumes website jobs and performs HTTP checks.
5. `worker-dns` consumes DNS jobs and performs DNS verification.
6. Monitoring results are published to the database stream.
7. `worker-db` persists ticks and creates alert records.
8. Failed checks are also published to the notification stream.
9. `worker-alert` consumes notification jobs and sends email through Mailgun.
10. The frontend reads the stored monitoring data through the API.

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router
- TanStack React Query
- Tailwind CSS
- shadcn/Radix UI components
- Recharts

### Backend
- Node.js
- Express 5
- TypeScript
- JWT authentication
- bcrypt
- Zod
- cookie-parser
- CORS

### Data and messaging
- PostgreSQL
- Prisma ORM
- Redis
- Redis Streams

### Infrastructure
- Docker
- Docker Compose
- Turborepo
- pnpm
- GitHub Actions

### Notifications
- Mailgun

## Repository Structure

```text
.
├── apps/
│   ├── api/                 # Express REST API
│   ├── frontend/            # React + Vite frontend
│   ├── worker-alert/        # Email notification worker
│   ├── worker-db/           # Persists monitoring results
│   ├── worker-dns/          # DNS monitoring worker
│   ├── worker-pusher/       # Publishes scheduled monitoring jobs
│   └── worker-web/          # Website/HTTP monitoring worker
│
├── packages/
│   ├── db/                  # Prisma schema/client
│   ├── redis-stream/        # Redis Streams abstraction
│   ├── package-helper/      # Shared monitoring helpers
│   ├── ui/                  # Shared UI components
│   ├── eslint-config/       # ESLint configuration
│   └── typescript-config/   # TypeScript configurations
│
├── docker/
│   ├── Dockerfile.api
│   ├── Dockerfile.frontend
│   ├── Dockerfile.worker-alert
│   ├── Dockerfile.worker-db
│   ├── Dockerfile.worker-dns
│   ├── Dockerfile.worker-pusher
│   └── Dockerfile.worker-web
│
├── docker-compose.yml
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

## Prerequisites

For local development without Docker:

- Node.js 18 or newer
- pnpm 9
- PostgreSQL
- Redis

For Docker:

- Docker Engine
- Docker Compose

Check the installed versions:

```bash
node --version
pnpm --version
docker --version
docker compose version
```

## Installation

Clone the repository and enter the project directory:

```bash
git clone <your-repository-url>
cd uptime
```

Install dependencies:

```bash
pnpm install
```

Generate the Prisma client:

```bash
pnpm db:generate
```

## Environment Variables

Do not commit real credentials, database passwords, JWT secrets, or Mailgun API keys.

Create the required environment files from your local configuration.

### API

`apps/api/.env`

```env
JWT_SECRET=replace-with-a-long-random-secret
DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres
```

### Redis

`packages/redis-stream/.env`

```env
REDIS_URL=redis://localhost:6379
```

### Workers

The workers require a unique `WORKER_ID` and the database connection. For example:

`apps/worker-web/.env`

```env
WORKER_ID=worker-web-1
DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres
```

`apps/worker-db/.env`

```env
WORKER_ID=worker-db-1
DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres
```

`apps/worker-dns/.env`

```env
WORKER_ID=worker-dns-1
DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres
```

`apps/worker-pusher/.env`

```env
WORKER_ID=worker-pusher-1
DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres
```

`apps/worker-alert/.env`

```env
WORKER_ID=worker-email-1
API_KEY_1=replace-with-your-mailgun-api-key
```

The exact Mailgun domain/sender is currently configured in `apps/worker-alert/src/index.ts`, so production deployments should move those values into environment variables.

## Database Setup

The project uses Prisma with PostgreSQL.

Start PostgreSQL and make sure `DATABASE_URL` points to it.

Then apply the existing migrations:

```bash
cd packages/db
pnpm exec prisma migrate deploy
cd ../..
```

For development, if you create or modify the Prisma schema and need a new migration:

```bash
cd packages/db
pnpm exec prisma migrate dev
cd ../..
```

Generate the Prisma client whenever the schema changes:

```bash
pnpm db:generate
```

## Running Locally Without Docker

### 1. Start PostgreSQL and Redis

Make sure both services are running:

```text
PostgreSQL: localhost:5432
Redis:      localhost:6379
```

### 2. Start the API

From the repository root:

```bash
pnpm start:api
```

The API listens on:

```text
http://localhost:3001
```

### 3. Start the frontend

In another terminal:

```bash
pnpm start:frontend
```

The frontend runs on:

```text
http://localhost:8080
```

### 4. Start the workers

Open separate terminals:

```bash
pnpm start:worker-pusher
```

```bash
pnpm start:worker-web
```

```bash
pnpm start:worker-dns
```

```bash
pnpm start:worker-db
```

```bash
pnpm start:worker-alert
```

The workers communicate through Redis Streams, so Redis must be running before starting them.

## Running With Docker Compose

The repository contains Dockerfiles for the API and each worker, plus a Compose configuration.

Start the infrastructure and application services with:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up --build -d
```

View logs:

```bash
docker compose logs -f
```

View a specific service:

```bash
docker compose logs -f api
```

Stop the stack:

```bash
docker compose down
```

To also remove the Redis volume:

```bash
docker compose down -v
```

### Important Docker Compose notes

The current `docker-compose.yml` in this repository has a few development-stage limitations:

1. The frontend service is commented out, so the frontend is not started by Compose.
2. `worker-web` currently references `Dockerfile.worker-db` instead of `Dockerfile.worker-web`. Change it to:

```yaml
dockerfile: docker/Dockerfile.worker-web
```

3. The API CORS configuration currently allows `http://localhost:8080`, which is correct for local development but should be changed/configured for a deployed frontend.
4. PostgreSQL persistence is commented out in Compose. Enable a Postgres volume if you want database data to survive container recreation.
5. The alert worker requires a valid Mailgun API key and currently contains Mailgun sandbox configuration in source code.

After making these adjustments, Compose can be used as the main local deployment method.

## Docker Services

| Service | Purpose | Port |
|---|---|---:|
| `postgres` | PostgreSQL database | `5432` |
| `redis` | Redis + Streams | `6379` |
| `api` | REST API | `3001` |
| `frontend` | React/Vite UI | `8080` |
| `worker-pusher` | Publishes monitoring jobs | - |
| `worker-web` | Website HTTP monitoring | - |
| `worker-dns` | DNS monitoring | - |
| `worker-db` | Persists ticks and alerts | - |
| `worker-alert` | Email notifications | - |

## API

The API is built with Express and exposes versioned routes under:

```text
/api/v1
```

Main route groups include:

```text
/api/v1/core
/api/v1/user
```

The user routes handle authentication, while core routes provide monitor-related functionality.

## Monitoring Workers

### Worker Pusher

`worker-pusher` periodically queries PostgreSQL for active website and DNS monitors and publishes jobs to Redis Streams.

Current scheduling interval:

```text
30 seconds
```

### Web Worker

`worker-web` consumes website monitoring jobs and performs HTTP requests.

It records:

- Up/Down status
- Response time
- User/monitor association
- Region information

A website is currently considered `Up` when the HTTP response status is `200`.

### DNS Worker

`worker-dns` performs DNS monitoring by:

- Resolving authoritative nameservers
- Querying the authoritative server
- Querying a public resolver
- Comparing returned IP information
- Measuring DNS response time

The worker also uses `ipinfo.io` to compare organization information for the resolved IP addresses.

### Database Worker

`worker-db` consumes database jobs and stores:

- Website monitoring ticks
- DNS monitoring ticks
- Alert records

This keeps database writes separate from the monitoring workers.

### Alert Worker

`worker-alert` consumes notification messages and sends email notifications using Mailgun.

## Redis Streams

The system uses Redis Streams as an asynchronous communication layer.

Important streams currently used by the workers include:

```text
uptime:app
uptime:dns1
uptime:db1
uptime:notification
```

Consumer groups allow workers to process messages independently.

This architecture makes it possible to scale monitoring workers separately from the API.

## Database Models

The Prisma schema contains models for:

- `User`
- `Website`
- `WebsiteTick`
- `Dns`
- `DnsTick`
- `DnsRecord`
- `Alerts`
- `Region`

The schema also defines enums for website status, DNS status, alert status, alert type, notification type, and DNS record type.

## CI/CD

GitHub Actions workflows are included under:

```text
.github/workflows/
```

Current workflows cover the API, frontend, and individual workers.

Before using the workflows in a new repository, configure the required repository/environment secrets and deployment targets.

## Useful Commands

Build all packages and applications:

```bash
pnpm build
```

Run development tasks:

```bash
pnpm dev
```

Run type checking:

```bash
pnpm check-types
```

Run linting:

```bash
pnpm lint
```

Format the project:

```bash
pnpm format
```

Generate Prisma client:

```bash
pnpm db:generate
```

## Production Considerations

Before deploying this project publicly, the following should be addressed:

- Move all secrets to environment variables or a secret manager.
- Rotate any credentials that may have been exposed during development.
- Move Mailgun domain/from-address configuration to environment variables.
- Configure production CORS instead of allowing only localhost.
- Add persistent PostgreSQL storage.
- Add Redis persistence if required by the deployment model.
- Add HTTPS/TLS in front of the API and frontend.
- Add proper worker health checks and graceful shutdown handling.
- Add retry/dead-letter handling for failed Redis Stream messages.
- Prevent duplicate alerts for prolonged outages.
- Improve scheduling so monitoring frequency can be configured per monitor.
- Add authentication/rate limiting and production-grade logging.
- Replace hard-coded monitoring regions with configurable worker regions.
- Review DNS verification and external `ipinfo.io` dependency for production reliability.

## Security Notice

The project archive used during development may contain local `.env` files. These should never be committed to a public repository.

If credentials have ever been committed or shared, rotate them before deploying:

- PostgreSQL credentials
- JWT secrets
- Redis credentials, if applicable
- Mailgun API keys
- Any third-party API keys

Use `.env.example` files containing placeholders for documentation and keep real `.env` files ignored by Git.

## Future Improvements

Possible next steps include:

- Configurable monitoring intervals
- Multi-region monitoring
- Better incident lifecycle management
- Retry and exponential backoff
- Alert deduplication
- Slack/Discord/SMS notification integrations
- Public status pages
- Heartbeat monitoring
- Reporting and analytics
- Monitor health history and uptime percentages
- Horizontal worker scaling
- Worker health/metrics endpoints
- Better Redis Stream retry and pending-message handling
- Production-ready Docker images and health checks

