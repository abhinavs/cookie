---
layout: page
title: Docs
---
{%- assign docs = site.docs | sort: "order" -%}
Guides for getting a Cookie site running, customizing it, and shipping it.

<ul class="list-none pl-0 mt-8 divide-y divide-border">
  {%- for doc in docs -%}
  <li class="py-4 first:pt-0">
    <a href="{{ doc.url | relative_url }}" class="text-text hover:text-accent font-semibold">{{ doc.title }}</a>
  </li>
  {%- endfor -%}
</ul>
