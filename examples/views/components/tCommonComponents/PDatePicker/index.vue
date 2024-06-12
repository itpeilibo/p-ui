<template>
  <div class="p-date-picker-demo">
    <p-layout-page>
      <p-layout-page-item>
        <div>按钮模式</div>
        <div style="display:flex;">
          <t-btn-date></t-btn-date>
        </div>
      </p-layout-page-item>
      <p-layout-page-item>
        <div>基本模式</div>
        <div style="display:flex;">
          <p-date-picker
            :dateVal="[formDate.warnStartDate,formDate.warnEndDate]"
            @startChange="startChange"
            @endChange="endChange"
          ></p-date-picker>
          <p-date-picker
            style="margin-left:15px;"
            :startDate="formDate.warnStartDate"
            :endDate="formDate.warnEndDate"
            dispaysType="two"
            @startChange="startChange"
            @endChange="endChange"
          ></p-date-picker>
        </div>

        <div>含时分秒：需要配置plusTime</div>
        <div style="display:flex;">
          <p-date-picker
            plusTime
            :dateVal="[warnStartDate,warnEndDate]"
            @startChange="startChange1"
            @endChange="endChange2"
          ></p-date-picker>
          <p-date-picker
            plusTime
            style="margin-left:15px;"
            dispaysType="two"
            :startDate="warnStartDate"
            :endDate="warnEndDate"
            @startChange="startChange1"
            @endChange="endChange2"
          ></p-date-picker>
        </div>
        <div>默认显示日期</div>
        <div style="display:flex;">
          <p-date-picker
            :dateVal="[startDate,endDate]"
            @startChange="startChange3"
            @endChange="endChange4"
          ></p-date-picker>
          <p-date-picker
            style="margin-left:15px;"
            dispaysType="two"
            :startDate="startDate"
            :endDate="endDate"
            @startChange="startChange3"
            @endChange="endChange4"
          ></p-date-picker>
        </div>
      </p-layout-page-item>
    </p-layout-page>
  </div>
</template>

<script>
import { dateFormatFilter } from '@/utils/filters'
export default {
  data () {
    return {
      formDate: {
        warnStartDate: '',
        warnEndDate: ''
      },
      warnStartDate: '',
      warnEndDate: '',
      startDate: dateFormatFilter(new Date((new Date().getTime() - 3600 * 1000 * 24 * 90))),
      endDate: dateFormatFilter(new Date())
    }
  },
  // 方法
  methods: {
    // 开始时间
    startChange (val) {
      console.log('开始时间', val)
      this.formDate.warnStartDate = val
    },
    // 结束时间
    endChange (val) {
      console.log('结束时间', val)
      this.formDate.warnEndDate = val
    },
    // 开始时间
    startChange1 (val) {
      console.log('开始时间', val)
      this.warnStartDate = val
    },
    // 结束时间
    endChange2 (val) {
      console.log('结束时间', val)
      this.warnEndDate = val
    },
    // 开始时间
    startChange3 (val) {
      console.log('开始时间', val)
      this.startDate = val
    },
    // 结束时间
    endChange4 (val) {
      console.log('结束时间', val)
      this.endDate = val
    }
  }
}
</script>
