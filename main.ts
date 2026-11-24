import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent re-reads the file it just wrote, finds its own mistake, and blames the version from five minutes ago.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
