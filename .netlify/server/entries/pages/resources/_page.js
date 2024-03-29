import { r as redirect } from "../../../chunks/index2.js";
async function load({ parent }) {
  const { storyblokApi } = await parent();
  const { session } = await parent();
  const dataStory = await storyblokApi.get("cdn/stories/dashboard", {
    version: "published"
  });
  if (!session) {
    throw redirect(303, "/");
  }
  return {
    story: dataStory.data.story
  };
}
export {
  load
};
