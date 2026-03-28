Mission Control Frontend Helm chart

Defaults in `values.yaml`. Update image repository/tag before deploying, or pass overrides through your HelmRelease.

Example override in a HelmRelease:

```yaml
values:
  image:
    repository: ghcr.io/Tororivas/openclaw-mission-control-frontend
    tag: v1.2.3
  ingress:
    enabled: true
    hosts:
      - host: mission-control.local
        paths:
          - path: /
            pathType: Prefix
```
