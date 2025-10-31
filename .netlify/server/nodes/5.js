import * as universal from '../entries/pages/landing-pages/_...slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/landing-pages/_...slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/landing-pages/[...slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.6f0b91c8.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/index.77dbd728.js","_app/immutable/chunks/_commonjsHelpers.668aeb87.js","_app/immutable/chunks/StoryblokComponent.7cbef8c5.js"];
export const stylesheets = [];
export const fonts = [];
