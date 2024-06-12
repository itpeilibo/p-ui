import PForm from './src'

/* istanbul ignore next */
PForm.install = function (Vue) {
  Vue.component(PForm.name, PForm)
}

export default PForm
