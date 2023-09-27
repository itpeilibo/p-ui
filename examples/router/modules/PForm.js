/** TForm组件 路由 **/

import Layout from '@/layout'
/* 定义component */
const Base = () => import('../../views/demo/PForm')
const labelPosition = () => import('@/views/demo/PForm/labelPosition')
const widthSize = () => import('@/views/demo/PForm/widthSize')
const rules = () => import('@/views/demo/PForm/rules')
const eventHandle = () => import('@/views/demo/PForm/eventHandle')
const labelRender = () => import('@/views/demo/PForm/labelRender')
const slotName = () => import('@/views/demo/PForm/slotName')
const textShow = () => import('@/views/demo/PForm/textShow')
const comUse = () => import('@/views/demo/PForm/comUse')
const assignment = () => import('@/views/demo/PForm/assignment')
const submit = () => import('@/views/demo/PForm/submit')

const PFormRouter = {
  path: '/p-form',
  component: Layout,
  redirect: '/p-form/base',
  name: 'PForm组件',
  meta: {
    title: 'PForm组件',
    icon: 'row'
  },
  children: [
    {
      path: 'base',
      name: '基本使用',
      component: Base,
      meta: { title: '基本使用' }
    },
    {
      path: 'labelPosition',
      name: '对齐方式',
      component: labelPosition,
      meta: { title: '对齐方式' }
    },
    {
      path: 'widthSize',
      name: '每行展示多少项',
      component: widthSize,
      meta: { title: '每行展示多少项' }
    },
    {
      path: 'rules',
      name: '校验规则',
      component: rules,
      meta: { title: '校验规则' }
    },
    {
      path: 'eventHandle',
      name: '事件使用',
      component: eventHandle,
      meta: { title: '事件使用' }
    },
    {
      path: 'labelRender',
      name: 'label jsx渲染',
      component: labelRender,
      meta: { title: 'label jsx渲染' }
    },
    {
      path: 'slotName',
      name: '插槽使用',
      component: slotName,
      meta: { title: '插槽使用' }
    },
    {
      path: 'textShow',
      name: '文本展示',
      component: textShow,
      meta: { title: '文本展示' }
    },
    {
      path: 'comUse',
      name: '自己封装组件使用',
      component: comUse,
      meta: { title: '自己封装组件使用' }
    },
    {
      path: 'assignment',
      name: '回显数据',
      component: assignment,
      meta: { title: '回显数据' }
    },
    {
      path: 'submit',
      name: '动态显示隐藏项',
      component: submit,
      meta: { title: '动态显示隐藏项' }
    }
  ]
}

export default PFormRouter
