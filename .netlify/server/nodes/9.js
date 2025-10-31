import * as server from '../entries/pages/register/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/9.50339e14.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/logo.10e2351e.js"];
export const stylesheets = [];
export const fonts = [];
