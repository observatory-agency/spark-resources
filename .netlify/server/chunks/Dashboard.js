import { c as create_ssr_component, f as add_attribute, e as escape } from "./index.js";
const Logo = "/_app/immutable/assets/emblem-white-b4b56924.svg";
const fullLogo = "/_app/immutable/assets/logo-full-9c0c32e1.svg";
const Dashboard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bg-gradient.svelte-1vp9fe2{background:linear-gradient(\n			to bottom,\n			#e84853,\n			#e85852,\n			#e86650,\n			#e8734f,\n			#e87f4d,\n			#e78b4b,\n			#e69649\n		)}",
  map: null
};
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { pageTitle } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  $$result.css.add(css);
  return `<div>${``}

	
	<div class="${"hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col"}"><div class="${"flex flex-col flex-1 min-h-0 bg-gradient svelte-1vp9fe2"}"><div class="${"flex flex-col flex-1 pt-5 pb-4 overflow-y-auto"}"><div class="${"flex items-center flex-shrink-0 px-4"}"><img${add_attribute("src", Logo, 0)} alt="${"Spark Strategies Icon"}" class="${"w-16"}"></div>
				<nav class="${"flex-1 px-2 mt-6 space-y-2"}"><a href="${"/resources"}" class="${"flex items-center px-2 py-2 font-medium rounded-md bg-sparkOrange/70 text-sparkHeader group"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"flex-shrink-0 w-6 h-6 mr-3 text-sparkBody"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"}"></path></svg>

						Resources
					</a></nav></div>
			<div class="${"flex flex-shrink-0 p-4 border-t border-sparkHeader/30"}"><div class="${"flex items-center"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-8 h-8"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg></div>
					<div class="${"ml-3"}">${data?.session?.user?.user_metadata?.full_name ? `<p class="${"text-sm font-medium text-sparkBody"}">${escape(data.session.user.user_metadata.full_name)}</p>` : `<p class="${"text-sm font-medium text-sparkBody"}">${escape(data.session.user.email)}</p>`}
						<form action="${"/logout"}" method="${"POST"}"><button type="${"submit"}" class="${"text-xs font-medium text-sparkHeader/90 group-hover:text-sparkHeader"}">Logout</button></form></div></div></div></div></div>
	<div class="${"flex flex-col flex-1 md:pl-64"}"><div class="${"flex justify-between pt-2 pl-4 sm:pl-3 sm:pt-3 md:hidden"}"><img${add_attribute("src", fullLogo, 0)} alt="${"Spark Strategies Icon"}" class="${"w-32"}">
			<button type="${"button"}" class="${"-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-sparkHeader hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sparkBlue"}"><span class="${"sr-only"}">Open sidebar</span>
				<svg class="${"w-6 h-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}"></path></svg></button></div>
		<main class="${"flex-1 bg-sparkPeach"}"><div class="${"py-6"}"><div class="${"px-4 mx-auto max-w-7xl sm:px-6 md:px-8"}"><h1 class="${"text-3xl font-semibold lg:text-5xl text-sparkHeader font-display"}">${escape(pageTitle)}</h1></div>
				${slots.default ? slots.default({}) : ``}</div></main></div>
</div>`;
});
export {
  Dashboard as D,
  fullLogo as f
};
