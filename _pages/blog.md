---
layout: home
---

<div class="max-w-2xl py-20 mx-auto px-5">
    <h1 class="font-sans text-3xl sm:text-4xl font-semibold text-text">Blog</h1>
    <p class="text-text-dim mt-4">
    Notes on Cookie and the projects built with it.
    </p>
  <ul class="mt-12 divide-y divide-border">
    {%- for post in site.posts -%}
    <li class="py-8 first:pt-0">
      <time class="text-xs text-text-dim">{{ post.date | date: "%b %-d, %Y" }}</time>
      <h2 class="mt-1 font-sans text-xl sm:text-2xl font-semibold text-text">
        <a href="{{ post.url | relative_url }}" class="hover:text-accent">{{ post.title | escape }}</a>
      </h2>
      <div class="mt-3 text-text-dim">{{ post.excerpt }}</div>
      <div class="mt-4">
        <a class="text-accent text-sm" href="{{ post.url | relative_url }}">Read more</a>
      </div>
    </li>
     {%- endfor -%}
  </ul>
</div>