import PSearch from './src'

/* istanbul ignore next */
PSearch.install = function (Vue) {
  Vue.component(PSearch.name, PSearch)
}

export default PSearch
