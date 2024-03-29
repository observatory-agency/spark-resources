import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index.js";
import { L as Logo } from "../../../chunks/logo.js";
import { s as signIn } from "../../../chunks/sign-in.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  console.log(form);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-cg5odq_START -->${$$result.title = `<title>Password Reset | Spark Resources</title>`, ""}<!-- HEAD_svelte-cg5odq_END -->`, ""}

<div class="${"flex min-h-full"}"><div class="${"flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"}"><div class="${"w-full max-w-sm mx-auto lg:w-96"}"><div><a href="${"/"}"><img${add_attribute("src", Logo, 0)} alt="${"Spark Strategies logo"}" class="${"w-16"}"></a>
				<h2 class="${"mt-6 text-3xl font-bold tracking-tight text-gray-900"}">Password reset email sent!
				</h2>
				<p class="${"mt-2 text-sm text-gray-600"}">Check your inbox and click the link to create a new password
				</p></div></div></div>
	<div class="${"relative flex-1 hidden w-0 lg:block"}"><img class="${"absolute inset-0 object-cover w-full h-full"}"${add_attribute("src", signIn, 0)} alt="${""}"></div></div>`;
});
export {
  Page as default
};
