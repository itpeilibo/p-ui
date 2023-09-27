/*
 * 此组件是基于 https://githob.com/zwhGithub/vue-calendar 改造得来
 * 基于原组件上增加了双击日期的方法 dblclickDay
 */
<template>
  <div class="p_container p-calendar">
    <div class="p_content_all">
      <div class="p_top_changge">
        <li class="prev-month" @click="PreMonth(myDate,false)">
          <div class="p_jiantou1"></div>
        </li>
        <li class="p_content_li">{{dateTop}}</li>
        <li class="next-month" @click="NextMonth(myDate,false)">
          <div class="p_jiantou2"></div>
        </li>
      </div>
      <div class="p_content week-header">
        <div class="p_content_item" v-for="(tag,index) in textTop" :key="index">
          <div class="p_top_tag">{{ tag }}</div>
        </div>
      </div>
      <div class="p_content day-list">
        <div
          class="p_content_item"
          v-for="(item,index) in list"
          @click="clickDay(item,index)"
          @dblclick="dblclickDay(item,index)"
          :key="index"
        >
          <div
            class="p_item_date"
            :class="[{ p_isMark: item.isMark},{p_other_dayhide:item.otherMonth!=='nowMonth'},{p_want_dayhide:item.dayHide},{p_isToday:item.isToday === 'now'},{p_passDay:item.isToday === 'pass'},{p_featureDay:item.isToday === 'feature'},{p_chose_day:item.chooseDay},setClass(item)]"
            v-html="item.id"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import timeUtil from './calendar'
