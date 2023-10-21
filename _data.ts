import "https://deno.land/std@0.204.0/dotenv/load.ts";

// const _ = await loadEnv({
//     export: true,
//     allowEmptyValues: true,
//   });

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
const instructors = await getSheetData(gids.bios)
const members = await getSheetData(gids.members)

const buildTime = new Date()

export { classes, buildTime, instructors, members }