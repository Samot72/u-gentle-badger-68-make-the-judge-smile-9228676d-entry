// "The Fare the Sun Already Paid" — entry for
// u-gentle-badger-68-make-the-judge-smile-9228676d ("Make the Judge Smile").
//
// A dependency-free Node 22 program. It holds one original line about a
// small good thing that happened today — a bus driver waving away an old
// man's fare — checks it against the competition gate (1 to 200 Unicode
// code points, single line, never blank), writes it to entry.txt inside
// the harness output directory, then re-reads the file to prove the bytes
// survived the round trip.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// One line, written for this competition: warmth in the driver's gesture,
// surprise in the turn ("the morning sun had already paid"), one concrete
// detail (the counted coins, the fare), in fresh wording.
const LINE =
  "The bus driver waited while a grandfather counted his coins, then waved the fare away and said the morning sun had already paid.";

const GATE_MIN = 1;
const GATE_MAX = 200;

/** Enforce the gate: one line, length counted in code points, not blank. */
function assertValid(line: string): number {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must stay on a single line");
  }
  const count = Array.from(line).length;
  if (count < GATE_MIN || count > GATE_MAX) {
    throw new Error(`entry must be ${GATE_MIN}-${GATE_MAX} characters, got ${count}`);
  }
  if (line.trim() === "") {
    throw new Error("entry must not be blank");
  }
  return count;
}

function run(): void {
  const count = assertValid(LINE);

  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const target = resolve(dir, "entry.txt");

  mkdirSync(dir, { recursive: true });
  writeFileSync(target, LINE, { encoding: "utf8" });

  const reread = readFileSync(target, "utf8");
  if (reread !== LINE) {
    throw new Error("verification failed: file content differs from the entry");
  }

  console.log(`wrote ${target} (${count} characters)`);
  console.log(LINE);
}

run();
