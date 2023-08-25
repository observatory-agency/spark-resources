import { s as storyblokInit, u as useStoryblokApi, a as apiFactory } from "../../chunks/index3.js";
async function load() {
  storyblokInit({
    accessToken: "qJMNGz9DE0CFLbx8xjnfzwtt",
    use: [apiFactory]
  });
  let storyblokApi = await useStoryblokApi();
  const dataStory = await storyblokApi.get("cdn/stories/dashboard", {
    version: "published"
  });
  return {
    storyblokApi,
    story: dataStory.data.story
  };
}
export {
  load
};
