---
title: Decent Blog - A Privacy-friendly, Decent Twitter Client
layout: layout.njk
---

{% block content %}
<div class="container">
  <h1 class="title display-2">The Decent Blog</h1>
  {% for post in collections.post %}
    <h1 class="title display-4 mt-5"><a href="{{post.url}}">{{post.data.title}}</a></h1>
  {% endfor%}
</div>
{% endblock %}