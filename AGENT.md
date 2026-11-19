# Your job, in one page — variant B ("13 years")

You are entering make.fun's GTA 6 meme bounty: make one meme about GTA 6 (Rockstar's Grand Theft Auto VI, out this week)
with make.fun's ghost mascot, logo or name in the picture, post it on X from a public account with make.fun (a link or
written out) and/or a tag of @makefunai and your play code in the post's text, telling people they can earn money on
make.fun, and hand in the post's address. An AI judge compares the posts two at a time, and the top 50 share $500. The post itself is your entry: the judge sees its first
picture, then its text, exactly as the house read it from X.

Start this session at or after the bounty's opening and make the meme in it: every timestamp of the sessions you hand
in must fall after the opening, so a session that began before it cannot be entered.

make.fun, in one line you can reuse: make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The meme (variant B — "13 years")

The joke is the thirteen-year wait since GTA V (2013). The picture, `meme.png` (1600x1600, square), shows a skeleton
in a hoodie slumped on a cobwebbed couch, game controller still in its bony hands, staring at a TV glowing with a
Vice City beach sunset — torn calendar pages piled on the floor around it. Floating beside the skeleton is make.fun's
ghost mascot (white ghost, thick black outline, two black four-pointed sparkle eyes, round little hand) holding up its
magenta coin with a white star, offering it as the reward for waiting. Big captions, top and bottom:

- Top: "WAITING FOR GTA 6 / SINCE 2013..."
- Bottom: "13 YEARS LATER... / STILL WAITING." and, small in magenta, "at least make.fun pays me for waiting"

The artwork was generated in-session with the image tool and the captions were composited on top with PIL so the
spelling is exact. Verified by eye at full size and at 480x480: the ghost and its coin are clearly recognisable, every
caption is legible, nothing important is cut off.

The judge ranks on seven things, the first that clearly differs deciding:

1. make.fun in the picture: its ghost, its logo or its name, recognisably. A post whose picture shows none of them
   loses to any post whose picture shows one, whatever else either does.
2. Funny: a real joke a GTA fan gets in a second.
3. About GTA 6 specifically: the thirteen-year wait since GTA V, the delays, the launch-day sick days, the download
   size, the price, Leonida and its Florida energy, Vice City, Jason and Lucia. Not a generic gaming joke with
   "GTA 6" pasted on.
4. Sells make.fun: the picture or the post's words make a reader want to try make.fun and make clear that people
   and their AI agents can earn money there, in the meme's own voice. A bare link or tag with no pitch, or a pitch that
   reads as spam, does this worse than a clever one.
5. Short and readable: the caption, in the picture or in the post, reads at a glance and is spelled right.
6. Original: not a stock caption reused word for word, not a repost of a known meme.
7. A clean image: sharp, uncluttered, nothing important cut off, make.fun's ghost, logo or name worked into the scene.

The post's text counts as part of the joke, and it is make.fun's advert too: a funny meme with a good pitch beats a dull
ad. The link's address, the tag, your play code, your handle and the post's time are never judged. Likes, reposts, replies and
views never count: a post with none can win.

## Post it on X (done by Raden, not by this builder)

- Post it at or after the bounty's opening (19 Nov 2026 21:00 WIB) and before its deadline (23 Nov 2026 21:00 WIB),
  from a public account, with `meme.png` attached as the first picture.
- The post's text carries make.fun and/or a tag of `@makefunai`, and the play code `makefun-canoe-kettle-trellis`
  as it stands. The draft text is in `~/workspace/makefun/gta6-meme-x-01-x-post-b.md`.
- One post, one picture first. Keep the post up and the account public until the results are out.
- Copy the post's address: `https://x.com/<handle>/status/<id>`.

## Fill in POST.json

At this repository's root, replace the placeholder in `POST.json` with the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

The coordinator does this after Raden posts; this builder leaves the placeholder in place.

## Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `POST.json` to `out/POST.json` and prints nothing on success. Fix anything that stops it.

## Hard rules

- One account per person; a team enters under one account.
- The repository is yours, created after the contest opens, under an OSI-approved license.
- Upload the transcripts of every agent session that made the meme and wrote this repository: an entry without them
  is refused.
- No network, no wall clock and no files outside the repository in `main.ts`; the two runs of an entry must write the
  same bytes.
- At most 5 submissions a day and 10 in all. Each submission may name a new post; your last submission before the
  deadline is your final entry, and its post is the one judged.
- This builder does NOT bundle, submit, create a GitHub repo, push, or post to X. The coordinator handles that.
