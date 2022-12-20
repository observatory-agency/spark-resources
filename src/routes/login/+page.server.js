import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals, url }) => {
		const provider = url.searchParams.get('provider');

		if (provider) {
			const { data, error: err } = await locals.sb.auth.signInWithOAuth({
				provider: provider
			});
			if (err) {
				return fail(400, {
					message: 'Invalid email or password'
				});
			}

			throw redirect(303, data.url);
		}

		const body = Object.fromEntries(await request.formData());
		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: body.email,
			password: body.password
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					message: 'Invalid email or password'
				});
			}
			return fail(500, {
				message: 'Server error: something went wrong'
			});
		}

		throw redirect(303, '/');
	}
};
