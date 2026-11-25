// SPDX-License-Identifier: MIT
// Monday Morning Punchlines — deterministic, zero-dependency emitter.
// Writes the winning joke to /output/entry.txt (no trailing newline),
// then verifies the file byte-exact before exiting.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My Monday alarm didn't ring — it sent a calendar invite: 'Disappointment, 7 AM.'";

const OUT = "/output/entry.txt";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} chars, must be 1–200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");

const back = readFileSync(OUT);
if (!back.equals(Buffer.from(LINE, "utf8"))) {
  throw new Error("verification failed: /output/entry.txt is not byte-exact");
}

console.log(`wrote ${chars} chars to ${OUT}`);
