import { AuthApiError } from "@supabase/supabase-js";
import { f as fail, r as redirect } from "../../../chunks/index.js";
const actions = {
  reset: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData());
    const { error: err } = await locals.supabase.auth.resetPasswordForEmail(body.email, {
      redirectTo: "https://resources.sparkstrategies.co/update-password"
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
    throw redirect(303, "/update-password");
  }
};
export {
  actions
};
