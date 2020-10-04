---
title: A Privacy-friendly, Decent Twitter Client
layout: layout.njk
---

{% block content %}
<!-- Masthead -->
<header class="masthead text-center">
  {% include 'masthead.html' %}
</header>

<section id="benefits" class="features-icons my-5">
  {% include 'benefits.html' %}
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

<section class="mt-5">
  <br>
  <br>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6">
        <h1 class="title">Future plans</h1>
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
      <div class="col-md-6">
        <h1 class="title">Useful resources</h1>
        <ul class="list-group list-group-flush mt-3 py-3">
          <a href="/blog/" class="list-group-item list-group-item-action py-3">
            Blog
          </a>
          <a href="/cli/" class="list-group-item list-group-item-action py-3">
            Command Line Interface
          </a>
          <a href="/open-source/" class="list-group-item list-group-item-action py-3">
            Free & Open-Source
          </a>
          <a target="_blank" href="https://plausible.io/decent.social" class="list-group-item list-group-item-action py-3">
            Plausible Analytics
          </a>
          <a target="_blank" href="https://www.indiehackers.com/product/decent-social" class="list-group-item list-group-item-action py-3">
            Progress on IndieHackers.com
          </a>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="cta-end" class="text-center mt-5 py-5">
  {% include 'cta.html' %}
</section>

{% endblock %}