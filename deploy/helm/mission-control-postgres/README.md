Mission Control PostgreSQL Helm chart

This chart deploys a single PostgreSQL instance suitable for Mission Control.

Defaults in `values.yaml` mirror the local Docker Compose setup:

- Image: `postgres:16-alpine`
- Database: `mission_control`
- User: `postgres`
- Password: `postgres`

The resulting Service is named based on the release fullname, for example:

- Service: `mission-control-postgres` (if release name is `mission-control`)
- Port: 5432

The backend `DATABASE_URL` should then be set to:

```text
postgresql+psycopg://postgres:postgres@mission-control-postgres:5432/mission_control
```
