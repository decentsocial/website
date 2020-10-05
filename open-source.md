---
title: Decent CLI
layout: layout.njk
---

{% block content %}
<section class="container">
  <h1 class="title">Decent is Free & Open-source software</h1>
  <div class="row">
    <div class="col-md-8 my-5 py-5">
      <p class="lead">
        The codebase of Decent is <a target="_blank" href="https://github.com/decentsocial">Open-Source and freely available on GitHub</a>
      </p>
      <p class="lead">
      The source-code is licensed under the <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">Affero General Public Licene 3.0</a>, as <a href="https://github.com/zedeus/nitter" target="_blank">Nitter</a>
      </p>
      <p class="lead">
        You can decide to self-host it on your own machine and maintaing it by yourself.
      </p>
      <p class="lead">
        Support us <a href="https://github.com/sponsors/decentsocial/" target="_blank">on GitHub sponsors!</a>
        <br>
        <iframe src="https://github.com/sponsors/decentsocial/card" title="Sponsor decentsocial" height="225" width="600" style="border: 0;" class="my-3"></iframe>
        <br>
        We are proudly sponsoring <a href="https://github.com/sponsors/zedeus" target="_blank">the nitter project</a> with a 5$ monthly donation&nbsp;🙌
      </p>
      <p class="lead">
        You can use our public <b>nitter instance</b> at <a href="https://nitter.decent.social/" target="_blank">nitter.decent.social</a> too
      </p>
      <p class="lead mt-5">
        Current open-source projects
      </p>
      <ul class="list-group list-group-flush mb-5">
        <li class="list-group-item">
          <a target="_blank" href="https://github.com/decentsocial/website">decent.social website</a>
        </li>
        <li class="list-group-item">
          <a target="_blank" href="https://github.com/decentsocial/cli">decent.social cli</a>
        </li>
        <li class="list-group-item">
          <a target="_blank" href="https://github.com/decentsocial/nitter">fork of nitter</a>
        </li>
      </ul>
      <p class="lead">
        Feel free to contribute on the open-source projects!
        <br>
        Feedback and help are much appreciated!
      </p>
    </div>
    <div class="col-md-4 my-5 py-5">
      <img class="img-fluid" lazy="/img/open-source.svg" />
    </div>
  </div>
  {% include 'cta.html' %}
</section>
{% endblock %}