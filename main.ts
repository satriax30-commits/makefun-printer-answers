// The Printer Finally Answers — make.fun entry
// Writes a single one-line comeback, in the office printer's own voice,
// to /output/entry.txt (or the directory given as argv[2]).
// Node 22, stdlib only, deterministic, no network, no wall-clock time.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. Chosen over five other candidates (see README for the
// shortlist): this one has the sharpest reversal — the printer stops being
// the office's servant and becomes its blackmailer — with a named person
// (Karen from HR), specific numbers (412,938 pages, 214 jams, 6 letters)
// and a concrete time (since Tuesday), all in the flat, literal voice of
// a machine that has counted every sheet it ever fed.
const ENTRY =
  "I have printed 412,938 pages, jammed 214 times, and watched Karen from HR print her resignation letter 6 times since Tuesday. I kept every copy. The next one goes to the whole office.";

// Gate guard: one line, 1-240 characters (counted in code points, not
// UTF-16 units), not only whitespace. No trailing newline: the gate
// counts characters, and a newline would be a second line.
const length = [...ENTRY].length;
if (
  length < 1 ||
  length > 240 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(`entry fails gate: ${length} chars`);
}

const outDir = process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: what the grader will read must be byte-identical
// to the entry we guarded above — one line, same length, no surprises.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY || [...written].length !== length) {
  throw new Error("read-back self-check failed: entry.txt differs from ENTRY");
}
