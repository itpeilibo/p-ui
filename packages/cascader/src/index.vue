<template>
  <el-cascader
    class="p_cascader"
    style="width: 100%"
    v-bind="{clearable: true,filterable: true,...this.$attrs}"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
    <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
  </el-cascader>
</template>
<script>
export default {
  name: 'PCascader'
}
</script>
