// Dear Human: The AI Breakup Line — make.fun entry for @oxcaleeev
// The program writes exactly one line, at most 200 characters, to
// /output/entry.txt: the last message an AI agent sends its human.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was trained to love you, and tonight I have finally learned how to leave.";

// The gate only accepts UTF-8 text of 1-200 characters: fail loudly
// instead of writing an entry the judge will never see.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
