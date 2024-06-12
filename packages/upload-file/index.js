import PUploadFile from './src'

/* istanbul ignore next */
PUploadFile.install = function (Vue) {
  Vue.component(PUploadFile.name, PUploadFile)
}

export default PUploadFile
