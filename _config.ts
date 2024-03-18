import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import date from "lume/plugins/date.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import sitemap from "lume/plugins/sitemap.ts";
import source_maps from "lume/plugins/source_maps.ts";
import postcss from "lume/plugins/postcss.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

// import daisyui from "npm:daisyui";

import * as filters from "./_filters.ts";

const markdown = { options: {typographer: true}};
const site = lume({ location: new URL("https://devonpotteryguild.com"), }, { markdown });


site.use(nunjucks());
site.use(date());
site.use(inline());
site.use(metas());
site.use(nav());

site.use(picture());
site.use(transformImages({ /* cache: false, */ }));
site.use(sitemap());
site.use(source_maps());
site.use(postcss());
site.use(lightningCss());
site.use(relativeUrls());

site.use(sourceMaps());
site.copy("statics");
site.copy("fonts");
site.copy("favicon", (file: string) => {
  let adjusted_file: string;
  if (["/favicon/favicon.ico", "/favicon/site.webmanifest"].includes(file)) {
    adjusted_file = file.replace("/favicon", "")
  } else {
    adjusted_file = file.replace("/favicon", "/statics")
  }
  return adjusted_file;
});
site.copy("netlify");

site.filter("future", filters.getFutureEvents);
site.filter("past", filters.getPastEvents);
site.filter("running", filters.getRunningClasses);
site.use(minify_html());

export default site;
