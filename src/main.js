const BackToTop = require('./BackToTop.vue') 

BackToTop.install = (Vue, options = {}) => {
  Vue.component(BackToTop.name, BackToTop)
}

module.exports = BackToTop
