import PSticky from './src'

/* istanbul ignore next */
PSticky.install = function (Vue) {
  Vue.component(PSticky.name, PSticky)
}

export default PSticky
