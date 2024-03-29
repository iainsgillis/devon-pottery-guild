---
private: true
---

<style>
  html, body {
    min-height: 100%;
    margin: 0;
  }
  body {
    display: flex;
    display: -webkit-flex;
    -webkit-justify-content: center;
            justify-content: center;
    -webkit-align-items: center;
            align-items: center;
  }
  iframe {
    display: block;
    outline: none;
    height: 100%;
    width: 100%;
  }
</style>

<main>
<h1>Classes</h1>
<noscript>
<iframe src="https://calendar.google.com/calendar/u/0/embed?src=devonpottery@gmail.com&ctz=America/Edmonton&title=DPG%20Classes&wkst=1&showTabs=0&mode=WEEK&showCalendars=0&showPrint=0" frameborder="0"></iframe>
</noscript>
<ol id="calendar"></ol>
</main>

<script>
  const d1 = new Date();
  d1.setDate(d1.getDate() - (2 * 7));
  const startDate = d1.toISOString().slice(0, 10);

  const d2 = new Date();
  d2.setDate(d2.getDate() + (4 * 7));
  const endDate = d2.toISOString().slice(0, 10);

  const dtFmt = new Intl.DateTimeFormat("en-CA", {dateStyle: "short", timeStyle: "short", timeZone: "Canada/Mountain"})
  const rtFmt = new Intl.RelativeTimeFormat("en",{style: "short"});

  const periodValue = `${startDate}-${endDate}`
  let shouldFetch = false;
  if (Object.is(localStorage.getItem("@dpg/events"), null) || Object.is(localStorage.getItem("@dpg/period"), null) || (localStorage.getItem("@dpg/period") < periodValue)) {
    localStorage.setItem("@dpg/period", periodValue)
    shouldFetch = true;
  }

  if (shouldFetch) {
    console.info("updating calendar data")
    const url = `https://clients6.google.com/calendar/v3/calendars/devonpottery@gmail.com/events?calendarId=devonpottery%40gmail.com&singleEvents=true&eventTypes=default&eventTypes=focusTime&eventTypes=outOfOffice&timeZone=America%2FEdmonton&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=${startDate}T00%3A00%3A00-06%3A00&timeMax=${endDate}T00%3A00%3A00-06%3A00&key=AIzaSyAwBtjzb2Gy0OC1eNBSRPVkJLMfhipHi5c`
    fetch(url)
      .then(r => r.json())
      .then(j => {
        const events = j.items.map(el => ({title: el.summary, start: el.start.dateTime, end: el.end.dateTime}));
        events.sort((a, b) => a.start < b.start ? -1 : 1);
        localStorage.setItem("@dpg/events", JSON.stringify(events));
        updateDom(events)
      })
      .catch(err => console.error(err))
  } else {
    console.info("loading calendar data from localStorage")
    const events = JSON.parse(localStorage.getItem("@dpg/events"));
    updateDom(events);
  }
  
  
  function updateDom(data) {
    const now = new Date()
      const html = data.map(ev => {
        const evStart = Date.parse(ev.start);
        const nDays = (evStart - now) / (1000 * 60 * 60 * 24);
        let unit, time;
        if (Math.abs(nDays) < 1) {
          unit = "hours";
          time = Math.floor(nDays * 24);
        } else if (Math.abs(nDays) > 7) {
          unit = "weeks";
          time = Math.floor(nDays / 7);
        } else {
          unit = "days"
          time = Math.floor(nDays);
        }
        
        return `<li>
          <h2><time datetime="${ev.start}">${dtFmt.format(evStart)}</time></h2>
          <p>${rtFmt.format(time, unit)}</p>
          <p>${ev.title}</p>
        </li>`}).join("");
      document.querySelector("#calendar").innerHTML = html;}
</script>
