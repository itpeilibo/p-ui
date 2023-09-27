/** 常用组件 路由 **/

import Layout from '@/layout'
/* 定义component */
const PTableHeight = () => import('../../views/demo/Test/PTableHeight')
const PAdaptivePage = () => import('../../views/demo/Test/PAdaptivePage')

const demoRouter = {
  path: '/',
  component: Layout,
  redirect: '/p-adaptive-page',
  name: '测试页面',
  meta: {
    title: '测试页面',
    icon: 'job'
  },
  children: [
    {
      path: 'p-adaptive-page',
      name: 'PAdaptivePage组件使用',
      component: PAdaptivePage,
      meta: { title: 'PAdaptivePage组件使用' }
    },
    {
      path: 'p-table-height',
      name: 'PTable高度自适应',
      component: PTableHeight,
      meta: { title: 'PTable高度自适应' }
    }
  ]
}

export default demoRouter
