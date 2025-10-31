import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index2.js";
import { L as Logo } from "../../../chunks/logo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex items-center justify-center h-full"><div class="sm:mx-auto sm:w-full sm:max-w-md"><a href="/"><img${add_attribute("src", Logo, 0)} alt="Spark Strategies logo" class="w-16 mx-auto"></a>
		<h2 class="mt-6 text-4xl font-bold tracking-tight text-center text-gray-900">Thanks for signing up!
		</h2>
		<p class="mt-2 text-lg text-center text-gray-600">Check your email for a confirmation link, then head to the <a href="/login" class="font-medium text-sparkRaspberry hover:text-[#DA1B28]">sign in</a> page.
		</p></div></section>`;
});
export {
  Page as default
};
