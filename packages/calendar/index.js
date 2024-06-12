import PCalendar from './src'

/* istanbul ignore next */
PCalendar.install = function (Vue) {
  Vue.component(PCalendar.name, PCalendar)
}

export default PCalendar
