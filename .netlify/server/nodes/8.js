

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/password-reset-success/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.f0dd33e7.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/logo.10e2351e.js","_app/immutable/chunks/sign-in.e306d13e.js"];
export const stylesheets = [];
export const fonts = [];
