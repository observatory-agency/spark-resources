

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register-success/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.623804af.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/logo.10e2351e.js"];
export const stylesheets = [];
export const fonts = [];
