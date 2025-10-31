import * as universal from '../entries/pages/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/4.f3e4dbfa.js","_app/immutable/chunks/index.77dbd728.js","_app/immutable/chunks/_commonjsHelpers.668aeb87.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/Dashboard.b2f9f789.js"];
export const stylesheets = [];
export const fonts = [];
