---
layout: archive.njk
pageTitle: Work archive
pagination:
  data: collections.work
  size: 20
  reverse: true
  alias: posts
---

{% if page.url == pagination.href.first %}
This is page lists all the sites I have helped produce since I hosted my first site on the now discontinued Geocities in 1998.

Some of these sites have since gone on to win awards for clarity and quality of information as well as for best interactive website.

Nearly all of them have been produced through my work at <a href="https://minervation.com">Minervation</a>. Up until late 2010 the sites were produced using Minervation's in-house CMS: Phaedrus. Since then we switched to using Wordpress more and more. I left Minervation in late 2012, so this list more or less stops there. 
{% endif %}

<ul class="posts-list">
  {% for post in posts  %}
<li>
<h3><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h3>
<time datetime="{{ post.date | dateFormatMachine }}"><span class="date-day">{{ post.date.getDate() }}</span> <span class="date-month">{{ post.date.toLocaleString('default', { month: 'long' }) }}</span>, <span class="date-year">{{ post.date.getFullYear() }}</span></time>
{% if post.data.page.excerpt %}
  {{ post.data.page.excerpt | safe}}
{% endif %}
</li>
  {% endfor %}  
</ul>
