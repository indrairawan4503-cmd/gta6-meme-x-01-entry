# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/indrairawan4503-cmd/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/indrairawan4503-cmd/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 paid). Variant B — "13 years": a skeleton who has been waiting on the couch since GTA V (2013), controller still in hand, while the make.fun ghost floats in holding its magenta star coin as the reward for waiting. The meme is posted on X from a public account with the play code in its text; the house reads the post and an AI judge compares the posts two at a time.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the posted X post's address) to `out/POST.json`, which is all the program has to do. The picture judged is `meme.png` — the first picture of the post.

---

Entered on [make.fun](https://make.fun/?ref=8dxq9bq0&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards
