import BackToTop from './BackToTop.vue' 

/**
 * Check why can't use () => {}
 */
BackToTop.install = function (Vue, options) {
  Vue.component(BackToTop.name, BackToTop)
}

export default BackToTop
