---
id: 20240317141610-the-leader-control-system
aliases:
  - The Leader-Control System
tags:
  - perm
  - leader-control
  - neovim
  - obsidian.nvim
created: 2024-03-17T14:16
prev:
  - "[[20240317140859-neovim-and-invoker|neovim and invoker]]"
title: The Leader-Control System
type: perm
---

> [!WARNING]+
>
> Very [chuuni](https://en.wikipedia.org/wiki/Ch%C5%ABniby%C5%8D)

## Background

I should've made a Fleeting Note the moment I had this little nugget. But meh,
I couldn't, I didn't have the system setup. In fact, this very system is the
foundation for the existence of my Zettelkasten as it is now.

This came up when I was facing a problem: I wanted more connectivity within my
vault of notes. So Zettelkasten's process of recording fleeting notes as they
come, reflecting and rereading those notes in a predetermined time block, then
turning them into permanent/evergreen notes, seemed like a great solution.
However, another problem came up: I already have this huge body of notes,
accumulated over 2 years since I first started note-taking with Obsidian; how
am I going to manage it or even search through it?

It wasn't obvious at the time, but I came across a [hidden
gem](https://github.com/epwalsh/obsidian.nvim). The `obsidian.nvim` plugin in
neovim has been one of the greatest boons to my vimming experience. I was
skeptical at first because it's relatively new, the [video about it was only 2
months
old](https://www.youtube.com/watch?v=5ht8NYkU9wQ&ab_channel=DevOpsToolbox) at
the time I started this whole Zettelkasten.

But boy, oh boy, have I been missing out. _I can Obsidian within Neovim_. That's
the long and short of it. Combine it with something like a
[iamcco/markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim?tab=readme-ov-file#--markdown-preview-for-neovim--)
and it becomes one of the most amazing plugins only rivalled by [teej's
`telescope.nvim`](https://github.com/nvim-telescope/telescope.nvim) which frankly needs no introduction.

Anyways, back to the system,

## What is it?

A highly flexible and customizable keymapping system that I designed for my
personal zettelkasten vault.

That's it. It's designed with a couple of things in mind:

- to make me feel _cool_ while I'm using it,
- to lessen the friction for **creating new notes** (e.g. `<leader><C-n>nf`:
  new Fleeting Notes in `fleets/`), which in turn will hopefully mean that I
  feel more free to create new notes,
- to make me feel _badass_ while I'm using it,
- to lessen the friction in **adding tags**,
- to lessen the friction in **searching for notes**,
- to make me feel like _Invoker_ while I'm using it,
- to lessen the friction for **linking notes**,
- etc.

But that's just it, as you can see the pattern, the main goal is to lessen the
friction I feel personally when trying to create new notes or linking notes or
tagging notes or anything related to note creation, maintenance, processing,
and management of the vault.

Did you know that Obsidian.app keeps vaults completely separate and you can't
link between them? Well... `obsidian.nvim` **obliterates** that barrier and
says, "fuck you, I'll do whatever I want" and allows for the linking between
vaults (see here: [[Mimymut|do <leader><C-w>w and then gf on this bitch]]).
Isn't that just bloody fucking fantastic, eh?

## How does it work?

Basically, anytime you wanna make a new shortcut from `obsidian.nvim` commands
just create one with the `<leader><C-*>` prefix, where `*` can be anything
related to the functionality you're trying to add to the arcanery.

Currently, I have 3 major divisions,

- `<leader><C-w>`: for \[w]orkspace related mappings,
- `<leader><C-n>`: for \[n]ote related mappings, and
- `<leader><C-s>`: for \[s]earch related mappings

from there it's just regular keys for your commands. Example from my arcanery
are:

- `<leader><C-w>z`: to switch to my `zettelkasten` workspace
- `<leader><C-w>w`: to switch to my `work-vault` workspace
- `<leader><C-w><C-w>`: to list all workspaces with telescope

cool, right???? XDDDD I'm so proud and was super excited with myself when I
came up with this one.

source: me
