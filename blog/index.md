---
title: Decent Blog - A Privacy-friendly, Decent Twitter Client
layout: layout.njk
---

{% block content %}
<div class="container mt-5">
  <div class="row">
    <div class="col-xl-10 col-sm-12 mx-auto">
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
    <div class="col-xl-2 mx-auto d-none-lg d-block-xl">
      <img class="img-fluid" style="max-width: 150px" lazy="/img/letters.svg"/>
    </div>
  </div>
</div>

{% endblock %}