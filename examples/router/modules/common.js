/** 常用组件 路由 **/

import Layout from '@/layout'
import Blank from '@/components/Blank'
/* 定义component */
const PInput = () => import('../../views/demo/PInput')
const PButton = () => import('../../views/demo/PButton')
const PTimerBtn = () => import('../../views/demo/PTimerBtn')
const PDatePicker = () => import('../../views/demo/PDatePicker')
const PDialog = () => import('../../views/demo/PDialog')
const PDetail = () => import('../../views/demo/PDetail')
const PSelect = () => import('../../views/demo/PSelect')
const PSelectTable = () => import('../../views/demo/PSelectTable')
const PStepWizard = () => import('../../views/demo/PStepWizard')
const IsShowFirstColumn = () => import('@/views/demo/PSelectTable/isShowFirstColumn.vue')
const Multiple = () => import('@/views/demo/PSelectTable/multiple.vue')
const MultiplePagination = () => import('@/views/demo/PSelectTable/showPagination.vue')
const RadioPagination = () => import('@/views/demo/PSelectTable/radioPagination.vue')

const commonRouter = {
  path: '/common',
  component: Layout,
  redirect: '/common/p-input',
  name: '常用组件',
  meta: {
    title: '常用组件',
    icon: 'job'
  },
  children: [
    {
      path: 'p-input',
      name: 'Input 组件',
      component: PInput,
      meta: { title: 'Input 组件' }
    },
    {
      path: 'p-button',
      name: 'button组件',
      component: PButton,
      meta: { title: 'button组件' }
    },
    {
      path: 'p-timer-btn',
      name: '倒计时组件',
      component: PTimerBtn,
      meta: { title: '倒计时组件' }
    },
    {
      path: 'p-date-picker',
      name: '日期组件',
      component: PDatePicker,
      meta: { title: '日期组件' }
    },
    {
      path: 'p-step-wizard',
      name: '步骤组件',
      component: PStepWizard,
      meta: { title: '步骤组件' }
    },
    {
      path: 'p-dialog',
      name: '弹窗组件',
      component: PDialog,
      meta: { title: '弹窗组件' }
    },
    {
      path: 'p-detail',
      name: '详情组件',
      component: PDetail,
      meta: { title: '详情组件' }
    },
    {
      path: 'p-select',
      name: 'Select下拉组件',
      component: PSelect,
      meta: { title: 'Select下拉组件' }
    },
    {
      path: 'p-select-table',
      name: 'Select下拉表格组件',
      component: Blank,
      meta: { title: 'Select下拉表格组件' },
      children: [
        {
          path: 'index',
          name: '单选',
          component: PSelectTable,
          meta: { title: '单选' }
        },
        {
          path: 'is-show-col',
          name: '不显示首列',
          component: IsShowFirstColumn,
          meta: { title: '不显示首列' }
        },
        {
          path: 'multiple',
          name: '多选',
          component: Multiple,
          meta: { title: '多选' }
        },
        {
          path: 'radio-pagination',
          name: '单选分页',
          component: RadioPagination,
          meta: { title: '单选分页' }
        },
        {
          path: 'multiple-pagination',
          name: '多选分页',
          component: MultiplePagination,
          meta: { title: '多选分页' }
        }
      ]
    }
  ]
}

export default commonRouter
