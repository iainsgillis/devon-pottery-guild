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

<style>blockquote {font-size: smaller; padding-left: 1ch; border-left: 1ch solid var(--accent)}</style>

<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
<section class="flow">

{# > **Update: January 19, 2025**: Registration for Winter 2025 classes will open on Wednesday, January 22, at ~7:00pm! <add-to-calendar-button
    name="2025 Winter Class Registration Opens - Devon Pottery Guild"
    options="['Google','Apple','iCal','Microsoft365','Outlook.com','Yahoo']"
    timeZone="Canada/Mountain"
    trigger="click"
    location="Online"
    description="Registration and payment is being handled online on a first-come, first-saved basis.  Visit https://devonpotteryguild.com/classes/#registration-process, and follow the link to our Square Online page."
    inline
    label="Add a calendar reminder"
    iCalFileName="DPGwinterReg2025"
    startDate="2025-01-22"
    endDate="2025-01-22"
    startTime="19:00"
    endTime="19:00"></add-to-calendar-button> #}

Further down the page, you'll find information about [our classes in general](#about-our-classes), 
[our registration process](#registration-process), and [kids' classes](#what-about-kids-classes).

## Current classes

Winter 2025 classes are in session, and registration is currently closed.
Current classes are included here as a reference for those interested in future
classes to see what representative class descriptions look like. 

Watch this space and our social media channels for updates about future registrations.

<div id="class-calendar">

<style>
    .class-full, .class-cancelled, .class-inprogress {
        background-color: var(--accent);
        color: var(--bg);
        text-transform: uppercase;
        font-size: var(--size-0);
        padding-inline: 0.5ex;
        margin-inline: 1ex;
        vertical-align: 25%;
    }
    .card {
        position: relative;
        contain: content;
        outline: 1px dotted var(--accent);
        & h2 {
            color: revert;
        };
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
{% import "macros/link.njk" as link %}
 
{%- for item in classes | running -%}

{{ macros.classCard(item) }}
{%- endfor -%}
</div>

</section>

<section class="flow">

## Registration process

We process registrations with Square Online to better integrate our
registration process with our financial records.

All registration is on a first-come, first-served basis, with full payment due
at the time of registration.

{# {{ link.bigbuttonlink(href="https://devon-pottery-guild.square.site/shop/pottery-classes/6373XYJTRIHAR6V3VW6AC7CA", text="Take me to the registration page!") }} #}


There are no active registrations at this time. 

Keep an eye on our [facebook](https://www.facebook.com/people/Devon-Pottery-Guild/61568769758708/) or [instagram](https://www.instagram.com/devonpottery/?hl=en) accounts to be notified when our next round of registration opens.


</section>

<section class="flow">

## About our classes

The Guild's pottery classes normally run as 10-week sessions, and normally start
in September, January, and March.

We strive to get registration available at least two weeks before classes begin.

Classes are kept small, with most classes capped at 8 participants.

**All classes require a minimum of 5 students enrolled to proceed.[*](#refunds)**

Most classes are open to the public, and most of those classes are open to
beginners. Some additional classes and workshops are periodically made available
exclusively to Guild members.

**Unless otherwise noted, you must be at least 18 years old to join a class.**

(Similarly, Guild membership is only available to [adults](https://kings-printer.alberta.ca/1266.cfm?page=A06.cfm&leg_type=Acts&isbncln=0779700015&display=html).)

### Refunds

**There will be no refunds for class registration fees**, unless the class is
cancelled due to low enrolment.

If an Instructor cancels an individual class session (due to illness or
emergency) the Instructor will make up for it at a time to be agreed upon in
consultation with the class participants.

### Class location

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

### What about kids classes?

Unfortunately, the Devon Pottery Guild doesn't normally offer kids' classes
during the September–June season. We have run summer sessions for kids in the
past, and have this on our roadmap for serious consider in 2025, but nothing is
confirmed at this time.

</section>
