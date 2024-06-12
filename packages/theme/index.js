import PTheme from './src'

/* istanbul ignore next */
PTheme.install = function (Vue) {
  Vue.component(PTheme.name, PTheme)
}

export default PTheme
