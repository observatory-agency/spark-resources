import { s as storyblokInit, u as useStoryblokApi, a as apiFactory } from "../../../chunks/index3.js";
import { c as create_ssr_component, f as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/index2.js";
import { S as StoryblokComponent } from "../../../chunks/StoryblokComponent.js";
const ResourceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blok } = $$props;
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `<div class="transition duration-300 assCheese ease-in-out transform rounded-lg hover:shadow-xl hover:scale-[1.01] hover:translate-x-1.5 hover:translate-y-1.5"><a${add_attribute("href", blok.Link.url, 0)} target="_blank" rel="noreferrer"><div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow h-full"><div><img${add_attribute("src", blok.Image.filename, 0)}${add_attribute("alt", blok.Name, 0)} class="object-cover object-center w-full h-56"></div>
			<div class="px-4 py-5 space-y-4 sm:p-6"><span class="inline-flex items-center rounded-full bg-sparkHeader px-3 py-0.5 text-sm font-medium text-white">${escape(blok.Category)}</span>
				<div><h3 class="text-lg font-medium leading-6 2xl:text-xl text-sparkHeader">${escape(blok.Name)}</h3>
					<p class="max-w-2xl mt-2 text-sparkBody/80">${escape(blok.Description.content[0].content[0].text)}</p></div></div></div></a></div>`;
});
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blok } = $$props;
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `<section class="grid gap-6 px-4 mx-auto mt-8 xl:grid-cols-3 max-w-7xl sm:px-6 md:px-8">${each(blok.body, (blok2) => {
    return `${validate_component(StoryblokComponent, "StoryblokComponent").$$render($$result, { blok: blok2 }, {}, {})}`;
  })}</section>`;
});
async function load() {
  storyblokInit({
    accessToken: "qJMNGz9DE0CFLbx8xjnfzwtt",
    use: [apiFactory],
    components: {
      resource_card: ResourceCard,
      Dashboard
    }
  });
  let storyblokApi = await useStoryblokApi();
  return {
    storyblokApi
  };
}
export {
  load
};
