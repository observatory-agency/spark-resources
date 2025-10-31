import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { D as Dashboard } from "../../../chunks/Dashboard.js";
import "../../../chunks/index3.js";
import { S as StoryblokComponent } from "../../../chunks/StoryblokComponent.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1qf5lbx_START --><script>!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '317938509119198');
	fbq('track', 'PageView');
	<\/script><noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=317938509119198&ev=PageView&noscript=1"></noscript><!-- HEAD_svelte-1qf5lbx_END -->`, ""}

${data.session ? `${validate_component(Dashboard, "Dashboard").$$render($$result, { data, pageTitle: "Resources" }, {}, {
    default: () => {
      return `${data.story ? `${validate_component(StoryblokComponent, "StoryblokComponent").$$render($$result, { blok: data.story.content }, {}, {})}` : ``}`;
    }
  })}` : `<p>login please</p>`}`;
});
export {
  Page as default
};
