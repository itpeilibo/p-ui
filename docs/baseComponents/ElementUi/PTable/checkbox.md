# 复选框功能

---

<common-code-format>
  <docsComponents-PTable-checkbox slot="source"></docsComponents-PTable-checkbox>
  在JS中需配置
  
  `firstColumn`: { type: 'selection' }<br/>
  `clearSelection方法`: 清空选中的数据
  
  <<< @/docs/.vuepress/components/docsComponents/PTable/checkbox.vue
</common-code-format>

# 翻页选中功能

---

<common-code-format>
  <docsComponents-PTable-pageCheck slot="source"></docsComponents-PTable-pageCheck>
  注意：（参考配置参数）`firstColumn`: { type: 'selection', isPaging: true }
  
  `type: 'selection'` 表复选框
  
  `isPaging: true` 表可以跨页勾选
  
  <<< @/docs/.vuepress/components/docsComponents/PTable/pageCheck.vue
</common-code-format>
