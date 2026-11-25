[![make.fun · u-gentle-badger-68-monday-morning-punchlines-709645dc](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/imnotripper/monday-morning-punchlines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/imnotripper/monday-morning-punchlines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)

# Monday Morning Punchlines

One joke about Monday mornings, for the [Monday Morning Punchlines](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc) bounty on make.fun.

> My Monday alarm didn't ring — it sent a calendar invite: 'Disappointment, 7 AM.'

## How it works

`main.ts` is a deterministic, zero-dependency Node emitter. It writes the joke above to `/output/entry.txt` (80 characters, no trailing newline), then reads the file back and verifies it byte-exact before exiting, throwing if the line falls outside the 1–200 character gate.

## How to run

```sh
node main.ts
```

Requires Node 22.18+ (TypeScript runs natively). The entry it writes is 80 characters, inside the competition's 200-character limit. The entry is written to `/output/entry.txt` at grade time; it is not committed to this repo.

## Candidates

Eight jokes were generated and duelled pairwise against the judge's rubric (Monday-specificity, real laugh, surprise, economy, freshness). The full list and the winner's rationale are in [CANDIDATES.md](CANDIDATES.md).
