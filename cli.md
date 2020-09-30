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
          <br>
          <a target="_blank" href="https://github.com/decentsocial/cli/blob/master/usernames.example">Here you can find an example</a>
        </p>
        <p>
          Tada! You created your own private Twitter timeline!
        </p>
        <p>The source code is on <a target="_blank" href="https://github.com/decentsocial/cli">GitHub</a></p>
      </div>
      <div class="col-lg-12 mx-auto text-center">
        <video autoplay loop src="/img/decent.social.cli.mp4"></video>
      </div>
      <div class="col-lg-11 mx-auto mt-5">
        <img class="img-fluid" src="/img/cli.carbon.png" />
      </div>
    </div>
  </div>
</section>

<section id="cta" class="text-center mt-5 py-5">
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-lg-8 mx-auto">
        {% include 'cta.html' %}
      </div>
    </div>
  </div>
</section>

<section class="text-center mt-5 py-5">
  <div class="container">
    <div class="row mt-5">
    <div class="col-lg-7 mx-auto mb-5 text-center">
      <h1>Coming soon</h1>
      {% include 'tweets.html' %}
    </div>
  </div>
</section>


{% endblock %}