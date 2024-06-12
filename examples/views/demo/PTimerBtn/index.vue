<template>
  <p-layout-page>
    <p-layout-page-item>
      <p-timer-btn :second="second" @click="sendCode" />
    </p-layout-page-item>
  </p-layout-page>
</template>
<script>
export default {
  name: 'p-timer-btn-demo',
  data() {
    return {
      second: 10
    }
  },
  methods: {
    sendCode() {
      console.log('点击获取验证码')
    }
  }
}
</script>
