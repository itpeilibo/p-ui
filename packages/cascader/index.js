import PCascader from './src'

/* istanbul ignore next */
PCascader.install = function (Vue) {
  Vue.component(PCascader.name, PCascader)
}

export default PCascader
