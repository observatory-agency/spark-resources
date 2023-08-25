import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../chunks/index.js";
import { L as Logo } from "../../../chunks/logo.js";
import { s as signIn } from "../../../chunks/sign-in.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  console.log(form);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-cg5odq_START -->${$$result.title = `<title>Password Reset | Spark Resources</title>`, ""}<!-- HEAD_svelte-cg5odq_END -->`, ""}

<div class="${"flex min-h-full"}"><div class="${"flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"}"><div class="${"w-full max-w-sm mx-auto lg:w-96"}"><div><a href="${"/"}"><img${add_attribute("src", Logo, 0)} alt="${"Spark Strategies logo"}" class="${"w-16"}"></a>
				<h2 class="${"mt-6 text-3xl font-bold tracking-tight text-gray-900"}">Create a new password</h2>
				<p class="${"mt-2 text-sm text-gray-600"}">Please create a new password.</p>
				<p class="${"mt-2 text-gray-600"}">Make sure you clicked on the link in your email!</p></div>

			<div class="${"mt-8"}"><div class="${"mt-6"}"><form action="${"?/update"}" method="${"POST"}" class="${"space-y-6"}"><div><label for="${"password"}" class="${"block text-sm font-medium text-sparkHeader"}">Password</label>
							<div class="${"mt-1"}"><input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"current-password"}" required placeholder="${"Must be at least 6 characters"}" class="${"block w-full px-3 py-2 placeholder-gray-400 border border-sparkHeader/70 rounded-md shadow-sm appearance-none focus:border-sparkRaspberry focus:outline-none focus:ring-sparkRaspberry"}"></div>
							${form ? `<p class="${"text-red-600 font-semibold"}"></p>
								<div class="${"rounded-md bg-red-50 p-4 mt-3"}"><div class="${"flex"}"><div class="${"flex-shrink-0"}">
											<svg class="${"h-5 w-5 text-red-400"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"}" clip-rule="${"evenodd"}"></path></svg></div>
										<div class="${"ml-3"}"><h3 class="${"font-medium text-red-800"}">${escape(form.fuck)}</h3></div></div></div>` : ``}</div>
						<div><button type="${"submit"}" class="${"flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sparkRaspberry hover:bg-[#DA1B28] focus:outline-none focus:ring-2 focus:ring-sparkRaspberry focus:ring-offset-2"}">Submit</button></div></form></div></div></div></div>
	<div class="${"relative flex-1 hidden w-0 lg:block"}"><img class="${"absolute inset-0 object-cover w-full h-full"}"${add_attribute("src", signIn, 0)} alt="${""}"></div></div>`;
});
export {
  Page as default
};
