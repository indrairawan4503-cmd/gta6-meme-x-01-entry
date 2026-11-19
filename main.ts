// gta6-meme-x-01 entry, variant B ("13 years") — Node 22, standard library only.
// The entry itself is the X post: this program only copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. The house then
// reads the post from X (its first picture, meme.png, and its text) and hands
// that dossier to the judge. Nothing this program writes is judged.
//
// POST.json still holds the starter placeholder here: the coordinator fills it
// with the real post address (https://x.com/<handle>/status/<id>) after Raden
// posts the meme from his phone. Until then the gate refuses it, by design.
// (The Node MODULE_TYPELESS_PACKAGE_JSON warning on a bare run is harmless:
// the file is parsed as an ES module either way, exactly like the starter.)
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
