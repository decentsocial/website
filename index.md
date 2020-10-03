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
      <h4 class=" my-5">Decent is an ad-free, privacy-first Twitter reading experience</h4>
      <h4 class="my-5">Tired of ads, suggestions, promoted tweets?</h4>
      <div class="row">
        <div class="col-lg-8">
          <div class="my-5">
            <p class="lead my-5">
              <a class="btn btn-primary btn-lg track-join-now" href="#cta">Get free early access</a>
            </p>
            <br>
            <h4 class="my-5">Stop Twitter from profiling you</h4>
            <p class="big my-5">
              It's <b>your Twitter timeline</b> after all
            </p>
            <p class="big my-5">
              Enjoy a <b>decent Twitter reading experience</b>
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

<section id="benefits" class="features-icons my-5">
  <div class="container">
    <img class="img-fluid mt-5 mb-3" src="/img/clouds.svg" alt="" style="width: 25em;">
    <h1 class="title">Benefits of Decent</h1>
    <div class="row mt-5">
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>
            &nbsp;Ethical&nbsp; 
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-tree" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .416.223l3 4.5A.5.5 0 0 1 11 5.5h-.098l2.022 3.235a.5.5 0 0 1-.424.765h-.191l1.638 3.276a.5.5 0 0 1-.447.724h-11a.5.5 0 0 1-.447-.724L3.69 9.5H3.5a.5.5 0 0 1-.424-.765L5.098 5.5H5a.5.5 0 0 1-.416-.777l3-4.5A.5.5 0 0 1 8 0zM5.934 4.5H6a.5.5 0 0 1 .424.765L4.402 8.5H4.5a.5.5 0 0 1 .447.724L3.31 12.5h9.382l-1.638-3.276A.5.5 0 0 1 11.5 8.5h.098L9.576 5.265A.5.5 0 0 1 10 4.5h.066L8 1.401 5.934 4.5z"/><path d="M7 13.5h2V16H7v-2.5z"/></svg>
          </h3>
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
          <h3>
            &nbsp;Privacy-first&nbsp;
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-bookmark-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/><path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/></svg>
          </h3>
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
          <img class="img-fluid mt-5 mb-3" src="/img/air_support.svg" alt="">
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>
            &nbsp;Open-Source&nbsp;
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/></svg>
          </h3>
          <p class="lead mb-0">
            Yes! Decent is <b class="">open-source on GitHub</b>
            <br>
            You can opt for <b class="">self-hosting</b> Decent
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>
            &nbsp;Lightweight & clean&nbsp;
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-lightning" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/></svg>
          </h3>
          <p class="lead mb-0">
            Fast and <b class="">no BS</b> Twitter experience
            <br>
            <b class="">10x smaller script</b>
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 py-3">
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <h3>
            &nbsp;Pleasant&nbsp;
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-layout-sidebar-inset" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/><path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/></svg>
          </h3>
          <p class="lead mb-0">
            <p class="lead mb-0">
              Read Twitter <b class="">without the distractions</b>
              <br>
              Get back control over <b class="">your Timeline</b>
            </p>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="showcase py-5 mt-5">
  {% include 'showcase.html' %}
</section>

<section id="cta" class="text-center mt-5 py-5">
  {% include 'cta.html' %}
</section>

<section id="faq" class=" mt-5 py-5">
  {% include 'faq.html' %}
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
      <div class="col-lg-12">
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