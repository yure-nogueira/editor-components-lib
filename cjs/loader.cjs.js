'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed9d7c7f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["mt-heading.cjs",[[1,"mt-heading",{"type":[513],"color":[513]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map