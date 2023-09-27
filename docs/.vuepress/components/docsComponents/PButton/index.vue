<template>
  <p-layout-page>
    <p-layout-page-item>
      <p-button size="small" type="primary" @click="exportExcel">导出</p-button>
    </p-layout-page-item>
  </p-layout-page>
</template>
<script>
export default {
  name: 'p-button-demo',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    // 导出
    async exportExcel () {
      console.log('导出')
    },
  }
}
</script>
