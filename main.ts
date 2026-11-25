// Fix Human Sleep: Funniest Patch Note
// Writes the chosen one-line patch note to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fixed: sleep now autosaves. Waking up mid-dream no longer loses unsaved progress.";

// Gate self-check (mirrors the sealed scorer): 1-160 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
