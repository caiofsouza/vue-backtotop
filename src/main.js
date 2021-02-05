import BackToTop from './BackToTop.vue'

/**
 * Check why can't use () => {}
 */
const install = function installMyComponent(Vue, opt) {
  // Don't install if already installed, or SSR
  if (install.installed || Vue.prototype.$isServer) return
  install.installed = true

  Vue.component(BackToTop.name, BackToTop)
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
BackToTop.install = install

// To allow use as module (npm/webpack/etc.) export component
export default BackToTop
