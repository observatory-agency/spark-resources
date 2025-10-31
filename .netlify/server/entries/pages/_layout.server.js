async function load({ locals, depends }) {
  depends("supabase:auth");
  const session = await locals.getSession();
  return {
    session
  };
}
export {
  load
};
