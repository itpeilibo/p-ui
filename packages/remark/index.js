import PRemark from './src'

/* istanbul ignore next */
PRemark.install = function (Vue) {
  Vue.component(PRemark.name, PRemark)
}

export default PRemark
