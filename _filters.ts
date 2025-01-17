import { existsSync } from "https://deno.land/std/fs/mod.ts";
import { join, dirname } from "https://deno.land/std/path/mod.ts";

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

async function imageToBase64(filePath) {
    const file = await Deno.readFile(filePath);
    let binaryString = '';
    
    // Process the binary data in chunks to avoid stack overflow
    const CHUNK_SIZE = 0x8000; // Define a chunk size (e.g., 32 KB)
    for (let i = 0; i < file.length; i += CHUNK_SIZE) {
        binaryString += String.fromCharCode.apply(
            null,
            new Uint8Array(file.subarray(i, i + CHUNK_SIZE))
        );
    }
    
    return btoa(binaryString);
}


export async function getCaption(imgUrl: string): Promise<string> {
    // Extract filename without extension
    const baseName = imgUrl.split("/").at(-1)?.split(".")[0] || "caption";
    const txtPath = join(dirname(imgUrl), `${baseName}.txt`);

    // Check if caption file already exists
    if (existsSync(txtPath)) {
        const caption = await Deno.readTextFile(txtPath);
        return caption;
    }

    // If no file found, generate caption
    const b64string = await imageToBase64(imgUrl);
    const body = {
        "model": "llama3.2-vision",
        "prompt": `
- Generate an alt tag for this image for the Devon Pottery Guild.
- Do NOT use the phrases “Image of” or “Picture of” or phrases like "The image shows..."
- BAD: The image depicts a room filled with various items.
- GOOD: A room filled with various items.
- Describe what is in the image.
- Maximum length of 150 characters.
- Do NOT enclose the text in quotes: only return the text itself.
- Do NOT use phrases like "possibly" or "likely".
- Avoid adverbs.
- Do NOT use detailed descriptions for complex images
- Do NOT use overly technical language
`,
        "stream": false,
        "images": [b64string]
    };

    const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    const rawCaption = data?.response || "";
	const caption = rawCaption.trim().replace(/["]/g, "").trim().split("\n")[0]
    // Persist the caption to a .txt file
    await Deno.writeTextFile(txtPath, caption);
    console.log(`Caption saved to ${txtPath}`);

    return caption;
}