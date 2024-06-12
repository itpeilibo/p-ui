import PPhone from './src'

/* istanbul ignore next */
PPhone.install = function (Vue) {
  Vue.component(PPhone.name, PPhone)
}

export default PPhone
