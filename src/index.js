import BackToTop from './BackToTop'

BackToTop.install = (Vue, options = {}) => {
  Vue.component(BackToTop.name, BackToTop)
}

export default BackToTop
