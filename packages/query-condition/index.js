import PQueryCondition from './src'

/* istanbul ignore next */
PQueryCondition.install = function (Vue) {
  Vue.component(PQueryCondition.name, PQueryCondition)
}

export default PQueryCondition
