---
layout: empty.njk
dest: sitemap.xml
minify: false
---
{% block content %}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://decent.social</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://decent.social/cli/</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://decent.social/open-source/</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://decent.social/privacy/</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://decent.social/blog/</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  {%- for post in collections.post | reverse %}
  <url>
    <loc>{{ post.url | withDomain }}</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  {%- endfor %}
</urlset>{% endblock %}