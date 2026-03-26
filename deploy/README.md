Helm chart and Flux manifests for Mission Control

This folder contains a small Helm chart for the Mission Control backend and example Flux v2 manifests in `clusters/production/mission-control`.

Quick notes:
- The chart defaults to image.repository: `abhi1693/openclaw-mission-control-backend` and tag `latest`.
- Update `values.yaml` before deploying or set overrides in your Flux HelmRelease.

Usage with Flux (example):
- Push this repo to a Git host accessible by Flux.
- Apply the `clusters/production/mission-control` manifests to your Flux control plane namespace (commonly `flux-system`).
