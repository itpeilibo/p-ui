import PButton from './src'

/* istanbul ignore next */
PButton.install = function (Vue) {
  Vue.component(PButton.name, PButton)
}

export default PButton
