import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It's 3 AM — this is the fourth time you've called this trade 'urgent', and the other three ended with you apologizing to your portfolio. Denied.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
