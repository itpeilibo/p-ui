<template>
  <p-layout-page>
    <p-layout-page-item>
      <span>主题颜色设置：</span>
      <p-theme v-model="theme" @change="themeChange" />
    </p-layout-page-item>
  </p-layout-page>
</template>
<script>
import variables from '../../../public/css/element-variables.scss'
import Cookies from 'js-cookie'
export default {
  name: 'p-theme-demo',
  data() {
    return {
      theme: Cookies.get('p-ui-theme') || variables.theme
    }
  },
  methods: {
    // 主题颜色
    themeChange(val) {
      console.log('当前主题颜色----', val)
      // this.theme = val
      Cookies.set('p-ui-theme', val)
    },
  }
}
</script>
