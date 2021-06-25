---
layout: archive.njk
pageTitle: Accessibility and web development posts
pagination:
  data: collections.web
  size: 20
  reverse: true
  alias: posts
---

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
