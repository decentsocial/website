---
title: A Privacy-friendly, Decent Twitter Client
layout: layout.njk
---

{% block content %}
<!-- Masthead -->
<header class="masthead text-center">
  <div class="container">
    <div class="mx-auto mt-5 mb-5 text-left">
      <h1 class=" masthead-heading">Privacy-friendly <span style="display: inline-block">Twitter Reader</span></h1>
      <h4 class=" ">Decent is an ad-free, privacy-first Twitter reading experience</h4>
      <div class="row">
        <div class="col-lg-7">
          <div class="mb-2 mt-5">
            <div class="d-none  d-lg-block">
              <br>
              <br>
            </div>
            <h4>Experiencing a <b style="display: inline-block;">cluttered Twitter timeline?</b></h4>
            <h5>"Too many ads, suggestions, promoted tweets..."</h5>
            <h4 class="mt-4 mb-4">Well, that ends now.</h4>
            <p class="big">
              It's <b>your Twitter timeline</b> after all
              <br>
              <br>
              Enjoy a <b>decent Twitter reading experience</b>
              <br>
              <br>
              <b>Ad-free & privacy-first</b>
            </p>
            <p class="lead mt-5">
              <a class="btn btn-primary btn-lg track-join-now" href="#cta">Get updates</a>
            </p>
          </div>
        </div>
        <div class="col-lg-4 mt-5 mb-2 text-center d-sm-none d-lg-block">
          <h2 class="title">Your private timeline</h2>
          {% include 'tweets.html' %}
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
  </div>
</header>

<section id="features" class="features-icons mb-5">
  <div class="container">
    <img class="img-fluid mt-5 mb-3" src="/img/clouds.svg" alt="" style="width: 25em;">
    <h1 class="title">Why Decent?</h1>
    <div class="row mt-5">
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Ethical</h3>
          <p class="lead mb-0">
            <b class="inverted-light">No tracking</b>
            <br>
            <b class="inverted-light">No link-shortening</b>
            <br>
            <b class="inverted-light">No ads</b>
            <br>
            <b class="inverted-light">No promoted tweets</b>
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Privacy-first</h3>
          <p class="lead mb-0">
            Using <b><a target="_blank" href="https://nitter.decent.social/">Nitter</a></b> behind the scenes
            <br>
            <b class="inverted-light">No Twitter account required</b>
            <br>
            <b class="inverted-light">No collection of personal data</b>
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Open-Source</h3>
          <p class="lead mb-0">
            Yes! Decent is <b class="inverted-light">open-source on GitHub</b>
            <br>
            You can opt for <b class="inverted-light">self-hosting</b> Decent
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Lightweight & clean</h3>
          <p class="lead mb-0">
            Fast and <b class="inverted-light">no BS</b> Twitter experience
            <br>
            <b class="inverted-light">10x smaller script</b>
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Pleasant Twitter experience</h3>
          <p class="lead mb-0">
            <p class="lead mb-0">
              Read Twitter <b class="inverted-light">without the distrations</b>
              <br>
              Get back control over <b class="inverted-light">your Timeline</b>
            </p>
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <img class="d-sm-none d-lg-block img-fluid mt-5 mb-3" src="/img/air_support.svg" alt="">
        </div>
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

