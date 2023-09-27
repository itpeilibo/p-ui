import PTreeTable from './src'

/* istanbul ignore next */
PTreeTable.install = function (Vue) {
  Vue.component(PTreeTable.name, PTreeTable)
}

export default PTreeTable
