---
title: Decent Blog - A Privacy-friendly, Decent Twitter Client
layout: layout.njk
---

{% block content %}
<div class="container">
  <div class="row">
    <div class="col-xl-10 col-sm-12 mx-auto">
      <h1 class="title display-2">The Decent Blog</h1>
      {% for post in collections.post %}
        <h1 class="title display-4 mt-5"><a href="{{post.url}}">{{post.data.title}}</a></h1>
        <p>{{post.excerpt | safe}}</p>
      {% endfor%}
    </div>
    <div class="col-xl-2 mx-auto d-none-lg d-block-xl">
      <img class="img-fluid" style="max-width: 150px" src="/img/letters.svg"/>
    </div>
  </div>
</div>
  
{% endblock %}