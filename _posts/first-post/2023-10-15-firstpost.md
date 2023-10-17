---
layout: post
title: New Beginnings
date: 2023-10-15 05:38 +0700
description: first blog post!
tag:
  - meta
image:
comments: true
---

This is my first post!

It doesn't have much in it at the moment, but I'd like to thank the creator of this theme for allowing everyone to build on top of it. Since this is the first of its kind, I'd thought to leave some documentation on writing `Jekyll` posts for future reference.

The code can be found at [this](https://github.com/davidchiii/davidchiii.github.io) repository. It is running on Github-Pages and built using Jekyll and Ruby-on-Rails. Jekyll works as a renderer for markdown files where they are parsed and turned into a `html` file where github pages knows how to serve them.

To install and make a copy of this site, clone the website and use 
```bash
bundle install
```
to install the packages and run with

```bash
bundle exec jekyll serve --livereload
```

to start the development server.
By default, it is configured for github-pages. If you'd like to switch it back to locally hosted `Jekyll`, comment out the line in `Gemfile`.

The default header for each post is

```markdown
---
layout: post
title: 
date: YYYY-MM-DD 00:00 +0000 
description: 
tag:
  - tag here
image:
categories: jekyll update
usemathjax: true
comments: true
---
```
