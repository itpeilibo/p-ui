<template>
  <p-layout-page class="p_adaptive_page">
    <p-layout-page-item class="table_search">
      <p-query-condition v-bind="$attrs" v-on="$listeners">
        <template v-for="(index, name) in $slots" v-slot:[name]>
          <slot :name="name" />
        </template>
        <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </p-query-condition>
    </p-layout-page-item>
    <p-layout-page-item class="table_main">
      <p-table v-bind="$attrs" v-on="$listeners">
        <template v-for="(index, name) in $slots" v-slot:[name]>
          <slot :name="name" />
        </template>
        <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </p-table>
    </p-layout-page-item>
  </p-layout-page>
</template>
<script>
import PLayoutPage from '../../layout-page/src/index.vue'
import PLayoutPageItem from '../../layout-page-item/src/index.vue'
import PTable from '../../table/src/index.vue'
import PQueryCondition from '../../query-condition/src/index.vue'
export default {
  name: 'PAdaptivePage',
  components: {
    PLayoutPage,
    PLayoutPageItem,
    PTable,
    PQueryCondition
  }
}
</script>
<style lang="scss" scoped>
.p_adaptive_page {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .table_main {
    flex: 1;
    overflow-y: auto;
    .p-table {
      display: flex;
      flex: 1;
      flex-direction: column;
      width: 100%;
      height: 100%;
      ::v-deep.el-table {
        height: fit-content;
        overflow: auto;
        &::before {
          height: 0px;
        }
        .el-table__fixed::before,
        .el-table__fixed-right::before {
          height: 0px;
        }
      }
    }
  }
}
</style>
