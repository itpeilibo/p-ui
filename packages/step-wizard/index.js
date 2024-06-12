import PStepWizard from './src'

/* istanbul ignore next */
PStepWizard.install = function (Vue) {
  Vue.component(PStepWizard.name, PStepWizard)
}

export default PStepWizard
