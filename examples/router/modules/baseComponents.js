/** 基础组件 路由 **/

import Layout from '@/layout'
import Blank from '@/components/Blank'
/* 定义component */
/**
 * 常用组件
 */
// 日期组件
const PDatePicker = () => import('../../views/components/tCommonComponents/PDatePicker')
// 弹窗组件
const PDialog = () => import('../../views/components/tCommonComponents/PDialog')
// input组件
const PInput = () => import('../../views/components/tCommonComponents/PInput')
// 布局组件
const PLayout = () => import('../../views/components/tCommonComponents/PLayout')
// 搜索组件
const PSearch = () => import('../../views/components/tCommonComponents/PSearch')
// 下拉选择
const PSelect = () => import('../../views/components/tCommonComponents/PSelect')
// 步骤组件
const PStepWizard = () => import('../../views/components/tCommonComponents/PStepWizard')
// TTable组件
const PTable = () => import('../../views/components/PTable')
// 条件查询置顶组件
const PQueryCondition = () => import('../../views/components/PQueryCondition')
// 编辑表格
const PEditTable = () => import('../../views/components/PEditTable')

// 图片上传组件
const PUploadFile = () => import('@/views/components/uploadFile')
// TreeTable组件
const TreeTable = () => import('@/views/components/treeTable')
// 表单组件
const PForm = () => import('../../views/components/PForm')
// p-simple-form表单组件
const PSimpleForm = () => import('@/views/components/PForm/p-simple-form.vue')
// 模块表单
const PModuleForm = () => import('@/views/components/PForm/P-module-form.vue')
// 模块详情
const PModuleDetail = () => import('@/views/components/PForm/p-module-detail.vue')

const PUploadExcel = () => import('../../views/components/PUploadExcel')

const ScrollTable = () => import('@/views/components/scrollTable')

const baseComponentsRouter = {
  path: '/base-components',
  isStatic: true,
  component: Layout,
  name: '基础组件',
  meta: {
    title: '基础组件'
  },
  children: [
    {
      path: 't-common-components',
      name: '常用组件',
      component: Blank,
      meta: { title: '常用组件' },
      children: [
        {
          path: 'p-date-picker',
          name: '日期组件',
          component: PDatePicker,
          meta: { title: '日期组件' }
        },
        {
          path: 'p-dialog',
          name: '弹窗组件',
          component: PDialog,
          meta: { title: '弹窗组件' }
        },
        {
          path: 'p-input',
          name: 'input组件',
          component: PInput,
          meta: { title: 'input组件' }
        },
        {
          path: 'p-layout',
          name: '布局组件',
          component: PLayout,
          meta: { title: '布局组件' }
        },
        {
          path: 'p-search',
          name: '搜索组件',
          component: PSearch,
          meta: { title: '搜索组件' }
        },
        {
          path: 'p-select',
          name: '下拉选择组件',
          component: PSelect,
          meta: { title: '下拉选择组件' }
        },
        {
          path: 'p-step-wizard',
          name: '步骤组件',
          component: PStepWizard,
          meta: { title: '步骤组件' }
        }
      ]
    },
    {
      path: 'scroll-table',
      name: '自动轮询滚动组件',
      component: ScrollTable,
      meta: { title: '自动轮询滚动组件' }
    },
    {
      path: 'p-query-condition',
      name: '查询条件置顶组件',
      component: PQueryCondition,
      meta: { title: '查询条件置顶组件' }
    },
    {
      path: 'p-edit-table',
      name: '表格编辑组件',
      component: PEditTable,
      meta: { title: '表格编辑组件' }
    },
    {
      path: 'p-table',
      name: 'PTable组件',
      component: PTable,
      meta: { title: 'PTable组件' }
    },
    {
      path: 'p-upload-file',
      name: '图片上传组件',
      component: Blank,
      meta: { title: '图片上传组件' },
      children: [
        {
          path: 'upload-demo',
          name: '图片上传demo',
          component: PUploadFile,
          meta: { title: '图片上传demo' }
        }
      ]
    },
    {
      path: 'p-tree-table',
      name: 'TreeTable组件',
      component: Blank,
      meta: { title: 'TreeTable组件' },
      children: [
        {
          path: 'tree-table-demo',
          name: 'TreeTableDemo',
          component: TreeTable,
          meta: { title: 'TreeTableDemo' }
        }
      ]
    },
    {
      path: 'p-upload-excel',
      name: '上传excel组件',
      component: Blank,
      meta: { title: '上传excel组件' },
      children: [
        {
          path: 'p-upload-excel-demo',
          name: '上传excel组件',
          component: PUploadExcel,
          meta: { title: '上传excel组件' }
        }
      ]
    },
    {
      path: 'p-form',
      name: '表单组件',
      component: Blank,
      meta: { title: '表单组件' },
      children: [
        {
          path: 'p-form-demo',
          name: '表单组件demo',
          component: PForm,
          meta: { title: '表单组件demo' }
        },
        {
          path: 'p-simple-form-demo',
          name: '精简版表单',
          component: PSimpleForm,
          meta: { title: '精简版表单' }
        },
        {
          path: 'p-module-form-demo',
          name: '模块表单',
          component: PModuleForm,
          meta: { title: '模块表单' }
        },
        {
          path: 'p-module-detail-demo',
          name: '模块详情',
          component: PModuleDetail,
          meta: { title: '模块详情' }
        }
      ]
    }
  ]
}

export default baseComponentsRouter
