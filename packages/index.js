import PAntConfigform from './config-form'
import PAntLayoutConditional from './layout-conditional'
import PLayoutPage from './layout-page'
import PLayoutPageItem from './layout-page-item'
import PAntLayoutTable from './layout-table'
import PAntRangePicker from './range-picker'
import PCalendar from './calendar'
import PDatePicker from './date-picker'
import PDialog from './dialog'
import PEditTable from './edit-table'
import PComplexEditTable from './complex-edit-table'
import PForm from './form'
import PIcon from './icon'
import PInput from './input'
import PInputSearch from './input-search'
import PLayout from './layout'
import PPhone from './phone'
import PProtocol from './protocol'
import PQueryCondition from './query-condition'
import PSearch from './search'
import PStepWizard from './step-wizard'
import PSticky from './sticky'
import PTable from './table'
import PTimerBtn from './timer-btn'
import PTreeTable from './tree-table'
// import PUploadExcel from './upload-excel'
import PUploadFile from './upload-file'
import UploadFile from './UploadFile'
import PAntLayoutForm from './layout-form'
import PModuleForm from './module-form'
import PBtnDate from './btn-date'
import PSelect from './select'
import PPaginationSelect from './pagination-select'
import PDetail from './detail'
import { PAntModal, PAntProtocol } from './modal'
import PSelectTable from './select-table'
import PTreeSelect from './tree-select'
import PButton from './button'
import PAdaptivePage from './adaptive-page'
import PCascader from './cascader'
// import PTheme from './theme'
import { version } from '../package.json'
// 存储组件列表
const components = [
  PAntConfigform,
  PAntLayoutConditional,
  PLayoutPage,
  PLayoutPageItem,
  PAntLayoutTable,
  PAntRangePicker,
  PCalendar,
  PDialog,
  PDatePicker,
  PForm,
  PIcon,
  PInput,
  PInputSearch,
  PLayout,
  PPhone,
  PProtocol,
  PQueryCondition,
  PSearch,
  PStepWizard,
  PSticky,
  PTable,
  PTimerBtn,
  PTreeTable,
  // PUploadExcel,
  PUploadFile,
  UploadFile,
  PAntLayoutForm,
  PAntModal,
  PAntProtocol,
  PModuleForm,
  PComplexEditTable,
  PEditTable,
  PBtnDate,
  PSelect,
  PPaginationSelect,
  PDetail,
  PSelectTable,
  PButton,
  PTreeSelect,
  PAdaptivePage,
  PCascader
  // PTheme
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 按需引入
export {
  PAntConfigform,
  PAntLayoutConditional,
  PLayoutPage,
  PLayoutPageItem,
  PAntLayoutTable,
  PAntRangePicker,
  PCalendar,
  PDialog,
  PDatePicker,
  PForm,
  PIcon,
  PInput,
  PInputSearch,
  PLayout,
  PPhone,
  PProtocol,
  PQueryCondition,
  PSearch,
  PStepWizard,
  PSticky,
  PTable,
  PTimerBtn,
  PTreeTable,
  // PUploadExcel,
  PUploadFile,
  UploadFile,
  PAntLayoutForm,
  PAntModal,
  PAntProtocol,
  PModuleForm,
  PComplexEditTable,
  PEditTable,
  PBtnDate,
  PSelect,
  PPaginationSelect,
  PDetail,
  PSelectTable,
  PButton,
  PTreeSelect,
  PAdaptivePage,
  PCascader
  // PTheme
}
export default {
  version,
  ...components,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}
