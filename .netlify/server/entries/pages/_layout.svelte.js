import { c as create_ssr_component } from "../../chunks/index.js";
import "../../chunks/supabase.js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-qyced6_START -->${$$result.title = `<title>Spark Knowledge with our Resource Center | Spark Strategies</title>`, ""}<meta name="${"description"}" content="${"Spark Knowledge with our Resource Center! We continually update our Resource Center with spreadsheets, guides, templates and videos to keep your business running smoothly."}"><!-- HEAD_svelte-qyced6_END -->`, ""}

<main class="${"h-full bg-sparkPeach"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
