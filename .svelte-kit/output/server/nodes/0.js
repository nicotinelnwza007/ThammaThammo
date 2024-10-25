

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bus2HuVV.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DgpfhXQN.js"];
export const stylesheets = ["_app/immutable/assets/0.DfInwBNb.css"];
export const fonts = [];
