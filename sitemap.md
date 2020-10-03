---
layout: empty.njk
dest: sitemap.xml
minify: false
---
{% block content %}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  {%- for post in collections.post | reverse %}
  <url>
    <loc>{{ post.url | withDomain }}</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  {%- endfor %}
</urlset>{% endblock %}