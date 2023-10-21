export function getFutureEvents(events) {
  const today = new Date()
  return events.filter(event => event.times.every(time => today < (new Date(time.end))))
}

export function getPastEvents(events) {
  const today = new Date()
  return events.filter(event => event.times.every(time => (new Date(time.end)) < today))
}

