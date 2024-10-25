

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Bvfo5nVq.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DgpfhXQN.js","_app/immutable/chunks/entry.D-AyP7qB.js"];
export const stylesheets = [];
export const fonts = [];
