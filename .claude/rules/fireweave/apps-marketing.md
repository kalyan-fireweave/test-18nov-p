---
paths:
  - "apps/marketing/**"
---

<!-- fireweave:begin role=app-rule format=3 sha256=0e5125f309a8a11073c7fab6514c23132a66f14b0b9ad78ddc75a40dc2211c5a -->
## FireWeave — `apps/marketing` (web)

This applies only when the gate in the repository-root `AGENTS.md` says FireWeave applies (Read it if it is not in your context); the contract is `.fireweave/instructions/contract.md`.

- Control points here: `fw.controlPoints.getBooleanValue('<key>', false)` from `@fireweaveai/web-sdk/start` (no per-call context); local values in `src/fireweave/control-points.ts`
- Before you write an emit call, read `.fireweave/instructions/metrics-apps-marketing.md`.
- Start options and overrides: `.fireweave/instructions/sdk-web.md`.
<!-- fireweave:end role=app-rule -->
