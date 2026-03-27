Mission Control Helm chart

Defaults in `values.yaml`. Update image repository/tag before deploying, or pass overrides through your HelmRelease.

Example override in a HelmRelease:

values:
  image:
    repository: myregistry.io/myorg/mission-control
    tag: v1.2.3