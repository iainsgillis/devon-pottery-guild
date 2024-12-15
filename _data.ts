import "https://deno.land/std@0.204.0/dotenv/load.ts";
import { exists } from "https://deno.land/std@0.208.0/fs/mod.ts";
import { parse as yamlParse } from "https://deno.land/std@0.208.0/yaml/mod.ts";
import { parse as csvParse } from "https://deno.land/std@0.208.0/csv/mod.ts";

async function generateGalleriesData(galleryPath: string) {
	const galleries = [];
	if (await exists(galleryPath)) {
		for await (const dirEntry of Deno.readDir(galleryPath)) {
			if (dirEntry.isDirectory) {
				const galleryDirPath = `${galleryPath}/${dirEntry.name}`;
				const dataYamlPath = `${galleryDirPath}/_data.yaml`;
				if (await exists(dataYamlPath)) {
					const yamlContent = await Deno.readTextFile(dataYamlPath);
					const galleryData = yamlParse(yamlContent) as object;

					// @ts-ignore  dynamically assigning images
					galleryData.images = [];

					for await (const file of Deno.readDir(galleryDirPath)) {
						if (
							file.isFile &&
							(file.name.endsWith(".jpg") ||
								file.name.endsWith(".jpeg") ||
								file.name.endsWith(".png"))
						) {
							// @ts-ignore  dynamically assigning images
							galleryData.images.push({
								url: `${galleryDirPath}/${file.name}`,
							});
						}
					}
					galleries.push(galleryData);
				}
			}
		}
	}
	return galleries;
}

const gids = {
	classes: 0,
	instructors: 478123071,
	bios: 614099116,
	members: 361992683,
};

async function getSheetData(gid: number) {
	const url = `https://docs.google.com/spreadsheets/d/e/${Deno.env.get(
		"GOOGLE_SHEET_ID",
	)}/pub?gid=${gid}&output=tsv`;
	const response = await fetch(url);
	const txt = await response.text();
	const records = (await csvParse(txt, {
		header: true,
        skipFirstRow: true,
		separator: "\t",
	})) as Record<string, string>[];

	return records;
}

const classes = await getSheetData(gids.classes);
classes.sort(
	(a, b) => (Date.parse(b.start_date) - Date.parse(a.start_date)) + (Number.parseInt(b.spots_left) - Number.parseInt(a.spots_left)),
);
const instructors = await getSheetData(gids.bios);
const members = await getSheetData(gids.members);

const buildTime = new Date();

const galleries = await generateGalleriesData("gallery_pix");

export { classes, buildTime, instructors, members, galleries };
