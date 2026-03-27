Mission Control Redis Helm chart

This chart deploys a single Redis instance suitable for Mission Control background work (RQ queue).

Defaults in `values.yaml` mirror the local Docker Compose setup:

- Image: `redis:7-alpine`
- Service: `ClusterIP` on port `6379`

The backend and worker should use an `RQ_REDIS_URL` like:

```text
redis://mission-control-redis:6379/0
```
