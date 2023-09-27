import PAntModal from './src'
import PAntProtocol from './src/protocol.vue'

/* istanbul ignore next */
PAntModal.install = function (Vue) {
  Vue.component(PAntModal.name, PAntModal)
}

export {
  PAntModal,
  PAntProtocol
}
