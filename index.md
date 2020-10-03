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