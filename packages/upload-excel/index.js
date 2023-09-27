import PUploadExcel from './src'

/* istanbul ignore next */
PUploadExcel.install = function (Vue) {
  Vue.component(PUploadExcel.name, PUploadExcel)
}

export default PUploadExcel
