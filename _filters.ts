interface Event {
	title: string;
	where: string;
	poster: string;
	times: Array<{
		start: string;
		end: string;
	}>;
}

type Class = {
	weekday: string;
	instructor: string;
	day_enum: string;
	num_classes: string;
	start_time: string;
	end_time: string;
	start_date: string;
	end_date: string;
	exceptions?: string;
	title: string;
	description: string;
	guild_price: string;
	external_price?: string;
	max_participants?: string;
	spots_left?: string;
	form_url?: string;
	form_link_archive?: string;
};

export function getFutureEvents(events: Event[]) {
	const today = new Date();
	return events.filter((event) =>
		event.times.every((time) => today < new Date(time.end)),
	);
}

export function getPastEvents(events: Event[]) {
	const today = new Date();
	return events.filter((event) =>
		event.times.every((time) => new Date(time.end) < today),
	);
}

export function getRunningClasses(classes: Class[]) {
	const today = new Date();
	return classes.filter((klass) => today <= new Date(klass.end_date));
}

export function getAddToCalendarDates(event: Event) {
	const dates = [];
	for (const time of event.times) {
		const obj = { name: "", startDate: "", startTime: "", endTime: "" };
		obj.name = event.title;
		const [startDate, startTime] = time.start.split("T");
		const [_, endTime] = time.end.split("T");
		obj.startDate = startDate;
		obj.startTime = startTime;
		obj.endTime = endTime;
		dates.push(obj);
	}
	const out = JSON.stringify(dates);
	return out;
}

export function smSuffix(imgUrl: string) {
	const i = imgUrl.lastIndexOf(".");
	return `${imgUrl.slice(0, i)}-sm${imgUrl.slice(i)}`;
}

export function getProductId(itemUrl: string) {
	if (URL.canParse(itemUrl)) {
		const url = new URL(itemUrl);
		return url.pathname.replace(/\/$/, "").split("/").at(-1);
	}
	return itemUrl.replace(/\/$/, "").split("/").at(-1);
}
