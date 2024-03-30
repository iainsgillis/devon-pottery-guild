// netlify/functions/calendar-proxy.js
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
	const GOOGLE_CALENDAR_API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
	const calendarId = "devonpottery@gmail.com";
	const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${GOOGLE_CALENDAR_API_KEY}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: "Error fetching calendar events",
				details: error,
			}),
		};
	}
};
