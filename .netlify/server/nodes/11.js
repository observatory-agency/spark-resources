import * as universal from '../entries/pages/resources/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resources/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/resources/+page.js";
export const imports = ["_app/immutable/nodes/11.a0a25428.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/Dashboard.b2f9f789.js","_app/immutable/chunks/index.77dbd728.js","_app/immutable/chunks/_commonjsHelpers.668aeb87.js","_app/immutable/chunks/StoryblokComponent.7cbef8c5.js"];
export const stylesheets = [];
export const fonts = [];
