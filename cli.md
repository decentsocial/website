---
title: Decent CLI
layout: layout.njk
---

{% block content %}
<section class=" text-left">
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-lg-12 mx-auto">
        <h1 class="display-3">decent.social cli</h1>
        <p class="">Enjoy your private timeline, <b>in your terminal</b></p>
      </div>
      <div class="col-lg-12 mx-auto mt-5">
        <code class="code">
mkdir -p ~/.decent/
printf "elonmusk\nlexfridman" >> ~/.decent/usernames
<br>
npm i -g decent-social-cli
<br>
decent --help
<br>
<br>
# or
<br>
<br>
npx decent-social-cli --help
        </code>
      </div>
    </div>
    <br>
    <br>
    <div class="row mt-5">
      <div class="col-lg-7 mx-auto mb-5 text-center">
        {% include 'tweets.html' %}
      </div>
    </div>
  </div>
</section>

{% endblock %}