import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../chunks/index.js";
import { L as Logo } from "../../../chunks/logo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-192p4hk_START -->${$$result.title = `<title>Create an account | Spark Resources</title>`, ""}<!-- HEAD_svelte-192p4hk_END -->`, ""}
<div class="${"flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8"}"><div class="${"sm:mx-auto sm:w-full sm:max-w-md"}"><a href="${"/"}"><img${add_attribute("src", Logo, 0)} alt="${"Spark Strategies logo"}" class="${"w-16 mx-auto"}"></a>
		<h2 class="${"mt-6 text-3xl font-bold tracking-tight text-center text-gray-900"}">Create your account
		</h2>
		<p class="${"mt-2 text-sm text-center text-gray-600"}">Already a member?
			<a href="${"/login"}" class="${"font-medium text-sparkRaspberry hover:text-[#DA1B28]"}">Sign in</a></p></div>

	<div class="${"mt-8 sm:mx-auto sm:w-full sm:max-w-md"}"><div class="${"px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10"}"><form class="${"space-y-6"}" action="${"?/register"}" method="${"POST"}"><div><label for="${"email"}" class="${"block text-sm font-medium text-sparkHeader"}">Email address</label>
					<div class="${"mt-1"}"><input id="${"email"}" name="${"email"}" type="${"email"}" autocomplete="${"email"}" required class="${"block w-full px-3 py-2 placeholder-gray-400 border border-sparkHeader/70 rounded-md shadow-sm appearance-none focus:border-sparkRaspberry focus:outline-none focus:ring-sparkRaspberry"}"></div></div>

				<div><label for="${"password"}" class="${"block text-sm font-medium text-sparkHeader"}">Password</label>
					<div class="${"mt-1"}"><input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"current-password"}" required placeholder="${"Must be at least 6 characters"}" class="${"block w-full px-3 py-2 placeholder-gray-400 border border-sparkHeader/70 rounded-md shadow-sm appearance-none focus:border-sparkRaspberry focus:outline-none focus:ring-sparkRaspberry"}"></div>
					${form ? `<p class="${"text-red-600 font-semibold"}"></p>
						<div class="${"rounded-md bg-red-50 p-4 mt-3"}"><div class="${"flex"}"><div class="${"flex-shrink-0"}">
									<svg class="${"h-5 w-5 text-red-400"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"}" clip-rule="${"evenodd"}"></path></svg></div>
								<div class="${"ml-3"}"><h3 class="${"font-medium text-red-800"}">${escape(form.fuck)}</h3></div></div></div>` : ``}</div>

				<div><button type="${"submit"}" class="${"flex justify-center w-full px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-sparkRaspberry hover:bg-[#DA1B28] focus:outline-none focus:ring-2 focus:ring-sparkRaspberry focus:ring-offset-2"}">Create account</button></div></form>

			
			</div></div></div>`;
});
export {
  Page as default
};
