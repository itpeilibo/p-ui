<template>
  <div class="p-input" style="min-height:100px;width:100%;padding:10px;">
    <div>默认方式显示金额</div>
    <p-input placeholder="请输入金额" @numblur="blurVal" v-model="money"></p-input>
    <div>显示金额tip（大写）控制isTip</div>
    <p-input placeholder="请输入金额" isTip v-model="money2"></p-input>
    <div>显示天数</div>
    <p-input placeholder="请输入天数" inputType="days" appendTitle="天" @numblur="blurVal1" v-model="day"></p-input>
    <div>显示百分比</div>
    <p-input placeholder="请输入" inputType="percent" appendTitle="%" v-model="percent"></p-input>
    <div>显示电话号码</div>
    <p-input
      placeholder="请输入电话号码"
      :isShow="false"
      inputType="tel"
      @numblur="blurVal2"
      v-model="tel"
    ></p-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      money: null,
      day: null,
      money2: null,
      percent: null,
      tel: ''
    }
  },
  methods: {
    blurVal (val) {
      console.log('获取输入的值', val)
    },
    blurVal1 (val) {
      console.log('获取输入的值1', val)
    },
    blurVal2 (val) {
      console.log('获取输入的值2', val)
    }
  }
}
</script>
