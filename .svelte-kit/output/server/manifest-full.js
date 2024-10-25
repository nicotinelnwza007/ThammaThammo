export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bag1.jpg","bag2.jpg","bard.jpg","bg1.jpg","bg2.jpg","dFQROr7oWzulq5Fa5LJQN4Zp8c7v0LKcTNB3GvCTd4G12wEv5rUK5q02HWKMthFhOKp.webp","favicon.png","Group 6.png","Logo.png","lukpacum.jpg","m.jpg","maiprom.jpg","monk01.jpg","monk02.jpg","monk03.jpg","monk04.jpg","monkey.jpg","Monkeyeiei.jpg","MonkeySALT.jpg","Monkrai.jpg","n.jpg","ntwo.jpg","s.jpg","takud.jpg","temple-buddhism-architecture-lighting-asia-4k_1538064708.jpg (1).webp","temple-buddhism-architecture-lighting-asia-4k_1538064708.jpg.webp"]),
	mimeTypes: {".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.wkbp8J-y.js","app":"_app/immutable/entry/app.Bbm9D-u5.js","imports":["_app/immutable/entry/start.wkbp8J-y.js","_app/immutable/chunks/entry.ZVTO8Lcw.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/entry/app.Bbm9D-u5.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DgpfhXQN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/ariyasudfour",
				pattern: /^\/ariyasudfour\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/ariyasudfour/posttest",
				pattern: /^\/ariyasudfour\/posttest\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
