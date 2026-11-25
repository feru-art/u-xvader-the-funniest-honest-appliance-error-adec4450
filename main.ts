// The Funniest Honest Appliance Error — make.fun entry
// Writes one line (at most 200 characters) to /output/entry.txt:
// the funniest honest error message an appliance could show.
// The line below is the local-race winner, V1 (25 Nov 2026 14:47 WIB):
// 8/8 duels won vs 8 generic benchmarks (avg game score 0.800) and
// 4-0 in the V1-V5 round-robin (beat V2 0.60, V3 0.70, V4 0.60, V5 0.60).
// A washing machine, unbalanced load: it tried to spin one wet towel,
// lost, and now refuses — flat, put-upon, and true to the fault.
// Twist: "ONE WET TOWEL HAS TAKEN THE WHOLE DRUM HOSTAGE" (criteria 2);
// the refusal to spin is exactly what an unbalanced machine does (3);
// "I REFUSE TO SPIN" is the machine's own flat voice (4); 93 chars, no
// padding, punchline is the last word (5).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "ERROR E04: UNBALANCED LOAD. ONE WET TOWEL HAS TAKEN THE WHOLE DRUM HOSTAGE. I REFUSE TO SPIN.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
