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
            <el-date-picker v-model="value2" @change="chooseDate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-select v-model="value3" placeholder="全部分类">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="input1" placeholder="请输入会议名称关键字" width=200px clearable></el-input>
            <el-button type="primary" @click="searchKeyword()">查 询</el-button>
            <!-- <el-input placeholder="请输入会议名称关键字" v-model="input2" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input> -->
          </div>
        </div>
        <div class="tableList">
          <table>
            <tr v-for="(item,index) in meetings" :key="index" class="meeting-list">
              <td>
                <router-link to="/meetingdetails">{{item.meetingName}}</router-link>
              </td>
              <td style="width:100px;text-align:right;">
                <p>{{item.meetingDate}}</p>
              </td>
            </tr>
          </table>
        </div>
        <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="prev, pager, next, total" :total=total>
        </el-pagination>
      </div>
      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>风险控制</h4>
          <div class="select">
            <el-select v-model="value4" placeholder="全部分类" @change="riskDataChoose">
              <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.label">
              </el-option>
            </el-select>
            <el-input v-model="input2" placeholder="请输入会议名称关键字" width=200px clearable></el-input>
            <el-button type="primary">查 询</el-button>
          </div>
        </div>
        <div class="tableList">
          <table>
            <tr v-show="lawsuitShow">
              <td>
                <span>诉讼资料：</span>
                <a><img :src=pdf>关于中联重机公司与张三的欠款诉讼.pdf</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr v-show="guaranteeShow">
              <td>
                <span>担保资料：</span>
                <a><img :src=img>中联重科购买担保资料.jpg</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr v-show="guaranteeShow">
              <td>
                <span>担保资料：</span>
                <a><img :src=word>中联重科购买担保资料.doc</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr v-show="lawsuitShow">
              <td>
                <span>诉讼资料：</span>
                <a><img :src=excel>关于中联重机公司与张三的欠款诉讼.xls</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr v-show="othersShow">
              <td>
                <span>其它：</span>
                <a><img :src=ppt>中联重科风险控制方案.ppt</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>

          </table>
        </div>
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
                <a><img :src=pdf>关于中联重机公司与张三的欠款诉讼.pdf</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a><img :src=word>中联重科购买担保资料.txt</a>
              </td>
              <td style="width:100px;text-align:right;">
                <p>2018-05-15</p>
              </td>
            </tr>
            <tr>
              <td>
                <a><img :src=word>中联重科购买担保资料.doc</a>
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
      total: 1,
      meetings: [],
      pdf: "./static/imgs/pdf.png",
      excel: "./static/imgs/excel.png",
      img: "./static/imgs/img.png",
      word: "./static/imgs/word.png",
      ppt: "./static/imgs/ppt.png",
      lawsuitShow: true,
      guaranteeShow: true,
      othersShow: true,
      keywordsShow: true
    };
  },
  mounted() {
    this.getMeetingList(this.currentPage1);
  },
  methods: {
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      // console.log(this.currentPage1);
      this.getMeetingList(this.currentPage1);
    },
    chooseDate() {
      console.log(this.value2);
      console.log(Object.prototype.toString.apply(this.value2));
      console.log(this.value2.join(","));
    },
    riskDataChoose() {
      if (this.value4 == "诉讼资料") {
        this.lawsuitShow = true;
        this.guaranteeShow = false;
        this.othersShow = false;
      } else if (this.value4 == "担保资料") {
        this.lawsuitShow = false;
        this.guaranteeShow = true;
        this.othersShow = false;
      } else if (this.value4 == "其他") {
        this.lawsuitShow = false;
        this.guaranteeShow = false;
        this.othersShow = true;
      } else {
        this.lawsuitShow = true;
        this.guaranteeShow = true;
        this.othersShow = true;
      }
    },

    //获取会议列表
    getMeetingList(pageID) {
      var pageID = pageID || 1;
      let url = "../../static/data/meetingList-page" + pageID + ".json";
      this.$axios.get(url).then(res => {
        this.total = res.data.total;
        this.meetings = res.data.meetingList.meeting;
      });
    },
    searchKeyword() {
      if (this.input1 == "") {
        this.getMeetingList(this.currentPage1);

        return;
      }
      let newList = [];
      for (let i = 0; i < this.meetings.length; i++) {
        if (this.meetings[i].meetingName.search(this.input1) != -1) {
          newList.push(this.meetings[i]);
        }
      }
      this.meetings = newList;
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
                img {
                  vertical-align: middle;
                  margin-right: 8px;
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
      }
    }
  }
}
</style>

