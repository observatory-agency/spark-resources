import { c as create_ssr_component, v as validate_component, f as add_attribute, e as escape } from "../../chunks/index.js";
import { D as Dashboard, f as fullLogo } from "../../chunks/Dashboard.js";
const Hero = "/_app/immutable/assets/hero-7b9afeb4.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let mostRecentName = data.story.content.body[0].Name;
  let mostRecentCategory = data.story.content.body[0].Category;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${data.session ? `${validate_component(Dashboard, "Dashboard").$$render($$result, { data, pageTitle: "Dashboard" }, {}, {
    default: () => {
      return `<section class="${"px-8 mx-auto mt-6 max-w-7xl"}"><p>Head over to our <a href="${"/resources"}" class="${"text-lg underline text-sparkBlue"}">Resources!</a></p></section>`;
    }
  })}` : `<div class="${"bg-white"}">
		<div class="${"pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48"}"><div class="${"max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"}"><div><a href="${"https://sparkstrategies.co/"}"><img${add_attribute("src", fullLogo, 0)} alt="${"Spark Strategies logo"}" class="${"w-40"}"></a>
					<div class="${"mt-16"}"><div><div class="${"inline-flex sm:space-x-4"}"><span class="${"hidden sm:block rounded bg-rose-50 px-2.5 py-1 text-sm font-semibold text-sparkRaspberry"}">What&#39;s new</span>
								<span class="${"inline-flex items-center space-x-1 text-sm font-medium text-sparkRaspberry"}"><span>New ${escape(mostRecentCategory)} released! ${escape(mostRecentName)}</span>
									
									<svg class="${"w-5 h-5"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"}" clip-rule="${"evenodd"}"></path></svg></span></div></div>
						<div class="${"mt-6 sm:max-w-xl"}"><h1 class="${"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"}">Spark: Knowledge with our Resource Center!
							</h1>
							<p class="${"mt-4 text-xl text-gray-500"}">We continually update our Resource Center with spreadsheets, guides, templates and
								videos to keep your business running smoothly. The best part? It&#39;s 100% free.
							</p></div>
						<div class="${"flex mt-8"}"><a href="${"/register"}" class="${"inline-block px-6 py-3 text-base font-medium text-center text-white border border-transparent rounded-md shadow bg-sparkRaspberry hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"}" data-sveltekit-preload-data>Sign up today</a>
							<a href="${"/login"}" class="${"flex items-center gap-0.5 text-center px-6 py-3 font-medium text-lg text-sparkRaspberry"}" data-sveltekit-preload-data>Sign in  →
							</a></div>
						<div class="${"pt-6 mt-8 border-t border-gray-200"}"><blockquote><div><p class="${"text-base text-gray-500"}">&quot;I just started working on this and it is absolutely packed with value. I can&#39;t
										believe how much it&#39;s filled with. Thank you for your work!&quot;
									</p></div>
								<footer class="${"mt-3"}"><div class="${"flex items-center space-x-3"}"><div class="${"flex-shrink-0"}"><img class="${"w-8 h-8 rounded-full"}" src="${"/dayna-e.jpg"}" alt="${"Dayna E headshot"}"></div>
										<div class="${"text-base font-medium text-gray-700"}">Dayna E., on the 5 Day Profitable Studio Masterclass
										</div></div></footer></blockquote></div></div></div></div>

			<div class="${"sm:mx-auto sm:max-w-3xl sm:px-6"}"><div class="${"py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"}"><div class="${"hidden sm:block"}"><div class="${"absolute inset-y-0 w-screen left-1/2 rounded-l-3xl bg-sparkBlue lg:left-80 lg:right-0 lg:w-full"}"></div></div>
					<div class="${"relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"}"><img class="${"w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"}"${add_attribute("src", Hero, 0)} alt="${""}"></div></div></div></div>

		
		<div class="${"relative mt-20"}"><div class="${"lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8"}"><div class="${"relative sm:py-16 lg:py-0"}"><div aria-hidden="${"true"}" class="${"hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"}"><div class="${"absolute inset-y-0 w-full right-1/2 rounded-r-3xl bg-sparkBlue lg:right-72"}"></div></div>
					<div class="${"relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"}">
						<div class="${"relative pb-10 overflow-hidden shadow-xl pt-72 rounded-2xl"}"><img class="${"absolute inset-0 object-cover w-full"}" src="${"/resource-callout.jpg"}" alt="${""}">
							<div class="${"absolute inset-0 bg-sparkRaspberry mix-blend-multiply"}"></div>
							<div class="${"absolute inset-0 bg-gradient-to-t from-sparkRaspberry via-sparkRaspberry opacity-20"}"></div>
							<div class="${"relative px-8"}"><blockquote class="${"mt-8"}"><div class="${"relative text-lg font-medium text-white md:flex-grow"}"><svg class="${"absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-sparkRaspberry/90"}" fill="${"currentColor"}" viewBox="${"0 0 32 32"}" aria-hidden="${"true"}"><path d="${"M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"}"></path></svg>
										<p class="${"relative"}">Nicole is the best investment you will make into your studio business. We set
											up SOPs, rebranded our studio&#39;s foundation and changed our whole sales
											process. In 4 months my investment in her program has already been returned
											and then some.
										</p></div>

									<footer class="${"mt-4"}"><p class="${"text-base font-semibold text-white/70"}">Courtney Brooks, Owner at Soul Sweat
										</p></footer></blockquote></div></div></div></div>

				<div class="${"relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0"}">
					<div class="${"pt-12 sm:pt-16 lg:pt-20"}"><h2 class="${"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}">We&#39;re on a mission to empower heart-led leaders.
						</h2>
						<div class="${"mt-6 space-y-6 text-gray-500"}"><p class="${"text-lg"}">Spark Strategies was built from a deep need for professionalization in the industry
								we love the most. We believe that every female entrepreneur deserves the knowledge
								and tools required to run a business that not only survives - but thrives! Inside
								this library, you&#39;ll find the very best of what we know about running a boutique
								studio business. The best part? It&#39;s on us.
							</p></div></div>

					
					</div></div></div>

		
		<div class="${"mt-32"}"><div class="${"max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"}"><div class="${"lg:grid lg:grid-cols-2 lg:items-center lg:gap-24"}"><div><h2 class="${"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}">Trusted by our clients
						</h2>
						<p class="${"max-w-3xl mt-6 text-lg leading-7 text-gray-500"}">To date, Spark Strategies has served hundreds of boutique fitness and wellness
							businesses. Our clients include large franchises, appointment-based businesses,
							class-based studios, mom and pop shops, and everything in between.
						</p></div>
					<div class="${"mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"}"><div class="${"flex justify-center col-span-1 px-8 py-8 bg-sparkPeach"}"><img class="${"h-12"}" src="${"/logos/soul-sweat.png"}" alt="${"Soul Sweat Logo"}"></div>

						<div class="${"flex justify-center col-span-1 px-8 py-8 bg-sparkPeach"}"><img class="${"h-12"}" src="${"/logos/breathe-together-yoga.png"}" alt="${"Mirage"}"></div>

						<div class="${"flex justify-center col-span-1 px-8 py-8 bg-sparkPeach"}"><img class="${"max-h-12"}" src="${"/logos/earth-aerial-yoga.png"}" alt="${"Tuple"}"></div>

						<div class="${"flex justify-center col-span-1 px-8 py-8 bg-sparkPeach"}"><img class="${"max-h-10"}" src="${"/logos/nest-yoga.png"}" alt="${"Laravel"}"></div>

						<div class="${"flex justify-center col-span-1 px-8 py-8 bg-sparkPeach"}"><img class="${"max-h-12"}" src="${"/logos/spark-hot-yoga.png"}" alt="${"StaticKit"}"></div>

						<div class="${"flex justify-center col-span-1 px-8 py-8 bg-sparkPeach"}"><img class="${"max-h-10"}" src="${"/logos/modo-yoga.png"}" alt="${"Workcation"}"></div></div></div></div></div>

		
		<div class="${"relative mt-24 sm:mt-32 sm:py-16"}"><div class="${"max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"}"><div class="${"relative px-6 py-10 overflow-hidden shadow-xl rounded-2xl bg-sparkRaspberry sm:px-12 sm:py-20"}"><div aria-hidden="${"true"}" class="${"absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"}"><svg class="${"absolute inset-0 w-full h-full"}" preserveAspectRatio="${"xMidYMid slice"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 1463 360"}"><path class="${"text-sparkHeader text-opacity-40"}" fill="${"currentColor"}" d="${"M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"}"></path><path class="${"text-sparkHeader text-opacity-10"}" fill="${"currentColor"}" d="${"M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"}"></path></svg></div>
					<div class="${"relative"}"><div class="${"sm:text-center"}"><h2 class="${"text-3xl font-bold tracking-tight text-white sm:text-4xl"}">Get notified when we release new resources
							</h2>
							<p class="${"max-w-2xl mx-auto mt-6 text-lg text-rose-100"}">Leave your email here and you&#39;ll be the first to know when a new resource drops!
							</p></div>
						<form action="${"https://formspree.io/f/xzbqeoeg"}" method="${"POST"}" class="${"mt-12 sm:mx-auto sm:flex sm:max-w-lg"}"><div class="${"flex-1 min-w-0"}"><label for="${"cta-email"}" class="${"sr-only"}">Email address</label>
								<input id="${"cta-email"}" type="${"email"}" name="${"email"}" class="${"block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"}" placeholder="${"Enter your email"}" required></div>
							<div class="${"mt-4 sm:mt-0 sm:ml-3"}"><button type="${"submit"}" class="${"block w-full px-5 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"}">Notify me</button></div></form></div></div></div></div></div>`}`;
});
export {
  Page as default
};
