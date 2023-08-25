import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dayna-e.jpg","favicon.svg","logos/breathe-together-yoga.png","logos/earth-aerial-yoga.png","logos/modo-yoga.png","logos/nest-yoga.png","logos/soul-sweat.png","logos/spark-hot-yoga.png","resource-callout.jpg","resource.jpg","resources/document.jpg","resources/pdf.png","resources/spreadsheet.png","resources/video.png"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-7de59993.js","imports":["_app/immutable/start-7de59993.js","_app/immutable/chunks/index-00f13575.js","_app/immutable/chunks/singletons-e69e39e4.js","_app/immutable/chunks/supabase-df99be19.js","_app/immutable/chunks/_commonjsHelpers-725317a4.js","_app/immutable/chunks/control-f5b05b5f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/landing-pages/[...slug]",
				pattern: /^\/landing-pages(?:\/(.*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/logout/_server.js')
			},
			{
				id: "/password-reset-success",
				pattern: /^\/password-reset-success\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/password-reset",
				pattern: /^\/password-reset\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/register-success",
				pattern: /^\/register-success\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/update-password",
				pattern: /^\/update-password\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