<section class="showcase">
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-lg-6 my-auto1 showcase-text">
        <h2>Try the CLI for free</h2>
        <p class="lead mb-0">
          As all code of Decent, the CLI is <a href="https://github.com/decentsocial" target="_blank">open-source on GitHub</a>
          <br>
          Run via <code style="display: inline-block">npx decent-social-cli</code>
          <br>or install it globally <code style="display: inline-block">npm i -g decent-social-cli</code>
          <br>
          <br>
          Run <code style="display: inline-block">decent init</code> to initialize <code style="display: inline-block">~/.decent/usernames</code> and start browsing your private Twitter timeline
        </p>
      </div>
      <div class="col-lg-6 text-white showcase-img" style="background-image: url('/img/cli.carbon.png'); background-size: contain; background-repeat: no-repeat; background-position: center"></div>
    </div>
    <!--
    <div class="row no-gutters">
      <div class="col-lg-6 text-white showcase-img" style="background-image: url('img/bg-showcase-2.jpg');"></div>
      <div class="col-lg-6 my-auto showcase-text">
        <h2>Updated For Bootstrap 4</h2>
        <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('img/bg-showcase-3.jpg');"></div>
      <div class="col-lg-6 order-lg-1 my-auto showcase-text">
        <h2>Easy to Use &amp; Customize</h2>
        <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
      </div>
    </div>
    -->
  </div>
</section>


<section id="faq" class=" mt-5 py-5">
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-lg-8 mx-auto">
        <h1 class="title">Frequently asked questions</h1>
        <ul class="list-group list-group-flush">
          <li class="list-group-item py-3">
            <b>What's wrong with Twitter?</b>
            <br>
            Twitter's business model is based on <b>advertisement and targeting</b>, by collecting your <b>personal information, behaviour and preferences</b>.
            <br>
            This information is used to present you the timeline mixed with <b>promoted tweets and advertisement</b>.
            <br>
            That's how Twitter can be "free", but you shouldn't fall for it.
          </li>
          <li class="list-group-item py-3">
            <b>Why is Decent not free like Twitter?</b>
            <br>
            You pay for reading your Decent timeline knowing you're not being tracked, profiled and presented with "tweets you might like".
            <br>
            With Decent <b>you are using a service</b>, <b>not being used by it</b>.
            <br>
            No information at all is collected and you're not being targeted or manipulated.
            <br>
            <b>Decent doesn't show ads or sells your information, that's why we need to ask a small fee.</b>
          </li>
          <li class="list-group-item py-3">
            <b>I would like self-host Decent, can I?</b>
            <br>
            Yes! Decent's idea is to be fully transparent and open-source, thus you can <a href="https://github.com/decentsocial" target="_blank">check out the code on GitHub</a> and decide to host it on your own.
            <br>
            You'll have to install, host and manage Decent yourself on your own server or PC.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="container mt-5">
  <br>
  <br>

  <h1 class="mt-5 mb-5">What people are saying</h1>
  <div class="row">
    <div class="col-lg-4">
      <div class="testimonial-item mx-auto mb-5 mb-lg-0">
        <h5>Margaret</h5>
        <p class="font-weight-light mb-0">"Finally a Privacy-friendly alternative for reading my messy Twitter timeline!"</p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="testimonial-item mx-auto mb-5 mb-lg-0">
        <h5>Fred</h5>
        <p class="font-weight-light mb-0">"Decent is dope. It makes me want to read Twitter again, knowing that my data is not being sold to others"</p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="testimonial-item mx-auto mb-5 mb-lg-0">
        <h5>Sarah</h5>
        <p class="font-weight-light mb-0">"I can say that I don't feel overwhelmed anymore and enjoy Twitter again thanks to Decent!"</p>
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

<section class="mt-5">
  <br>
  <br>
  <div class="container">
    <div class="row mt-5">
      <!-- <div class="col-lg-6 mx-auto">
        <h2 class="title text-center">Your private timeline</h2>
        {% include 'tweets.html' %}
      </div> -->
      <div class="col-lg-6 mx-auto text-center">
        <h2 class="title">Future plans</h2>
        <ul class="list-group list-group-flush mt-3 py-3">
          <li class="list-group-item py-3">
            Reply to a tweet directly in Decent
          </li>
          <li class="list-group-item py-3">
            Timeline settings and customizations
          </li>
          <li class="list-group-item py-3">
            Login via Twitter to fetch the accounts you follow
          </li>
          <li class="list-group-item py-3">
            Simplified self-hosting
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{% endblock %}