export default {
  name: 'PCalendar',
  data () {
    return {
      myDate: [],
      list: [],
      historyChose: [],
      dateTop: '',
      currentDate: new Date(),
      visibleItemCount: 5,
      changeDate: '',
      oldChangeDate: ''
    }
  },
  props: {
    markDate: {
      type: Array,
      default: () => []
    },
    markDateMore: {
      type: Array,
      default: () => []
    },
    textTop: {
      type: Array,
      default: () => ['一', '二', '三', '四', '五', '六', '日']
    },
    sundayStart: {
      type: Boolean,
      default: () => false
    },
    agoDayHide: {
      type: String,
      default: '0'
    },
    futureDayHide: {
      type: String,
      default: '2554387200'
    }
  },
  created () {
    this.intStart()
    this.myDate = new Date()
  },
  methods: {
    intStart () {
      timeUtil.sundayStart = this.sundayStart
    },
    setClass (data) {
      const obj = {}
      obj[data.markClassName] = data.markClassName
      return obj
    },
    clickDay (item, index) {
      for (let i = 0; i < this.list.length; i++) {
        if (i === index) {
          item.chooseDay = !item.chooseDay
        } else {
          this.list[i].chooseDay = false
        }
      };
      this.$emit('choose-day', item)
    },
    dblclickDay (item, index) {
      this.$emit('dblclickDay', item)
    },
    cancelChooseDay () {
      this.getList(this.myDate)
    },
    ChoseMonth (date, isChosedDay = true) {
      date = date + '-01 00:00:00'
      date = timeUtil.dateFormat(date)
      this.myDate = new Date(date)
      this.$emit('change-month', timeUtil.dateFormat(this.myDate))
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay)
      } else {
        this.getList(this.myDate)
      }
    },
    PreMonth (date = this.myDate, isChosedDay = true) {
      date = timeUtil.dateFormat(date)
      const timeArray = date.split('/')
      const year = timeArray[0]
      const month = timeArray[1]
      const day = timeArray[2]
      let year2 = year
      let month2
      month2 = parseInt(month) - 1
      if (month2 === 0) {
        year2 = parseInt(year2) - 1
        month2 = 12
      }
      this.currentDate = new Date(year2 + '/' + month2 + '/' + day)
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'preMonth')
      this.$emit('change-month', timeUtil.dateFormat(this.myDate))
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay)
      } else {
        this.getList(this.myDate)
      }
    },
    NextMonth (date = this.myDate, isChosedDay = true) {
      date = timeUtil.dateFormat(date)
      const timeArray = date.split('/')
      const year = timeArray[0]
      const month = timeArray[1]
      const day = timeArray[2]
      let year2 = year
      let month2
      month2 = parseInt(month) + 1
      if (month2 === 13) {
        year2 = parseInt(year2) + 1
        month2 = 1
      }
      this.currentDate = new Date(year2 + '/' + month2 + '/' + day)

      this.myDate = timeUtil.getOtherMonth(this.myDate, 'nextMonth')
      this.$emit('change-month', timeUtil.dateFormat(this.myDate))
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay)
      } else {
        this.getList(this.myDate)
      }
    },
    forMatArgs: function () {
      let markDate = this.markDate
      let markDateMore = this.markDateMore
      markDate = markDate.map(k => {
        return timeUtil.dateFormat(k)
      })
      markDateMore = markDateMore.map(k => {
        k.date = timeUtil.dateFormat(k.date)
        return k
      })
      return [markDate, markDateMore]
    },
    getList: function (date, chooseDay, isChosedDay = true) {
      const [markDate, markDateMore] = this.forMatArgs()
      this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`
      const arr = timeUtil.getMonthList(this.myDate)
      for (let i = 0; i < arr.length; i++) {
        let markClassName = ''
        const k = arr[i]
        k.chooseDay = false
        const nowTime = k.date
        const t = new Date(nowTime).getTime() / 1000
        // 看每一天的class
        for (let c = 0; c < markDateMore.length; c++) {
          if (markDateMore[c].date === nowTime) {
            markClassName = markDateMore[c].className || ''
          }
        }
        // 标记选中某些天 设置class
        k.markClassName = markClassName
        k.isMark = markDate.indexOf(nowTime) > -1
        // 无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide
        if (k.isToday === 'now') {
          this.$emit('isToday', nowTime)
        }
        const flag = !k.dayHide && k.otherMonth === 'nowMonth'
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit('choseDay', nowTime)
          this.historyChose.push(nowTime)
          k.chooseDay = true
        } else if (
          this.historyChose[this.historyChose.length - 1] === nowTime &&
          !chooseDay &&
          flag
        ) {
          // k.chooseDay = true;
        }
      }
      this.list = arr
    }
  },
  mounted () {
    this.getList(this.myDate)
  },
  watch: {
    markDate: {
      handler (val, oldVal) {
        this.getList(this.myDate)
      },
      deep: true
    },
    markDateMore: {
      handler (val, oldVal) {
        this.getList(this.myDate)
      },
      deep: true
    },
    agoDayHide: {
      handler (val, oldVal) {
        this.getList(this.myDate)
      },
      deep: true
    },
    futureDayHide: {
      handler (val, oldVal) {
        this.getList(this.myDate)
      },
      deep: true
    },
    sundayStart: {
      handler (val, oldVal) {
        this.intStart()
        this.getList(this.myDate)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scope>
.p_container {
  margin: auto;
  li {
    list-style-type: none;
  }
  .p_top_changge {
    display: flex;
    justify-content: center;
    .p_top_changge li {
      cursor: pointer;
      display: flex;
      color: #333;
      font-size: 18px;
      flex: 1;
      justify-content: center;
      align-items: center;
      height: 47px;
    }
    .prev-month {
      justify-content: flex-end;
      padding-right: 20px;
      align-self: center;
      cursor: pointer;
    }
    .next-month {
      justify-content: flex-start;
      padding-left: 20px;
      align-self: center;
      cursor: pointer;
    }
    .p_content_li {
      cursor: auto;
      width: 120px;
      font-size: 14px;
      text-align: center;
    }
  }
  .p_content_all {
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    padding-bottom: 8px;
  }
  .p_content .t_content_item:nth-child(7n + 1) {
    color: #ccc;
  }
  .p_content .t_content_item:nth-child(7n + 7) {
    color: #ccc;
  }
  .p_content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 3% 0 3%;
    width: 100%;
  }
  .p_content:first-child .t_content_item_tag {
    color: #ddd;
    font-size: 16px;
  }
  .p_content:first-child .t_content_item {
    color: #ddd;
    font-size: 16px;
  }
  .p_content_item {
    font-size: 15px;
    width: 14.2857%;
    text-align: center;
    color: #333;
    position: relative;
    height: 40px;
    margin-top: 10px;
  }
  .p_content_item_tag {
    font-size: 15px;
    width: 13.4%;
    text-align: center;
    color: #333;
    position: relative;
  }
  .p_top_tag {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p_item_date {
    width: 30px;
    height: 30px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p_jiantou1 {
    width: 12px;
    height: 12px;
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    transform: rotate(-45deg);
  }
  .p_jiantou1:active,
  .p_jiantou2:active {
    border-color: #ddd;
  }
  .p_jiantou2 {
    width: 12px;
    height: 12px;
    border-top: 1px solid #333;
    border-right: 1px solid #333;
    transform: rotate(45deg);
  }
  .p_content_item > .p_isMark {
    margin: auto;
    border-radius: 100px;
    background: blue;
    z-index: 2;
  }
  .p_content_item .p_other_dayhide {
    color: #bfbfbf;
  }
  .p_content_item .p_want_dayhide {
    color: #bfbfbf;
  }
  .p_content_item .p_isToday {
    background: yellow;
    border-radius: 50%;
    transform: scale(1);
    transform-origin: 0% center;
  }
  .p_content_item .p_chose_day {
    background: green;
    border-radius: 50%;
    transform: scale(1);
    transform-origin: 0% center;
  }
}
</style>
