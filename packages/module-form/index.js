import PModuleForm from './src'

/* istanbul ignore next */
PModuleForm.install = function (Vue) {
  Vue.component(PModuleForm.name, PModuleForm)
}

export default PModuleForm
