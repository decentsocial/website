---
title: Decent CLI
layout: layout.njk
---

{% block content %}
<section class="call-to-action1 text-white1 text-left">
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-lg-12 mx-auto">
        <h1 class="display-1">Thanks!</h1>
        <h3 class="">You'll be one of the first to know when Decent is ready!</h3>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-lg-12 mx-auto">
        <h3>From the blog</h3>
        {% for post in collections.post %}
          <h1 class="title display-4 mt-5"><a href="{{post.url}}">{{post.data.title}}</a></h1>
          <p>{{post.excerpt | safe}}</p>
        {% endfor%}
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
{% endblock %}