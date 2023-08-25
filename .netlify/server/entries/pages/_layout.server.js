import { getServerSession } from "@supabase/auth-helpers-sveltekit";
async function load(event) {
  return {
    session: await getServerSession(event)
  };
}
export {
  load
};
