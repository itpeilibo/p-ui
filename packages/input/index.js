import PInput from './src'

/* istanbul ignore next */
PInput.install = function (Vue) {
  Vue.component(PInput.name, PInput)
}

export default PInput
