async function load({ params, parent }) {
  const { storyblokApi } = await parent();
  let slug = params.slug;
  let path = "cdn/stories/landing-pages/";
  if (slug) {
    path += slug;
  }
  const dataStory = await storyblokApi.get(path, {
    version: "draft"
  });
  return {
    story: dataStory.data.story
  };
}
export {
  load
};
