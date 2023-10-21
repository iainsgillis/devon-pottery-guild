---
layout: classes.njk
title: Classes
subtitle: Learn with us!
hero: earl-wilcox-iUbsw_VOkbM-unsplash.webp
aspectRatio: 640 / 427
description: Learn the ancient art of pottery with classes for handbuilding and throwing on the wheel.
templateEngine: [njk, md]
---

{% block lede %}
<div class="classes-lede">
    <img src="/statics/curve.svg" class="curve" inline>
    <section>
        Pottery classes are a great way to relieve stress and enhance creativity while
        learning a new skill! Participants will get a thorough introduction to the craft
        of pottery making, have fun and interact with others while creating their own
        ceramic pieces from start to finish.
    </section>
    <img src="/statics/curve.svg" class="curve" inline>
</div>
{% endblock %}

<section class="flow">

## Registration process

To register in a class, [please fill out this Google Form](https://docs.google.com/forms/d/e/1FAIpQLSclFVriggvYdFPbGgaSdJ5Zbhrjbx4jXAjyKoebXi2MCwDAXw/viewform?vc=0&c=0&w=1&flr=0){.plausible-event-name=google_form}.

All submissions are reviewed by the class coordinator. We'll email you to confirm your spot, and to send instructions for payment. More details, including cancellation policies, are included on the Google Form.

<div id="class-calendar">
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
<iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5%20Jasper%20Ct%20S,%20Devon,%20AB,%20T9G%201A2+(Devon%20Pottery%20Guild)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
</div>
</section>