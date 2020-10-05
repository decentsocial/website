---
layout: empty.njk
dest: sitemap.xml
minify: false
---
{% block content %}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>{{ '' | withDomain}}</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>{{ '/cli/' | withDomain }}</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>{{ '/open-source/' | withDomain }}</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>{{ '/open/' | withDomain }}</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>{{ '/about/' | withDomain }}</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>{{ '/privacy/' | withDomain }}</loc>
    <lastmod>{{ '' | today }}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>{{ '/blog/' | withDomain }}</loc>
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