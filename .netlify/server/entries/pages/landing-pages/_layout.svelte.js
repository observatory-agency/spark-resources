import { c as create_ssr_component } from "../../../chunks/index.js";
/* empty css                      */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"h-full bg-sparkPeach"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
