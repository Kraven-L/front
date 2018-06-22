<template>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="10" background layout="prev, pager, next, total" :total="100">
  </el-pagination>
</template>
<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      total: "",
      dataList: []
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getListData() {
      let url = "../../static/lists.json";
      this.$axios.get(url).then(res => {
        console.log(res.data.indexList);
        this.dataList = res.data.indexList;
        this.total = res.data.total;
      });
    }
  }
};
</script>
