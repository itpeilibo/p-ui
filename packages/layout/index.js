import PLayout from './src'

/* istanbul ignore next */
PLayout.install = function (Vue) {
  Vue.component(PLayout.name, PLayout)
}

export default PLayout
