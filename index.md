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
        <div class="col-lg-8">
          <div class="mb-2 mt-5">
            <div class="d-none  d-lg-block">
              <br>
              <br>
            </div>
            <h2>Too many ads, suggestions, promoted tweets?</h2>
            <h4 class="mt-4 mb-4">Stop Twitter from profiling you</h4>
            <p class="big">
              It's <b>your Twitter timeline</b> after all
              <br>
              <br>
              Enjoy a <b>decent Twitter reading experience</b>
            </p>
            <p class="lead mt-5">
              <a class="btn btn-primary btn-lg track-join-now" href="#cta">Get free access during beta</a>
            </p>
          </div>
        </div>
        <div class="col-lg-4 mt-5 mb-2 text-center d-sm-none1 d-lg-block">
          <h2 class="title">Your private timeline</h2>
          {% include 'tweets.html' %}
        </div>
      </div>
    </div>
  </div>
</header>

<section id="features" class="features-icons mb-5">
  <div class="container">
    <img class="img-fluid mt-5 mb-3" src="/img/clouds.svg" alt="" style="width: 25em;">
    <h1 class="title">Benefits of Decent</h1>
    <div class="row mt-5">
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Ethical</h3>
          <p class="lead mb-0">
            <b class="">No tracking</b>
            <br>
            <b class="">No link-shortening</b>
            <br>
            <b class="">No ads</b>
            <br>
            <b class="">No promoted tweets</b>
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Privacy-first</h3>
          <p class="lead mb-0">
            Using <b><a target="_blank" href="https://nitter.decent.social/">Nitter</a></b> behind the scenes
            <br>
            <b class="">No Twitter account required</b>
            <br>
            <b class="">No collection of personal data</b>
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Open-Source</h3>
          <p class="lead mb-0">
            Yes! Decent is <b class="">open-source on GitHub</b>
            <br>
            You can opt for <b class="">self-hosting</b> Decent
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Lightweight & clean</h3>
          <p class="lead mb-0">
            Fast and <b class="">no BS</b> Twitter experience
            <br>
            <b class="">10x smaller script</b>
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>Pleasant Twitter experience</h3>
          <p class="lead mb-0">
            <p class="lead mb-0">
              Read Twitter <b class="">without the distrations</b>
              <br>
              Get back control over <b class="">your Timeline</b>
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

<section class="showcase">
  {% include 'showcase.html' %}
</section>

<section id="cta" class="text-center mt-5 py-5">
  {% include 'cta.html' %}
</section>

<section id="faq" class=" mt-5 py-5">
  {% include 'faq.html' %}
</section>

<section id="cta" class="text-center mt-5 py-5">
  {% include 'cta.html' %}
</section>


<section class="container mt-5">
  {% include 'testimonials.html' %}
</section>

<section id="cta-end" class="text-center mt-5 py-5">
  {% include 'cta.html' %}
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