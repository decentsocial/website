---
title: A Privacy-friendly, Decent Twitter Client
layout: layout.njk
---

{% block content %}
<!-- Masthead -->
<header class="masthead text-center">
  {% include 'masthead.html' %}
</header>

<hr class="w-60 mx-auto">

<section id="benefits" class="features-icons my-5">
  {% include 'benefits.html' %}
</section>

<hr class="w-60 mx-auto">

<section class="showcase py-5 mt-5">
  {% include 'showcase.html' %}
</section>

<section id="cta" class="container text-center mt-5 py-5">
  {% include 'cta.html' %}
</section>

<section id="faq" class=" mt-5 py-5">
  {% include 'faq.html' %}
</section>

<!--
<section class="container mt-5">
  {% include 'testimonials.html' %}
</section>
-->

<section class="mt-5">
  {% include 'next.html' %}
</section>

<section id="cta-end" class="container text-center mt-5 py-5">
  {% include 'cta.html' %}
</section>

{% endblock %}