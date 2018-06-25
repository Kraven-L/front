<template>
  <div class="companyDetails">
    <div class="companyInfo">

    </div>
    <div class="main">
      <div class="top">

      </div>

      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>会议列表</h4>
          <div class="select">
            <el-select v-model="value1" placeholder="按会议名称">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
            </el-date-picker>
            <el-select v-model="value3" placeholder="全部分类">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="input1" placeholder="请输入会议名称关键字" width=200px clearable></el-input>
            <el-button type="primary">查 询</el-button>
            <!-- <el-input placeholder="请输入会议名称关键字" v-model="input2" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input> -->
          </div>
        </div>
        <div class="tableList">
          <table>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>第五届董事会第三次会议</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
          </table>
        </div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="prev, pager, next, total" :total="100">
        </el-pagination>
        <!-- <div class="tablelist-1">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" width="180">
            </el-table-column>
            <el-table-column prop="name" width="180">
            </el-table-column>
            <el-table-column prop="address">
            </el-table-column>
          </el-table>
        </div> -->
      </div>
      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>风险控制</h4>
          <div class="select">
            <el-select v-model="value4" placeholder="全部分类">
              <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="input2" placeholder="请输入会议名称关键字" width=200px clearable></el-input>
            <el-button type="primary">查 询</el-button>
            <!-- <el-input placeholder="请输入会议名称关键字" v-model="input2" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input> -->
          </div>
        </div>
        <div class="tableList">
          <table>
            <tr>
              <td>
                <a>诉讼资料： 关于中联重机公司与张三的欠款诉讼.pdf</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>担保资料： 中联重科购买担保资料.jpg</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>担保资料： 中联重科购买担保资料.doc</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>诉讼资料： 关于中联重机公司与张三的欠款诉讼.xls</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>其它： 中联重科风险控制方案.ppt</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>

          </table>
        </div>
        <!-- <div class="tablelist-1">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" width="180">
            </el-table-column>
            <el-table-column prop="name" width="180">
            </el-table-column>
            <el-table-column prop="address">
            </el-table-column>
          </el-table>
        </div> -->
      </div>
      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>其他信息</h4>
          <div class="select">
            <el-input v-model="input3" placeholder="请输入会议名称关键字" width=200px clearable></el-input>
            <el-button type="primary">查 询</el-button>
            <!-- <el-input placeholder="请输入会议名称关键字" v-model="input2" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input> -->
          </div>
        </div>
        <div class="tableList">
          <table>
            <tr>
              <td>
                <a>关于中联重机公司与张三的欠款诉讼.pdf</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>中联重科购买担保资料.txt</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a>中联重科购买担保资料.doc</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
          </table>
        </div>
        <!-- <div class="tablelist-1">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" width="180">
            </el-table-column>
            <el-table-column prop="name" width="180">
            </el-table-column>
            <el-table-column prop="address">
            </el-table-column>
          </el-table>
        </div> -->
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "aaaaaaa",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      options1: [
        {
          value: "选项1",
          label: "按会议名称"
        },
        {
          value: "选项2",
          label: "按议题名称"
        }
      ],
      options2: [
        {
          value: "选项1",
          label: "全部分类"
        },
        {
          value: "选项2",
          label: "董事会"
        },
        {
          value: "选项3",
          label: "股东会"
        },
        {
          value: "选项4",
          label: "监事会"
        }
      ],
      options3: [
        {
          value: "选项1",
          label: "全部分类"
        },
        {
          value: "选项2",
          label: "诉讼资料"
        },
        {
          value: "选项3",
          label: "担保资料"
        },
        {
          value: "选项4",
          label: "其他"
        }
      ],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      input1: "",
      input2: "",
      input3: "",
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4
    };
  },
  mounted() {},
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
        // console.log(res.data.indexList);
        this.dataList = res.data.indexList;
        this.total = res.data.total;
      });
    }
  }
};
</script>
<style lang="less">
@borderColor: #e1e1e1;

.companyDetails {
  .companyInfo {
    height: 138px;
    border: 1px solid @borderColor;
    background: #fff;
    margin-bottom: 10px;
  }
  .main {
    // height: 2500px;
    border: 1px solid @borderColor;
    background-color: #fff;
    padding-bottom: 30px;
    margin-bottom: 20px;
    .top {
      height: 89px;
      border-bottom: 1px solid @borderColor;
    }
    .main1 {
      padding: 10px 20px 0 20px;
      .title {
        .line {
          display: block;
          position: relative;
          top: 22px;
          float: left;
          width: 2px;
          height: 16px;
          background-color: #51aff8;
        }
        h4 {
          margin-left: 10px;
          font-weight: normal;
          line-height: 60px;
          display: inline-block;
        }
        .select {
          float: right;
          margin-top: 10px;
          .el-select {
            width: 120px;
          }
          > .el-input {
            width: 200px;
          }
          &:nth-child(1) {
            margin-left: 10px;
          }
        }
      }
      .tableList {
        table {
          width: 100%;
          font-size: 14px;
          tr {
            td {
              padding: 0 20px;
              line-height: 49px;
              border-bottom: 1px solid @borderColor;
              a {
                cursor: pointer;
                color: #333;
                &:hover {
                  color: #51aff8;
                }
              }
              p {
                color: #999;
              }
            }
          }
        }
      }
      .el-pagination {
        margin: 15px 0;
        text-align: right;
        &.is-background .btn-next,
        &.is-background .btn-prev,
        &.is-background .el-pager li {
          background-color: #fff;
        }
        &.is-background .el-pager li:not(.disabled).active {
          background-color: #409eff;
        }
      }
    }
  }
}
</style>

