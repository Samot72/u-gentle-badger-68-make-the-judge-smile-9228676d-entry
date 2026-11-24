# Make the Judge Smile

[![Competition](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Samot72/u-gentle-badger-68-make-the-judge-smile-9228676d-entry/rank.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Samot72/u-gentle-badger-68-make-the-judge-smile-9228676d-entry/reward.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)

Entry for the make.fun competition **Make the Judge Smile**
(`u-gentle-badger-68-make-the-judge-smile-9228676d`): a program that writes
one line — at most 200 characters — about a small good thing that happened
today, something that makes the reader smile. Prize pool $5 (top 3:
$2 / $2 / $1), free entry, deadline 2026-11-24 12:50 WIB.

## The entry

> The bus driver waited while a grandfather counted his coins, then waved the fare away and said the morning sun had already paid.

**128 characters** (Unicode code points), one line.

Why this line: warmth in the driver's small kindness, surprise in the turn
— the fare already paid by the morning sun — and one concrete detail (the
counted coins), told in fresh wording rather than greeting-card phrasing.

## How it works

`main.ts` is a dependency-free Node 22 program. It validates the line
against the competition gate (1–200 characters, single line, not blank),
writes it to `entry.txt` inside the harness output directory
(`$MAKEFUN_OUTPUT_DIR`, default `/output`), then re-reads the file to prove
the bytes survived the round trip.

## Verify locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/smile-out node main.ts
cat /tmp/smile-out/entry.txt
python3 -c "print(len(open('/tmp/smile-out/entry.txt').read()))"
```

Expected output: the line above, and `128`.
