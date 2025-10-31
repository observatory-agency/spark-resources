import { c as create_ssr_component } from "../../chunks/index2.js";
import { createBrowserClient } from "@supabase/ssr";
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "../../chunks/public.js";
/* empty css                   */createBrowserClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
  {
    global: {
      headers: { "X-Client-Info": "@supabase/ssr" }
    }
  }
);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-qyced6_START -->${$$result.title = `<title>Spark Knowledge with our Resource Center | Spark Strategies</title>`, ""}<meta name="description" content="Spark Knowledge with our Resource Center! We continually update our Resource Center with spreadsheets, guides, templates and videos to keep your business running smoothly."><!-- HEAD_svelte-qyced6_END -->`, ""}

<main class="h-full bg-warmWhite">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
