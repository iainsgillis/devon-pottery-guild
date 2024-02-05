type Event = {
  title: string;
  where: string;
  poster: string;
  times: Array<{
    start: string;
    end: string;
  }>;
};

export function getFutureEvents(events: Event[]) {
  const today = new Date()
  return events.filter(event => event.times.every(time => today < (new Date(time.end))))
}

export function getPastEvents(events: Event[]) {
  const today = new Date()
  return events.filter(event => event.times.every(time => (new Date(time.end)) < today))
}

