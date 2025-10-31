import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.f8ee7f64.js","_app/immutable/chunks/index.4ea1fc30.js","_app/immutable/chunks/singletons.258f172c.js","_app/immutable/chunks/_commonjsHelpers.668aeb87.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/styles.e16c25b6.css"];
export const fonts = [];
