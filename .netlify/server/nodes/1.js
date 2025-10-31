

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.537dc0aa.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/singletons.258f172c.js"];
export const stylesheets = [];
export const fonts = [];
