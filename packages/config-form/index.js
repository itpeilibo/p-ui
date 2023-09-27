import PAntConfigform from './src'

/* istanbul ignore next */
PAntConfigform.install = function (Vue) {
  Vue.component(PAntConfigform.name, PAntConfigform)
}

export default PAntConfigform
