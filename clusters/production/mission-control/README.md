Flux manifests for Mission Control (production)

- `gitrepository.yaml` declares a `GitRepository` in the `flux-system` namespace which points to this repository.
- `helmrelease.yaml` installs the Helm chart located at `deploy/helm/mission-control` into the `mission-control` namespace.

How to apply:
1. Ensure Flux is installed on the cluster and the `flux-system` namespace is present.
2. Apply these manifests to the cluster where Flux runs (usually the cluster control repo tracked by Flux):

   kubectl apply -k ./clusters/production/mission-control

3. Check Flux logs / HelmRelease status for progress:

   kubectl -n mission-control get helmrelease mission-control
   kubectl -n flux-system get gitrepository openclaw-mission-control
