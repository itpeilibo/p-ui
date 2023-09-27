import PDetail from './src'

/* istanbul ignore next */
PDetail.install = function (Vue) {
  Vue.component(PDetail.name, PDetail)
}

export default PDetail
