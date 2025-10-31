import * as universal from '../entries/pages/resources/_layout.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/resources/+layout.js";
export const imports = ["_app/immutable/nodes/3.9446477e.js","_app/immutable/chunks/index.77dbd728.js","_app/immutable/chunks/_commonjsHelpers.668aeb87.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/StoryblokComponent.7cbef8c5.js"];
export const stylesheets = [];
export const fonts = [];
