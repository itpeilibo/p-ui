# 日期组件
---

<common-code-format>
  <docsComponents-PDatePicker-index></docsComponents-PDatePicker-index>
  <highlight-code slot="codeText">
    <template>
        <div class="p-date-picker-demo" style="min-height:100px;width:100%;padding:10px;">
          <div>基本模式</div>
          <p-date-picker
            :startDate="formDate.warnStartDate"
            :endDate="formDate.warnEndDate"
            @startChange="startChange"
            @endChange="endChange"
          ></p-date-picker>
          <div>含时分秒：需要配置plusTime</div>
          <p-date-picker
            plusTime
            :startDate="warnStartDate"
            :endDate="warnEndDate"
            @startChange="startChange1"
            @endChange="endChange2"
          ></p-date-picker>
          <div>默认显示日期</div>
          <p-date-picker
            :startDate="startDate"
            :endDate="endDate"
            @startChange="startChange3"
            @endChange="endChange4"
          ></p-date-picker>
        </div>
    </template>
    <script>
      import { dateFormatFilter } from '../../../public/utils/filters'
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
                console.log(111, val)
                this.formDate.warnStartDate = val
              },
              // 结束时间
              endChange (val) {
                this.formDate.warnEndDate = val
              },
              // 开始时间
              startChange1 (val) {
                console.log(111, val)
                this.warnStartDate = val
              },
              // 结束时间
              endChange2 (val) {
                this.warnEndDate = val
              },
              // 开始时间
              startChange3 (val) {
                console.log(111, val)
                this.startDate = val
              },
              // 结束时间
              endChange4 (val) {
                this.endDate = val
              }
            }
        }
    </script>
  </highlight-code>
</common-code-format>
