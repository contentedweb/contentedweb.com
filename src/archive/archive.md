---
layout: archive.njk
pageTitle: Archive
eleventyNavigation:
  key: Archive
  order: 300
pagination:
  data: collections.posts 
  size: 20
  reverse: true
  alias: posts
---

{% if page.url == pagination.href.first %}
This is the complete works, listed by year and month. You can also browse my posts,  by <a href="/archive/photos/">photos</a>, <a href="/archive/travel/">travel entries</a>, <a href="/archive/web/">web related content</a>, <a href="/archive/general/">general tidbits</a> or <a href="/archive/all-posts/">all posts</a>. 

You can also find all the <a href="/archive/work/">websites I helped produce whilst working for Minervation</a> - still my favourite employers, although not where I currently work.
{% endif %}

[comment]: # Use this https://jamesdoc.com/blog/2021/11ty-posts-by-year/ to list by month as on jeffputz.

<ul class="posts-list">
  {% for post in posts  %}
<li>
<h2><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h2>
<time datetime="{{ post.date | dateFormatMachine }}"><span class="date-day">{{ post.date.getDate() }}</span> <span class="date-month">{{ post.date.toLocaleString('default', { month: 'long' }) }}</span>, <span class="date-year">{{ post.date.getFullYear() }}</span></time>
{% if post.data.page.excerpt %}
  {{ post.data.page.excerpt | safe}}
{% else %}
  {{ post.templateContent | safe}}
{% endif %}
</li>
  {% endfor %}  
</ul>
