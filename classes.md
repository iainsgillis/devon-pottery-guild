---
layout: classes.njk
title: Classes
subtitle: Learn with us!
hero: earl-wilcox-iUbsw_VOkbM-unsplash.jpg
attribution: Photo by <a href="https://unsplash.com/@earl_plannerzone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Earl Wilcox</a> on <a href="https://unsplash.com/photos/person-making-clay-pot-on-white-round-plate-iUbsw_VOkbM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
aspectRatio: 640 / 427
description: Learn the ancient art of pottery with classes for handbuilding and throwing on the wheel.
templateEngine: [njk, md]
order: 10
---

{% block lede %}
<div class="lede">
    <img src="/statics/curve.svg" class="curve" inline />
<p>
Pottery classes are a great way to relieve stress and enhance creativity while
learning a new skill! Participants will get a thorough introduction to the craft
of pottery making, have fun and interact with others while creating their own
ceramic pieces from start to finish.
</p>
    <img src="/statics/curve.svg" class="curve" inline />
</div>
{% endblock %}

<section class="flow">

<style>blockquote {font-size: smaller; padding-left: 1ch; border-left: 1ch solid var(--accent)}</style>

## Registration process

If a class is open to registration (whether there are spots available, or a waitlist),
you'll find a toggle to show the registration form in the card for a corresponding class below.

> Note: As of March 2024, we're trying a bit of a modification to our existing registration process.
There might be some kinks, and we appreciate your understanding as we try to streamline our processes
and shorten our feedback time to our members and students, without introducing new vendors and additional
costs to the Guild.

Keep an eye on our [facebook](https://www.facebook.com/groups/164427301476867/) or [instagram](https://www.instagram.com/devonpottery/?hl=en) accounts to be notified when our next round of registration opens.

<div id="class-calendar">

<style>
    .class-full, .class-cancelled, .class-inprogress {
        background-color: var(--accent);
        color: var(--bg);
        text-transform: uppercase;
        font-size: var(--size-0);
        padding-inline: 0.5ex;
        vertical-align: 25%;
    }
    .card {
        position: relative;
        contain: content;
        outline: 1px dotted var(--accent);
        & ::marker {
            color: var(--spot-bg);
        }
    }
    .card:has(.class-cancelled) {
        display: none;
    }
    iframe {
        width: 100%;
        min-height: 500px;
    }
    details {
        cursor: pointer;
    }
</style>

{% import "macros/class.njk" as macros %}
 
{%- for item in classes | running -%}

{{ macros.classCard(item) }}
{%- endfor -%}
</div>
</section>

<section class="flow">

All classes are held downstairs at the site of Devon's first school, just east of the current Robina Baker School, at:

<div class="address">
    <div>
        <address itemscope="itemscope" itemtype="http://data-vocabulary.org/Address">
        <span itemprop="street-address">5 Jasper Court S</span></br>
        <span itemprop="locality">Devon</span>, <span itemprop="region">AB</span></br>
        <span itemprop="postal-code">T9G 1H3</span>
        </address>
    </div>
    <div>
        <iframe title="Google Maps" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5%20Jasper%20Ct%20S,%20Devon,%20AB,%20T9G%201A2+(Devon%20Pottery%20Guild)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
</div>

</section>