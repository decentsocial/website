---
title: "Fast virtual scrolling with preact"
date: 2020-10-12
layout: post.njk
tags:
  - post
  - featured
  - preact
  - react
  - javascript
hackernews: https://news.ycombinator.com/item?id=24756885
---

<video class="img-fluid" loop src="/video/app.decent.social-performance.mov"></video>

To show the timeline on [app.decent.social](https://app.decent.social) I needed to avoid showing all tweets at once.

One common technique to overcome this issue, is to apply the concept of "virtual scrolling":

---

You only render visible items on the page, and a few more to pre-load them.

This makes the experience "infinite" and smooth.

## React library

Looking through GitHub and NPM I found [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list).

It seems to work pretty good on [app.decent.social](https://app.decent.social), check it out by yourself. It's free during the beta!

Install the library with

```sh
npm install react-tiny-virtual-list
```

> **All examples below come from the official [app.decent.social](https://app.decent.social) repository [on GitHub](https://github.com/decentsocial/app)**


Then I used it this way:

```javascript
import VirtualList from 'react-tiny-virtual-list';

const Timeline = (props) => {
  render (props) {
    const timeline = (props.timeline || [])
      .filter(t => retweets ? true : !t.retweet)
      .filter(t => replies ? true : !t.reply)

    ...

    return (
        <VirtualList
          width='100%'
          height='100vh'
          itemCount={timeline.length}
          itemSize={(i => {
            const item = timeline[i]
            const text = item.formatted || item.text || '\n'
            const newLinesCount = text.split('\n').length
            return 200 + newLinesCount * 15 + text.length * 0.3
          })}
          overscanCount={10}
          renderItem={({ index, style, t = timeline[index] }) =>
            <div id={`t${+new Date(t.date)}`} tabIndex={index + 2} key={index} style={style} class={timelineStyles.tweet + ' p-0 border-0 py-5'}>
              <div class=''>
                <small class='float-right text-muted has-tooltip'><a href={t.link} tabIndex={-1} target='_blank' rel='noopener noreferrer'>{new Date(t.date).toISOString().substring(11, 16)}</a></small>
                <h5 class='mb-1 text-muted'>
                  <div style={`display: inline-block; border-radius: 50%; margin-right: 2em; height: 2em; width: 2em; vertical-align: middle; background-size: contain; background-image: url(${t.authorAvatar})`} />
                  {t.author}
                </h5>
                <span class='tooltip blue'><p>{t.date}</p></span>
              </div>
              <p class='w-100 mb-1 text-left py-2'><Linkify>{t.formatted || t.text}</Linkify></p>
            </div>}
        />
    )
  }
}
```

This achieves the following:

- a list of items (with 10 overscan)
- dynamic `itemSize` based on text and content length

I think this is beautifully simple, especially performant!

Check it out by yourself on [app.decent.social](https://app.decent.social)

## Seamless integration with Preact

Yes!

If you're using the preact-cli, or configured your bundler accordingly, you have support for `preact/compat` built in.

Which makes this a performance improvement without heavy shimming or other fluff.
