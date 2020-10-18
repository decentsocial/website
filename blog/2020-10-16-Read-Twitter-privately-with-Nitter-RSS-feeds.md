---
title: "Read Twitter privately with Nitter RSS feeds"
date: 2020-10-16
layout: post.njk
tags:
  - post
  - featured
  - privacy
---

I'm going to outline how you can read Twitter privately, by using a RSS feed reader and Nitter RSS feeds

![nitter-rss-reader](/img/blog/nitter-rss-reader.png)

---

## Nitter

Ever heard about [nitter](https://nitter.decent.social)?

> "Nitter is a free and open source alternative Twitter front-end focused on privacy"

Here you can find [the source code of nitter](https://github.com/zedeus/nitter) and the [nitter.decent.social fork](https://github.com/decentsocial/nitter)

### Nitter RSS feeds

One (of many) powerful features Nitter offers are RSS feeds.

The feed can be retrieved for a single user (e.g. [nitter.decent.social/lexfridman/rss](https://nitter.decent.social/lexfridman/rss)) and contains their last 20 tweets.

So the RSS feed for a specific user can be retrieved at

```
https://nitter.decent.social/<username>/rss
```

# Usage in RSS reader

As simple as adding the RSS feed for the users you're interested in, and you're good to go.

I can recommend [Vienna](https://github.com/ViennaRSS/vienna-rss) if you're using macOS.

> "Vienna is a free and open-source RSS/Atom newsreader"

Via `brew cask` it's too easy to install: `brew cask install vienna`

# Recreate your Twitter timeline

To get the users you're currently following, you can use [this handy snippet from zedeus](https://gist.github.com/zedeus/555f9709c1ad744b442bf9a6e9856aaf).

Alternatively, just run `npx decent-social-cli followers <your username>` and you have the list of users you're currently following:

## RSS feed urls

To create the RSS feeds from a list of users, you can simply prepend `https://nitter.decent.social/` and append `/rss`.

This will result in a list like this:

```
https://nitter.decent.social/lexfridman/rss
https://nitter.decent.social/EFF/rss
...
```

Once you have that, you can copy each line and add it to your RSS feed reader.

Finally, this is how your Twitter timeline could look like:

![nitter-rss-reader](/img/blog/nitter-rss-reader.png)

And you still have the possibility to focus on a single user and just read their tweets:

![nitter-rss-reader-single](/img/blog/nitter-rss-reader-single.png)

PS: I am working on an alternative, privacy-friendly Twitter reading experience 👉 [app.decent.social](https://app.decent.social)