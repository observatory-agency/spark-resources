import { AuthApiError } from "@supabase/supabase-js";
import { f as fail, r as redirect } from "../../../chunks/index2.js";
const actions = {
  register: async ({ request, locals, url }) => {
    const provider = url.searchParams.get("provider");
    if (provider) {
      const { data, error: err2 } = await locals.sb.auth.signInWithOAuth({
        provider
      });
      if (err2) {
        return fail(400, {
          message: "Invalid email or password"
        });
      }
      throw redirect(303, data.url);
    }
    const body = Object.fromEntries(await request.formData());
    const { error: err } = await locals.sb.auth.signUp({
      email: body.email,
      password: body.password
    });
    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
        return fail(400, {
          message: "Invalid email or password"
        });
      }
      return fail(500, {
        message: "Server error: something went wrong",
        fuck: err.message
      });
    }
    throw redirect(303, "/register-success");
  }
};
export {
  actions
};
