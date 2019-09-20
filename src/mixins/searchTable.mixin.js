// table统一处理逻辑
import { getAction } from '@/api/ajaxManage.js'
const data = [
export default {
  data() {
    return {
      listData: [],
      total: 0,
      filter: {
        pageNum: 1,
        pageSize: 10
      },
      pageData: {
        pageSize: 10,
        pageNum: 1
      }
    }
  },
  watch: {
    'pageData.pageSize'(val) {
      this.filter.pageSize = val
      this.getList()
    },
    'pageData.pageNum'(val) {
      this.filter.pageNum = val
      this.getList()
    }
  },
  mounted() {
    this.pageData.size = this.filter.pageSize
    this.pageData.page = this.filter.pageNum
    this.getList()
  },
  methods: {
    setFilter(data) {
      this.pageData.pageNum = 1
      Object.assign(this.filter, data)
      this.getList()
    },
    getList() {
      getAction(this.listApiName, this.filter).then(res => {
        this.total = res.totalNum
        this.listData = res.data
      })
    }
  }
}
