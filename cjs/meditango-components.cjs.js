'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed9d7c7f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.22.3 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('meditango-components.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["mt-heading.cjs",[[1,"mt-heading",{"type":[513],"color":[513]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=meditango-components.cjs.js.map