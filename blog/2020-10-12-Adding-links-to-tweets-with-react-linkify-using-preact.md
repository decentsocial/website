---
title: "Adding links to tweets with react-linkify using preact"
date: 2020-10-12
layout: post.njk
tags:
  - post
  - featured
  - preact
  - react
  - javascript
---

On [app.decent.social](https://app.decent.social/) I needed to render links in tweets.

I am using the `text` property of a tweet (see below for an example), that comes from the [app.decent.social](https://app.decent.social/) HTTP API:

```json
{
  author
  authorLink
  authorAvatar
  rss
  bio
  text
  html
  date
  link
  retweet
  reply
}
```

---

The `text` property contains the plain text of the tweet, without markup, preserving lines.

Something like `Knowledge isn't free. You have to pay attention. 🧠`.

And it can contain links.

That if rendered as plain text, of course are not clickable.

---

Searching on NPM I found this useful little package called [`react-linkify`](https://github.com/tasti/react-linkify).

It does example what I need.

It receive text as an input, and renders it with hyperlinks. It "even" shortens them by putting an ellipsis in links.

This is the result of integrating `react-linkify` in the private Twitter timeline of [app.decent.social](https://app.decent.social):

### Without links

![tweet2-rendered](/img/blog/tweet2-rendered.png)

### Rendered links

![tweet1-rendered](/img/blog/tweet1-rendered.png)

with ellipsis

![tweet3-rendered](/img/blog/tweet3-rendered.png)

# Using `react-linkify`

Simply

```sh
npm i react-linkify
```

Then include it where you want to us it:

```javascript
import Linkify from 'react-linkify'
```

Then, for example in [app.decent.social](https://app.decent.social), I use it in the following way:

```javascript
<div id={`t${+new Date(t.date)}`} tabIndex={index + 2} key={index} style={style} class={timelineStyles.tweet + ' p-0 border-0 py-5'}>
  <div>
    <small class='float-right text-muted has-tooltip'><a href={t.link} tabIndex={-1} target='_blank' rel='noopener noreferrer'>{new Date(t.date).toISOString().substring(11, 16)}</a></small>
    <h5 class='mb-1 text-muted'>
      <div style={`display: inline-block; border-radius: 50%; height: 2em; width: 2em; vertical-align: middle; background-size: contain; background-image: url(${t.authorAvatar})`} />
        &nbsp;&nbsp;&nbsp;&nbsp;{t.author}
    </h5>
    <span class='tooltip blue'><p>{t.date}</p></span>
  </div>
  <p class='w-100 mb-1 text-left py-2'><Linkify>{t.formatted || t.text}</Linkify></p>
</div>
```

Specifically `<Linkify>{t.formatted || t.text}</Linkify>` is imported to linkify tweets.
