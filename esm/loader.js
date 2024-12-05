import { b as bootstrapLazy } from './index-31f7d3e6.js';
export { s as setNonce } from './index-31f7d3e6.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["mt-heading",[[1,"mt-heading",{"type":[513],"color":[513]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map