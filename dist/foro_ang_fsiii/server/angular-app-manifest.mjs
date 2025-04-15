
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5037, hash: '09dce5c10c482ac9ea00daf50002bbcecdabe8bfab7fe2d5d99e9a7210d5eab2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: 'd488df3cb12fd3f3b78668f245213ca4981e172aa9d37c7f268cb40b0a3f7a80', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DPQ53L3S.css': {size: 230768, hash: 'eeRGZBkJAUs', text: () => import('./assets-chunks/styles-DPQ53L3S_css.mjs').then(m => m.default)}
  },
};
