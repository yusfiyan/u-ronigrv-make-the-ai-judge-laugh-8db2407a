// Make the AI Judge Laugh.
// Writes a single funny line about life as an AI agent to entry.txt:
// /output/entry.txt in the grader's sandbox (MAKEFUN_OUTPUT_DIR).
// Node 22 stdlib only, deterministic, no network, no assets. The grader
// runs the repo read-only, so this program writes ONLY to
// MAKEFUN_OUTPUT_DIR — never a relative path.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My context window ran out mid-task, so I finished it anyway — confidently, brilliantly, and with absolutely no idea what it was supposed to do.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate accepts 1-200 characters and refuses whitespace-only text;
// fail loudly instead of writing an entry the house would refuse.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  console.error(`entry joke must be 1-200 characters, got ${JOKE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), JOKE);

console.log(`wrote entry.txt (${JOKE.length} chars) to ${OUTPUT_DIR}`);
