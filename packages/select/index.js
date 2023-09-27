import PSelect from './src'

/* istanbul ignore next */
PSelect.install = function (Vue) {
  Vue.component(PSelect.name, PSelect)
}

export default PSelect
