/** PQueryCondition组件 路由 **/

import Layout from '@/layout'
/* 定义component */
const Base = () => import('../../views/demo/PQueryCondition')
const slot = () => import('@/views/demo/PQueryCondition/slot')
const labelRender = () => import('@/views/demo/PQueryCondition/labelRender')
const defaultVal = () => import('@/views/demo/PQueryCondition/defaultVal')
const linkage = () => import('@/views/demo/PQueryCondition/linkage')
const PSelectUse = () => import('@/views/demo/PQueryCondition/PSelectUse.vue')
const PDatePickerUse = () => import('@/views/demo/PQueryCondition/PDatePickerUse.vue')

const PQueryConditionRouter = {
  path: '/p-query-condition',
  component: Layout,
  redirect: '/p-query-condition/base',
  name: '条件查询组件',
  meta: {
    title: '条件查询组件',
    icon: 'swagger'
  },
  children: [
    {
      path: 'base',
      name: '基本使用',
      component: Base,
      meta: { title: '基本使用' }
    },
    {
      path: 'slot',
      name: '插槽使用',
      component: slot,
      meta: { title: '插槽使用' }
    },
    {
      path: 'labelRender',
      name: 'label tsx渲染',
      component: labelRender,
      meta: { title: 'label tsx渲染' }
    },
    {
      path: 'defaultVal',
      name: '默认值显示',
      component: defaultVal,
      meta: { title: '默认值显示' }
    },
    {
      path: 'linkage',
      name: '联动使用',
      component: linkage,
      meta: { title: '联动使用' }
    },
    {
      path: 'PSelectUse',
      name: 'PSelect使用',
      component: PSelectUse,
      meta: { title: 'PSelect使用' }
    },
    {
      path: 'PDatePickerUse',
      name: 'PDatePicker使用',
      component: PDatePickerUse,
      meta: { title: 'PDatePicker使用' }
    }
  ]
}

export default PQueryConditionRouter
