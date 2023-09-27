# 基本使用

---

<common-code-format>
  <docsComponents-PTable-base slot="source"></docsComponents-PTable-base>
  <<< @/docs/.vuepress/components/docsComponents/PTable/base.vue
</common-code-format>

# 双击单元格复制

---

<common-code-format>
  <docsComponents-PTable-copy slot="source"></docsComponents-PTable-copy>
  在组件中需配置
  
  新增`isCopy`或`isCopy='true'`属性

<<< @/docs/.vuepress/components/docsComponents/PTable/copy.vue
</common-code-format>

# 文字变色

---

<common-code-format>
  <docsComponents-PTable-textColor slot="source"></docsComponents-PTable-textColor>
  在组件中需配置
  
  `changeColor`对象

<<< @/docs/.vuepress/components/docsComponents/PTable/textColor.vue
</common-code-format>

# 第一列显示序列号

---

<common-code-format description="在组件中需配置：firstColumn: { type: 'index', label: '序列' }">
  <docsComponents-PTable-sequence slot="source"></docsComponents-PTable-sequence>
在组件中需配置

`firstColumn`: { type: 'index', label: '序列' }

<<< @/docs/.vuepress/components/docsComponents/PTable/sequence.vue

</common-code-format>

# 第一列显示单选项

---

<common-code-format description="在组件中需配置：firstColumn: { type: 'index', label: '序列' }">
  <docsComponents-PTable-radio slot="source"></docsComponents-PTable-radio>
在组件中需配置

`firstColumn`: { type: 'radio' }<br/>
`@radioChange="radioChange"`事件传出选中是数据

<<< @/docs/.vuepress/components/docsComponents/PTable/radio.vue

</common-code-format>
