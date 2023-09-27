# Select 下拉 组件

---

## 单选

<common-code-format>
  <docsComponents-PSelect-index slot="source"></docsComponents-PSelect-index>
   <<< @/docs/.vuepress/components/docsComponents/PSelect/index.vue
</common-code-format>

## 自定义显示下拉项label

<common-code-format>
  <docsComponents-PSelect-customLabel slot="source"></docsComponents-PSelect-customLabel>
  设置customLabel字符串表达式：`${item.label}（${item.id}）`<br/>
  注意：表达式必须以`item`开头，且后面的属性必须存在`optionSource`中
  
   <<< @/docs/.vuepress/components/docsComponents/PSelect/customLabel.vue
</common-code-format>

## 多选

<common-code-format>
  <docsComponents-PSelect-multiple slot="source"></docsComponents-PSelect-multiple>
   <<< @/docs/.vuepress/components/docsComponents/PSelect/multiple.vue
</common-code-format>

## p-select——下拉 组件组件

**概述：**

`下拉选择组件————可实现单选多选（多选可使用全选功能）`

**代码示例：**

```html
<p-select
  v-model="selectVlaue"
  multiple
  :optionSource="listTypeInfo.stepList"
  valueKey="label"
  @change="selectChange"
/>
```

### 配置参数（Attributes）继承 el-select Attributes

| 参数         | 说明                                             | 类型                            | 默认值  |
| :----------- | :----------------------------------------------- | :------------------------------ | :------ |
| v-model      | 绑定值                                           | boolean / string / number/Array | -       |
| multiple     | 是否多选                                         | Boolean                         | false   |
| optionSource | 下拉数据源                                       | Array                           | -       |
| width        | select宽度（可以设置百分比或px）                 | String                          | 100%    |
| customLabel  | 是否自定义设置下拉label                          | String                          | -       |
| valueKey     | 传入的 option 数组中，要作为最终选择项的键值 key | String                          | 'key'   |
| labelKey     | 传入的 option 数组中，要作为显示项的键值名称     | String                          | 'label' |

### 继承 el-select events
