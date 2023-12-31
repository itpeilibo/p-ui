export default {
  data() {
    return {
      otherHeight: 0, // p-table是否有分页
      isHorizontalScroll: false, // p-table是否存在横向滚动条
      queryHeight: 0, // 搜索高度
      tableHeight: 0 // 表格高度
    }
  },
  mounted() {
    this.getTableHeight()
  },
  activated() {
    this.getTableHeight()
  },
  methods: {
    // 自适应高度
    getTableHeight() {
      this.$nextTick(() => {
        this.getFinHeight()
      })
      window.onresize = () => {
        this.getFinHeight()
      }
      this.$on('hook:beforeDestroy', () => {
        window.onresize = null
      })
      this.$on('hook:deactivated', () => {
        window.onresize = null
      })
    },
    // 获取最终高度
    getFinHeight() {
      this.otherHeight = this.isShowPagination ? 54 : 0
      // p-table是否存在横向滚动条
      this.isHorizontalScroll = document.getElementById('p_table').getElementsByClassName('el-table__header')[0].scrollWidth > document.getElementById('p_table').scrollWidth
      const scrollHeight = this.isHorizontalScroll ? 17 : 0
      // console.log('scrollHeight', scrollHeight)
      this.queryHeight = document.getElementById('p_query_condition').clientHeight
      // console.log('this.queryHeight', this.queryHeight)
      this.tableHeight = document.getElementById('p_layout_page').clientHeight - this.queryHeight - this.otherHeight - scrollHeight - 135
    }
  }
}
