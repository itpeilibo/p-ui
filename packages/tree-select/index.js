import PTreeSelect from './src'

/* istanbul ignore next */
PTreeSelect.install = function (Vue) {
  Vue.component(PTreeSelect.name, PTreeSelect)
}

export default PTreeSelect
