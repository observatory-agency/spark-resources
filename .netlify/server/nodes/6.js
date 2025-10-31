import * as server from '../entries/pages/login/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.js";
export const imports = ["_app/immutable/nodes/6.678785f9.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/logo.10e2351e.js","_app/immutable/chunks/sign-in.e306d13e.js"];
export const stylesheets = [];
export const fonts = [];
