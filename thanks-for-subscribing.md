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
        <p>In the meantime, check out <a href="https://app.decent.social">app.decent.social</a> for free while it's in beta 😉</p>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-lg-12 mx-auto">
        <h1 class="title display-3">The Decent Blog</h1>
        <div class="row">
        {% for post in collections.post | reverse %}
          <div class="col-md-6 my-3">
            <div class="card">
              <div class="card-body">
                <h3 class="title mt-0"><a href="{{post.url}}">{{post.data.title}}</a></h3>
                <p>Written on <time class="font-weight-bold">{{post.data.date | isoday}}</time></p>
                <p>{{post.excerpt | safe}}</p>
              </div>
            </div>
          </div>
        {% endfor%}
        </div>
      </div>
    </div>
  </div>
</section>
{% endblock %}