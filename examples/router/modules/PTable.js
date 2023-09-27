/** TTable组件 路由 **/

import Layout from '@/layout'
/* 定义component */
const Base = () => import('@/views/demo/PTable/base')
const Copy = () => import('@/views/demo/PTable/copy')
const TextColor = () => import('@/views/demo/PTable/textColor')
const Sequence = () => import('@/views/demo/PTable/sequence')
const Radio = () => import('@/views/demo/PTable/radio')
const Pagination = () => import('@/views/demo/PTable/pagination')
const NotSort = () => import('@/views/demo/PTable/notSort')
const MergedCell = () => import('@/views/demo/PTable/mergedCell')
const HeaderGroup = () => import('@/views/demo/PTable/headerGroup')
const RenderCol = () => import('@/views/demo/PTable/renderCol')
const SlotName = () => import('@/views/demo/PTable/slotName')
const Filters = () => import('@/views/demo/PTable/filters')
const ObjRenderPorp = () => import('@/views/demo/PTable/objRenderPorp')
const RenderHeader = () => import('@/views/demo/PTable/renderHeader')
const singleEditKeyup = () => import('@/views/demo/PTable/singleEditKeyup')
const singleEditTable = () => import('@/views/demo/PTable/singleEditTable')
const cellEditSave = () => import('@/views/demo/PTable/cellEditSave')
const editTable = () => import('@/views/demo/PTable/editTable')
const checkbox = () => import('@/views/demo/PTable/checkbox')
const columnSet = () => import('@/views/demo/PTable/columnSet')
const operation = () => import('@/views/demo/PTable/operationInside')
const customRender = () => import('@/views/demo/PTable/customRender')
const tree = () => import('@/views/demo/PTable/tree')

const PTableRouter = {
  path: '/p-table',
  component: Layout,
  redirect: '/p-table/base',
  name: 'PTable组件',
  meta: {
    title: 'PTable组件',
    icon: 'table'
  },
  children: [
    {
      path: 'base',
      name: '基本使用',
      component: Base,
      meta: { title: '基本使用' }
    },
    {
      path: 'copy',
      name: '双击单元格复制',
      component: Copy,
      meta: { title: '双击单元格复制' }
    },
    {
      path: 'text-color',
      name: '文字变色',
      component: TextColor,
      meta: { title: '文字变色' }
    },
    {
      path: 'sequence',
      name: '显示序列号',
      component: Sequence,
      meta: { title: '显示序列号' }
    },
    {
      path: 'radio',
      name: '显示单选项',
      component: Radio,
      meta: { title: '显示单选项' }
    },
    {
      path: 'pagination',
      name: '分页功能',
      component: Pagination,
      meta: { title: '分页功能' }
    },
    {
      path: 'notSort',
      name: '指定行不排序',
      component: NotSort,
      meta: { title: '指定行不排序' }
    },
    {
      path: 'merged-cell',
      name: '合并行',
      component: MergedCell,
      meta: { title: '合并行' }
    },
    {
      path: 'header-group',
      name: '表头合并',
      component: HeaderGroup,
      meta: { title: '表头合并' }
    },
    {
      path: 'render-col',
      name: 'render 渲染',
      component: RenderCol,
      meta: { title: 'render 渲染' }
    },
    {
      path: 'slot-name',
      name: '作用域插槽渲染',
      component: SlotName,
      meta: { title: '作用域插槽渲染' }
    },
    {
      path: 'filters',
      name: '字典过滤',
      component: Filters,
      meta: { title: '字典过滤' }
    },
    {
      path: 'obj-render-porp',
      name: '对象渲染',
      component: ObjRenderPorp,
      meta: { title: '对象渲染' }
    },
    {
      path: 'render-header',
      name: '自定义标题',
      component: RenderHeader,
      meta: { title: '自定义标题' }
    },
    {
      path: 'singleEditKeyup',
      name: '编辑键盘事件',
      component: singleEditKeyup,
      meta: { title: '编辑键盘事件' }
    },
    {
      path: 'singleEditTable',
      name: '单元格编辑',
      component: singleEditTable,
      meta: { title: '单元格编辑' }
    },
    {
      path: 'cellEditSave',
      name: '编辑保存',
      component: cellEditSave,
      meta: { title: '编辑保存' }
    },
    {
      path: 'editTable',
      name: '整行编辑',
      component: editTable,
      meta: { title: '整行编辑' }
    },
    {
      path: 'checkbox',
      name: '复选框功能',
      component: checkbox,
      meta: { title: '复选框功能' }
    },
    {
      path: 'columnSet',
      name: '显示隐藏列',
      component: columnSet,
      meta: { title: '显示隐藏列' }
    },
    {
      path: 'operation',
      name: '操作按钮',
      component: operation,
      meta: { title: '操作按钮' }
    },
    {
      path: 'customRender',
      name: '操作按钮自定义渲染',
      component: customRender,
      meta: { title: '操作按钮自定义渲染' }
    },
    {
      path: 'tree',
      name: 'Tree 结构',
      component: tree,
      meta: { title: 'Tree 结构' }
    }
  ]
}

export default PTableRouter
