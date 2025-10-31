import * as universal from '../entries/pages/landing-pages/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/landing-pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/landing-pages/+layout.js";
export const imports = ["_app/immutable/nodes/2.f02de89f.js","_app/immutable/chunks/index.77dbd728.js","_app/immutable/chunks/_commonjsHelpers.668aeb87.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/StoryblokComponent.7cbef8c5.js"];
export const stylesheets = ["_app/immutable/assets/2.dd13b79a.css","_app/immutable/assets/styles.e16c25b6.css"];
export const fonts = [];
