import { e as error, r as redirect } from "../../../chunks/index.js";
const POST = async ({ locals }) => {
  const { error: err } = await locals.supabase.auth.signOut();
  if (err) {
    throw error(500, err.message);
  }
  throw redirect(303, "/");
};
export {
  POST
};
