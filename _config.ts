import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import imagick from "lume/plugins/imagick.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import sitemap from "lume/plugins/sitemap.ts";
import source_maps from "lume/plugins/source_maps.ts";
// import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

// import daisyui from "npm:daisyui";

import * as filters from "./_filters.ts";

const site = lume({ location: new URL("https://devonpotteryguild.com"), });

site.use(date());
site.use(inline());
site.use(metas());
site.use(nav());

site.use(picture());
site.use(imagick({ /* cache: false, */ }));
site.use(sitemap());
site.use(source_maps());
// site.use(tailwindcss({
//   options: {
//     plugins: [daisyui],
//   }
// }));
site.use(postcss());
site.use(lightningCss());
site.use(relativeUrls());

site.use(sourceMaps());
site.copy("statics");
site.copy("fonts");
site.copy("favicon", (file: string) => {
  if (["/favicon/favicon.ico", "/favicon/site.webmanifest"].includes(file)) {
    file = file.replace("/favicon", "")
  } else {
    file = file.replace("/favicon", "/statics")
  }
  return file
});
site.copy("netlify");

site.filter("future", filters.getFutureEvents);
site.filter("past", filters.getPastEvents);
site.use(minify_html());

export default site;
