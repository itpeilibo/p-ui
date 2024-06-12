<template>
  <p-layout-page>
    <p-layout-page-item>
      <h4 style="margin-top: 0;">内置防抖功能</h4>
      <p-button size="small" type="primary" @click="exportExcel">导出</p-button>
    </p-layout-page-item>
  </p-layout-page>
</template>
<script>
export default {
  name: 'p-button-demo',
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
    // 导出
    async exportExcel() {
      console.log('导出')
    }
  }
}
</script>
