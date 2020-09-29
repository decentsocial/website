---
title: Decent CLI
layout: layout.njk
---

{% block content %}
<section class=" text-left">
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-lg-9 mx-auto">
        <h1 class="display-3">decent.social cli</h1>
        <p class="">Enjoy your private timeline, <b>in your terminal</b></p>
      </div>
      <div class="col-lg-9 mx-auto mt-5">
        <code class="pre-scrollable code">
npm i -g decent-social-cli

decent --max 100 --username 'lexfridman,ProfFeynman,MKBHD'

or

npx decent-social-cli --max 100 --username 'lexfridman,ProfFeynman,MKBHD'
        </code>
      </div>
      <div class="col-lg-9 mx-auto mt-5">
        <p>
          Create a file called `~/.decent/usernames` to avoid specifying `--username` over and over again.
        </p>
        <p>
          Tada! You created your own private Twitter timeline!
        </p>
        <p>The source code is on <a target="_blank" href="https://github.com/decentsocial/cli">GitHub</a></p>
      </div>
      <div class="col-lg-11 mx-auto mt-5">
<p class="text-monospace text-light bg-dark p-4 overflow-auto">
@lexfridman - 2020-09-27T22:53:52.000Z - https://nitter.decent.social/lexfridman/status/1310351981383421953#m
<br>
<br>
Confidence is strength. Arrogance is weakness.
<br>
<br>
---
<br>
<br>
@MKBHD - 2020-09-28T14:51:15.000Z - https://nitter.decent.social/MKBHD/status/1310592916520398849#m
<br>
<br>
Drink some water today.
<br>
<br>
---
<br>
<br>
@ProfFeynman - 2020-09-27T16:36:41.000Z - https://nitter.decent.social/ProfFeynman/status/1310257062987706373#m
<br>
<br>
Understand, don't memorize. 🧠
</p>
      </div>
    </div>
    <br>
    <br>
    <div class="row mt-5">
      <div class="col-lg-7 mx-auto mb-5 text-center">
        <h1>Coming soon</h1>
        {% include 'tweets.html' %}
      </div>
    </div>
  </div>
</section>

{% include 'cta.html' %}

{% endblock %}