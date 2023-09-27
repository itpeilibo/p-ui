import PDialog from './src'

/* istanbul ignore next */
PDialog.install = function (Vue) {
  Vue.component(PDialog.name, PDialog)
}

export default PDialog
