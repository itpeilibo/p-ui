import PProtocol from './src'

/* istanbul ignore next */
PProtocol.install = function (Vue) {
  Vue.component(PProtocol.name, PProtocol)
}

export default PProtocol
