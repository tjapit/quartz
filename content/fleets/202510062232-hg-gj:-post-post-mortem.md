---
id: 202510062232-hg-gj:-post-post-mortem
aliases:
  - "HG-GJ: Post-post-mortem"
tags:
  - fleet
  - quartz
  - hg-gj
created: 2025-10-06T22:32
next:
  - "[[]]"
prev:
  - "[📋 tamatotodile — First Game Jam!](https://tamatotodile.itch.io/anxst/devlog/1062094/first-game-jam)"
ref:
  - "[▶ tamatotodile — Anxst: Keep Marching.](https://www.youtube.com/watch?v=DVFDL_GBdBk)"
  - "[🌐 itch.io — HG-GJ: The HealthyGamer Game Jam](https://itch.io/jam/hg-gj)"
source:
  - "[🎮 tamatotodile — Anxst](https://tamatotodile.itch.io/anxst)"
title: "HG-GJ: Post-post-mortem"
type: fleet
---

> [!INFO]+ This is the *post-post-mortem*
>
> [Here's the actual post-mortem](https://tamatotodile.itch.io/anxst/devlog/1062094/first-game-jam)
> 
> It's a long-winded post, last braincells bangin' together from the delirium
> of the wee hours of 5am, right after I got the [game trailer out on
> YouTube](https://www.youtube.com/watch?v=DVFDL_GBdBk), just 6 hours before submission ended. 
>
> It wasn't a buzzer beater, but it definitely felt like it!

Check out my first jam game! 

<iframe 
    frameborder="0" 
    src="https://itch.io/embed/3902860?border_width=5&amp;bg_color=3a3f5e&amp;fg_color=dfe0e8&amp;link_color=cc2f7b&amp;border_color=686f99" 
    width="840" 
    height="180"
>
    <a href="https://tamatotodile.itch.io/anxst">Anxst by tamatotodile</a>
</iframe>

Much love to the itch.io devs, I adore how they give you an `iframe` to help
you spread your game. I used to do frontend dev work, so things like these are
my jam. 

Anyways, I made a game! It's been a couple days and I'm still trying to process
this whirlwind of a month. Big shoutout to my friends who threw me a surprise
party, even when I was holing up and no-life-ing this thing. It helped me push
this past the finish line.

> [!WARNING]- ADHD, lots of tangents
> 
> I'm not clinically diagnosed, but I can barely sit still while
> writing this. Neurotypical individuals be warned, lots and lots of tangents.

Reviews from generous playtesters are coming in and yep, it's as I'd feared.
The tutorial was not too... *tutorial-y*. It was trade off that I was already
aware of, which was made during the last week of the jam. I only had a couple
of days left and barely a story put together, lots of assets not drawn, an
incomplete battle system, suffice to say: barely a game.

I mean, even the bossfight was last minute!! I'm the most surprised that it was
submitted in time with the trailer and all (check out [Anxst trailer on YouTube](https://www.youtube.com/watch?v=DVFDL_GBdBk)),

<div class="flex justify-center">

<iframe width="640" height="360"
    src="https://www.youtube.com/embed/DVFDL_GBdBk?si=eqKKUgjU1huvdHDN"
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
    web-share" referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

> [!NOTE]- Was that awesome or what??! I'm really proud of this one
>
> *Hit that like and subscribe and click that notification bell button so you don't miss out!* 
>
> Always wanted to say that in a YouTuber-y voice.

Really, if you asked me around September 27th, "Is the game finished?" I'd be
pulling on my hair, mumbling something about fever system, bloody bugs, the
boss' bullets are hitting their spawned children, player hitbox not registering
hits properly, and... holy crap, I'm shaking from adrenaline just recounting
what happened.

## Conveyance

Anyways, I digress. Conveyance was top of mind for me, and that's why Anxst had
a HUD at all. For the combat, if you looked at the game 3-4 days before
submission, there were only the players, enemy, the floor, and the environment.
There were,

- No **Metronome** at the top of the screen, 
- No **fever meter** on the right, 
- No **Nytcast indicator** on the left, 
- No **damage bar** for the enemy.

Those game elements were in there largely inspired by **Dr. Gabriel
Pappalardo**'s talk on Conveyance; a big thank you to **vemm**  who hosted the
free event over at [HG Members](https://coaching.healthygamer.gg/memberships).
One question really knocked me over, "*How would your players play your game if
they don't understand it?*", which made me sigh in frustration at first because
that meant I needed to shift stuff over in order to make room for this, but it
also kicked my butt into gear to make those HUD elements. 

But even with that at top of mind, I couldn't make a more proper tutorial in
time for submission, which is why we ended up with this version of Anxst
tutorial; *an infodump in the form of a dialog*. It was a sacrifice I had to
make, either having a better tutorial or have the game trailer, and I chose the
game trailer because I wanted to learn how to make a video and put it out on
YouTube.

I really, *really* didn't want anything to break in the last minute, which was
why the trailer was the safer choice in my mind. I don't regret the choice
because I'm pretty happy with how everything turned out so far, the trailer is
a banger in my mind because I didn't even think I could make it in the first
place; my expectations were low. But anyways, having a better tutorial is
definitely a lesson that I'll be carrying over to the next jam, if I ever
decide to do any after this. 

## Progression

In the same veins, *difficulty spikes*. This is an interesting one because I
only really realized this after the jam and people have played the game, some
of the difficulty jumps were just a bit too sudden for a lot of players. I
didn't have the chance to invite people to playtest it because the game was
done at the eleventh hour, and I didn't take into account that me being *very
close* to the project would cause problems. I didn't feel the difficulty spike
*because* I'd been playing the game for a bloody month while developing it at
that point, no wonder I felt that it was easy XD 

But at the same time, I'd also decided from the start that I wanted a difficult
game, something that would remind me of how I felt when I got good with Mega
Man Star Force. Elden Ring was a big inspiration for this too, which made me
think, I probably should've put the souls-like tag right from the get-go. The
last minute addition of the bossfight (with the giant HP bar) was inspired by
that, it just felt like something was lacking from my last couple playthroughs
of Anxst near the end of the jam. I thought it wasn't difficult enough, which
brings us back to the problem of being too close to the game and not thinking
about playtesting in the first place, getting a different perspective. 

> [!NOTE] Kudos to anyone who got to the bossfight!

So, I guess it's a creative balance really, while this doesn't excuse the
difficulty caused by tutorial's lack of clarity, the difficulty spike part of
it was me trying to make the game hard enough and fun enough for me to play.
It's narcissistic, sure, but me as a player was top of mind while making the
game. I wanted to make something MMSF-inspired, something that **I** would want
to play, and Anxst is what we ended up with.

## Lessons

A couple of things that I treasure from the players who gave me feedback and
things I noticed,

- Conveyance — tutorials, make 'em better next time; inspirations:
    - [Down is Up: beautiful game, a literal tutorial section!](https://seppe-peelman.itch.io/down-is-up)
    - [Harrow Night: love the keyboard image and the clear description](https://kthemanth.itch.io/harrow-night)
- Progression — be careful of difficulty spikes
    - have more people playtest
    - have people of varying levels of gaming experience play it
    - also depends on creative decision, *difficult* or *playable* game
- Check out these other awesome games!
    - [Doctor Detective: beautiful typing game](https://akt0o.itch.io/doctor-detective)
    - [Day by Day: amazing pixel art, slice-of-life gameplay](https://meilinagames.itch.io/day-by-day)
    - [To-Do: comfy vibes, slice-of-game-jam](https://koolit13.itch.io/to-do)

Having other people play something that I poured a month's worth of care into
and most importantly, getting feedback is something I don't think I've ever
really experienced. There wasn't a day when I wasn't thinking about the bloody
game over the whole of September. And having others play it and feed their
thoughts back about it is... filling? I guess? I don't know how to describe it.
(man discovers the joy of creative work)

## Conclusion

Will I make another game again? Idk, I want nothing to do with making a game
for now, I want to play games! Isn't that why we're HealthyGamers in the first
place??! 

So to honor that, I'm playing [CrossCode](https://www.cross-code.com/en/home)
right now, it's a bloody amazing game, 10/10 would recommend. I can't believe
that it took me this long to find, found out about it while making the music
for Anxst and the YouTube algorithm gods bestowed me with their OST.

It's got Mega Man-feel, SAO-inspired, Pokemon themes, Avatar (Aang) themes,
Zenonia-feel to it. If you liked any of those games or shows, you'll love this
one. It's got great puzzles, brilliant mechanics, beautiful art, and boppin'
music! 

(not an ad, but I wish it was... senpai notice me plz...)

