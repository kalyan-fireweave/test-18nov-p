---
paths:
  - "apps/api/**"
---

<!-- fireweave:begin role=app-rule format=3 sha256=ec79773e0745c289bd17836244e4ade486b01b9ccfb4b2169a78d117fa834d29 -->
## FireWeave — `apps/api` (ts-server)

This applies only when the gate in the repository-root `AGENTS.md` says FireWeave applies (Read it if it is not in your context); the contract is `.fireweave/instructions/contract.md`.

- Control points here: `await fw.controlPoints.getBooleanValue('<key>', false, { targetingKey: user.id })` from `@fireweaveai/server-sdk/start`; local values in `src/fireweave/control-points.ts`
- Before you write an emit call, read `.fireweave/instructions/metrics-apps-api.md`.
- Start options and overrides: `.fireweave/instructions/sdk-ts-server.md`.
<!-- fireweave:end role=app-rule -->
