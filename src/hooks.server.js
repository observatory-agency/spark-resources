import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';

const SESSION_TIMEOUT_MS = 3000;

export const handle = async ({ event, resolve }) => {
    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            get: (key) => event.cookies.get(key),
            set: (key, value, options) => {
                event.cookies.set(key, value, { ...options, path: '/' });
            },
            remove: (key, options) => {
                event.cookies.delete(key, { ...options, path: '/' });
            }
        }
    });

    event.locals.getSession = async () => {
        try {
            const result = await Promise.race([
                event.locals.supabase.auth.getSession(),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Session fetch timed out')), SESSION_TIMEOUT_MS)
                )
            ]);
            return result.data.session;
        } catch (e) {
            console.error('getSession failed:', e.message);
            return null;
        }
    };

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range';
        }
    });
};
