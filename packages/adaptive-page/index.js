import PAdaptivePage from './src'

/* istanbul ignore next */
PAdaptivePage.install = function (Vue) {
  Vue.component(PAdaptivePage.name, PAdaptivePage)
}

export default PAdaptivePage
