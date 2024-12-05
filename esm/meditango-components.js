import { p as promiseResolve, b as bootstrapLazy } from './index-31f7d3e6.js';
export { s as setNonce } from './index-31f7d3e6.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.22.3 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["mt-heading",[[1,"mt-heading",{"type":[513],"color":[513]}]]]], options);
});

//# sourceMappingURL=meditango-components.js.map