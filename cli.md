---
title: Decent CLI
layout: layout.njk
---

{% block content %}
<section class=" text-left">
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-lg-12 mx-auto">
        <h1 class="title">decent.social cli</h1>
        <p class="">Enjoy your private timeline, <b>in your terminal</b></p>
      </div>
      <div class="col-lg-12 mx-auto mt-5">
        <div class="mt-5">
          <h1 class="title mt-5 mb-3">Installation</h1>
          <code style="font-size: 2rem">
npm i -g decent-social-cli
          </code>
          <br>
          <br>
          or, for one-off runs
          <code>
npx decent-social-cli --help
          </code>
        </div>
        <div class="mt-5">
          <h1 class="title mt-5 mb-3">Set up</h1>
          <p class="lead">
            initialize your timeline with your current Twitter username if you like.
            <br>
            this will fetch you current followers (currently max 100) and add them to <code>~/.decent/usernames</code>
            <br>
            <br>
            <code>
decent init &lt;username&gt;
            </code>
          </p>
        </div>
        <div class="mt-5">
          <h1 class="title mt-5 mb-3">Example</h1>
          <code>decent init christian_fei</code>
          <br>
          <br>
          <code>~/.decent/usernames</code> looks like this
          <br>
          <br>
          <pre><code>
elonmusk
lexfridman
mkbhd
...
          </code></pre>
        </div>
        <div class="mt-5">
          Read your Twitter timeline with <b>less</b>
          <br>
          <br>
          <code>
  decent --max 100 | less
          </code>
        </div>
        <div class="mt-5">
          <h1 class="title mt-5 mb-3">Commands</h1>
          <p class="lead">
            for more information, see <code>decent --help</code>
            <br>
            <pre class="pre-scrollable"><code>
  # Initialize ~/.decent/usernames
  decent init<br>
  # List your timeline based on ~/.decent/usernames
  decent list<br>
  # List the timeline of the user "lexfridman"
  decent list lexfridman<br>
  # Show max 100 tweets
  decent list --max 100<br>
  # Show max 100 tweets without retweets
  decent list --no-retweets --max 100<br>
  # Show max 100 tweets without replies
  decent list --no-replies --max 100<br>
  # Show max 100 tweets without replies without retweets
  decent list --no-replies --no-retweets --max 100<br>
  # Filter tweets containing term "erlang"
  decent filter erlang<br>
  # Follow user "lexfridman"
  decent follow lexfridman<br>
  # unfollow user "lexfridman"
  decent unfollow lexfridman<br>
  # Followers of user "lexfridman"
  decent followers lexfridman
            </code></pre>
          </p>
        </div>
        <div class="mt-5">
          <code style="font-size: 2rem">
  npm i -g decent-social-cli
          </code>
        </div>
      </div>
      <div class="col-lg-12 mx-auto text-center mt-5">
        <video class="img-fluid" style="max-width: 100%" autoplay loop src="/img/decent.social.cli.mp4"></video>
      </div>
      <div class="col-lg-12 mx-auto mt-5">
        <img class="img-fluid" style="max-width: 100%" lazy="/img/cli.carbon.png" />
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