Mission Control Worker Helm chart

This chart deploys the RQ worker for Mission Control using the same backend image.

Defaults in `values.yaml` mirror the local Docker Compose setup and expect:

- PostgreSQL service: `mission-control-postgres` on port `5432`
- Redis service: `mission-control-redis` on port `6379`

The worker runs:

```text
python scripts/rq-docker worker
```

Environment variables like `DATABASE_URL`, `RQ_REDIS_URL`, and `LOCAL_AUTH_TOKEN` are provided via `values.env`. Ensure you create the `mission-control-secrets` Secret with a `LOCAL_AUTH_TOKEN` key in the target namespace.
