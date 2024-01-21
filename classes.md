---
layout: classes.njk
title: Classes
subtitle: Learn with us!
hero: earl-wilcox-iUbsw_VOkbM-unsplash.webp
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

## Registration process

Winter 2024 classes are just around the corner! Take a peek at the schedule and offerings below, and
**[register your interest via this Google Form](https://forms.gle/jX4tzPCVZKd2stwDA)**.

<!-- Keep an eye on our [facebook](https://www.facebook.com/groups/164427301476867/) or [instagram](https://www.instagram.com/devonpottery/?hl=en) accounts to be notified when our winter registration opens, or [email the Guild at devonpottery@gmail.com](mailto:devonpottery@gmail.com) for more information. -->

All submissions are reviewed by the class coordinator. We'll email you to confirm your spot, and to send instructions for payment. More details, including cancellation policies, are included [on the Google Form](https://forms.gle/jX4tzPCVZKd2stwDA).

We're hoping to streamline the registration process in the future.

<div id="class-calendar">

<style>
    .class-full, .class-cancelled {
        background-color: transparent;
        color: var(--text);
        rotate: 15deg;
        transform-origin: 50% 50%;
        position: absolute;
        contain: content;
        inset: 0;
        z-index: 1;
        padding: 1rem;
        display: grid;
        place-content: center;
        font-size: 5em;
        font-weight: 900;
    }
    .card {
        position: relative;
        contain: content;
    }
    .class-full ~ *,
    .class-cancelled ~ *  {
        filter: blur(2px) contrast(1.25) grayscale(1);
    }
    .class-cancelled {
        font-size: var(--size-5);
    }
    .cancelled-reason {
        font-size: var(--size-2);
        background-color: inherit;
        text-align: center;
    }
</style>

{% import "macros/class.njk" as macros %}
 
{%- for item in classes -%}

{{ macros.classCard(item) }}
{%- endfor -%}
<div>
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