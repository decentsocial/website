---
title: Decent Open Stats - A Privacy-friendly and ad-free Twitter reader
layout: layout.njk
---

{% block content %}
<section class="container mt-5">
  <h1 class="title display-3">Decent Open Stats</h1>
  <p class="lead">
    Below I summarized all numbers around building Decent
  </p>
  <div class="row">
    <div class="col-sm-12">
      <h1 class="title mt-5">💵&nbsp;&nbsp;Financial</h1>
    </div>
    <div class="col-sm-12">
      <p class="lead mt-5">The costs and profits of running <a href="/">decent.social</a></p>
      <div class="row">
        <div class="col-sm-3 p-3">
          <p class="lead">
            <h1 class="title display-3 cost">
              5 $
            </h1> / month
            <br> for hosting a VPS on <a target="_blank" href="https://m.do.co/c/880e8f681b50">DigitalOcean</a>
          </p>
        </div>
        <div class="col-sm-3 p-3">
          <p class="lead">
            <h1 class="title display-3 cost">
              29 $
            </h1> / year
            <br> for the domain
          </p>
        </div>
        <div class="col-sm-3 p-3">
          <p class="lead">
            <h1 class="title display-3 profit">
              5 $
            </h1> / month
            <br> current <a target="_blank" href="https://github.com/sponsors/decentsocial">GitHub Sponsors</a>
          </p>
        </div>
        <div class="col-sm-3 p-3">
          <p class="lead">
            <h1 class="title display-3 profit">
              0 $
            </h1> / month
            <br> current MRR
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <h1 class="title mt-5">💯&nbsp;&nbsp;Numbers</h1>
    </div>
    <div class="col-sm-12">
      <p class="lead mt-5">Other numbers about <a href="/">decent.social</a></p>
      <div class="row">
        <div class="col-sm-3 p-3">
          <p class="lead">
            <h1 class="title display-3">
              4
            </h1> <a target="_blank" href="https://github.com/decentsocial">Open-source projects</a> on GitHub
          </p>
        </div>
        <div class="col-sm-3 p-3">
          <p class="lead">
            <h1 class="title display-3">
              {{collections.post.length}}
            </h1> <a href="/blog/">Blog posts</a>
          </p>
        </div>
        <div class="col-sm-3 p-3">
          <p class="lead">
            <h1 class="title display-3">
              22
            </h1> <a target="_blank" href="https://buttondown.email/decentsocial/archive/">Subscribers</a> to the mailing list
          </p>
        </div>
        <div class="col-sm-3 p-3">
          <p class="lead">
            <h1 class="title display-3">
              9%
            </h1> <a target="_blank" href="https://plausible.io/decent.social?goal=Visit+%2Fthanks-for-subscribing%2F&period=30d">Conversion Rate</a> for Signups
          </p>
        </div>
      </div>
    </div>
  </div>
  {% include 'cta.html' %}
</section>
{% endblock %}