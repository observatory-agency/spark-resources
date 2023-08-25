import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-fa3375d5.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-fa3375d5.js","_app/immutable/chunks/index-00f13575.js","_app/immutable/chunks/singletons-e69e39e4.js","_app/immutable/chunks/supabase-df99be19.js","_app/immutable/chunks/_commonjsHelpers-725317a4.js"];
export const stylesheets = ["_app/immutable/assets/styles-18ab528d.css"];
export const fonts = [];
