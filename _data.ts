import "https://deno.land/std@0.204.0/dotenv/load.ts";
import { exists } from "https://deno.land/std/fs/mod.ts";
import { parse } from "https://deno.land/std@0.208.0/yaml/mod.ts";


async function generateGalleriesData(galleryPath: string) {
    const galleries = [];
    if (await exists(galleryPath)) {
        for await (const dirEntry of Deno.readDir(galleryPath)) {
            if (dirEntry.isDirectory) {
                const galleryDirPath = `${galleryPath}/${dirEntry.name}`;
                const dataYamlPath = `${galleryDirPath}/_data.yaml`;
                if (await exists(dataYamlPath)) {
                    const yamlContent = await Deno.readTextFile(dataYamlPath);
                    const galleryData = parse(yamlContent) as object;

                    // @ts-ignore  dynamically assigning images
                    galleryData.images = [];

                    for await (const file of Deno.readDir(galleryDirPath)) {
                        if (file.isFile && (file.name.endsWith('.jpg') || file.name.endsWith('.jpeg') || file.name.endsWith('.png'))) {
                            // @ts-ignore  dynamically assigning images
                            galleryData.images.push({ url: `/${galleryDirPath}/${file.name}` });
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
    members: 361992683
}

async function getSheetData(gid: number) {
    const url = `https://docs.google.com/spreadsheets/d/e/${Deno.env.get("GOOGLE_SHEET_ID")}/pub?gid=${gid}&output=tsv`
    const response = await fetch(url)
    const records = (await response.text()).split("\r\n").map(line => line.split("\t"))

    const headings = records.shift() || []
    const data = records.map(line => {
        const record: { [key: string]: string } = {}
        headings.forEach((heading: string, i) => {
            record[heading] = line[i]
        })
        return record
    })
    return data;
}

const classes = await getSheetData(gids.classes);
classes.sort((a, b) => parseInt(b["spots_left"]) - (parseInt(a["spots_left"])))
const instructors = await getSheetData(gids.bios)
const members = await getSheetData(gids.members)

const buildTime = new Date()

const galleries = await generateGalleriesData("gallery_pix")

export { classes, buildTime, instructors, members, galleries }