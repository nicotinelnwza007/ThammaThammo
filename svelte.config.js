/** @type {import('@sveltejs/kit').Config} */const config = { kit: { csp: { directives: { 'script-src': ['self'] }, reportOnly: { 'script-src': ['self'] } } } };
export default config;