---
id: 202508201326-quartz:-next-and-previous
aliases:
  - "Quartz: Next and Previous"
tags:
  - ref
  - blueprint
created: 2025-08-20T13:26
next:
  - "[[202508201549-log:-quartz|scope creep]]"
prev:
  - "[[202508201325-cool-quartz-next-button|cool quartz next button]]"
ref:
  - "[🌐 ericdarve — CME 302 Numerical Linear Algebra](https://ericdarve.github.io/NLA/content/intro.html)"
source:
  - "[[202508201325-cool-quartz-next-button|cool quartz next button]]"
title: "Quartz: Next and Previous"
type: ref
---

I already have notes that I normally link in the frontmatter, especially if
it's following the Zettelkasten pipeline. I've got `next, prev, ref, source` as
the stuffs that I want to have on the page automagically.

After reading the
[Quartz](https://quartz.jzhao.xyz/advanced/making-plugins#filters) docs more
extensively and finding out that you can [create your own
component](https://quartz.jzhao.xyz/advanced/creating-components), I was like,
"Oh my god... You can do that??!!!" My eyes started sparkling and ideas started
to pop up in my head. I'm really glad for my React experience now because the
code is in TSX, I can handle that.

Goal: Display the aforementioned frontmatter items automagically in an
aesthetically-pleasing manner below the body in each note, if they have them,
otherwise display nothing.

Here's an idea that I had for a layout of what I'll call the `FooterRef`
component,

<div class="flex justify-evenly">

![[assets/quartz-footer-ref-01.jpg|240]]

![[assets/quartz-footer-ref-02.jpg|240]]

</div>

Basically,

- `prev/next` — divs at the left/right-most edges, respectively.
  - `border-radius`: eyeball and see what's good, probably 8-16px
  - `text-align`: left for `prev` and right for `next`
- `source` —
- `ref` — Footnote reference, populated with ready to reference numbered links

I'm still unsure about the design of the `source` div. now that I think about
it again, a circle is probably pretty bad as a text holder, you'd run out of
space pretty quickly. We'll have to prototype it first just to see how it
looks.
