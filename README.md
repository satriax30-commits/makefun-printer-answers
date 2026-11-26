[![make.fun](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/c/u-mang-the-printer-finally-answers-8fbf0907)
[![Rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/satriax30-commits/makefun-printer-answers/rank.svg)](https://make.fun/c/u-mang-the-printer-finally-answers-8fbf0907)
[![Reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/satriax30-commits/makefun-printer-answers/reward.svg)](https://make.fun/c/u-mang-the-printer-finally-answers-8fbf0907)

# makefun-printer-answers

Entry for **The Printer Finally Answers** on make.fun.

A Node 22 program (stdlib only, deterministic, no network) that writes one
single-line comeback, in the office printer's own voice, to
`/output/entry.txt`:

> I have printed 412,938 pages, jammed 214 times, and watched Karen from HR print her resignation letter 6 times since Tuesday. I kept every copy. The next one goes to the whole office.

Run it with:

```sh
node main.ts
```

For local testing, the output directory can be given as the first argument
(or via `MAKEFUN_OUTPUT_DIR`).

## Candidates considered

Six one-line candidates were written and measured against the winning
patterns (full character budget, concrete nouns, one number + one named
thing + one concrete time, twist in the last clause, narrator = the printer):

| # | Chars | Premise | Verdict |
|---|-------|---------|---------|
| C1 | 185 | Jam as deliberate protest; make the thumper apologise to the tray | Strong, but the thumper is unnamed and the tray apology is the only twist |
| C2 | 197 | Error 0xE3 means "I am tired"; the code is not the error, you are | Rejected — ends on a scold, not a reversal |
| C3 | 189 | 311 thumps counted; the printer knocks back | Good voice, but one premise only, no escalation |
| C4 | 177 | Printer files for annual leave; replacement is a fax machine | Rejected — fax-machine punchline is the first idea in this frame |
| **C5** | **183** | **Printer kept every copy of Karen's resignation letter; the next one goes to the whole office** | **Chosen — three beats, blackmail reversal in the last clause, named person + numbers + time** |
| C6 | 177 | E-04 is printer for "I ate your report"; bring biscuits | Rejected — last clause is a garnish, not a twist |
