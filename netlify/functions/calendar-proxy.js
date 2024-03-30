exports.handler = async (event, context) => {
    const { startDate, endDate } = event.queryStringParameters;
    const GOOGLE_CALENDAR_API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
	const calendarId = "devonpottery@gmail.com";
	const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${GOOGLE_CALENDAR_API_KEY}&singleEvents=true&eventTypes=default&eventTypes=focusTime&eventTypes=outOfOffice&timeZone=America%2FEdmonton&maxResults=250&sanitizeHtml=true&timeMin=${startDate}T00%3A00%3A00-06%3A00&timeMax=${endDate}T00%3A00%3A00-06%3A00`;
    
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
