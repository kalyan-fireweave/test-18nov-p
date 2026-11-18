<!-- fireweave:begin role=agents-core format=3 sha256=f82a3c5e8ff0ec70c283b19d20cab6d2112eb1c7f034ce4107bd8e2f25e0b7b9 -->
## FireWeave

FireWeave's instructions apply only if a FireWeave hook said `FireWeave: ON` in this conversation, `fw tool agent-context` prints state `on`, or you run in CI or as a FireWeave-hosted reviewer. Then read `.fireweave/instructions/contract.md`, unless a hook gave it to you, and follow it.

Otherwise ignore FireWeave: write no manifest or control point, run none of its tools, ignore `.fireweave/` instruction files.

State `ask`: ask the person once to sign in (`fw login`) or skip; after a skip, ignore FireWeave for this conversation.

`"agentInstructions": "enforced"` in `.fireweave/project.json` (state `sign-in`): FireWeave always applies. Classify the task first; questions, brainstorming and infra-only work may proceed, but for a change ask the person to sign in (`fw login`, then `fw init` if needed) and implement nothing until they have.

Run FireWeave's CLI as `cliPath` from `.fireweave/local.json` when it is set and that file exists; otherwise as `fw`.
<!-- fireweave:end role=agents-core -->
