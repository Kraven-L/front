<template>
  <div class="basicInfo">
    <div class="companyInfo">

    </div>
    <div class="main">
      <div class="top">

      </div>

      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>工商信息</h4>
        </div>
        <div class="tablelist">
          <table style="text-align:left">
            <tr>
              <th width="180">
                <p>公司编码</p>
              </th>
              <td>
                <p>{{this.ICinfo.code}}</p>
              </td>
              <th>
                <p>成立日期</p>
              </th>
              <td>
                <p>{{this.ICinfo.date}}</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>注册资本</p>
              </th>
              <td>
                <p>
                  <span class="orange">{{this.ICinfo.captial}}</span>
                </p>
              </td>
              <th>
                <p>法人代表</p>
              </th>
              <td>
                <p>
                  <a href="">{{this.ICinfo.representative}}</a>
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <p>企业类型</p>
              </th>
              <td>
                <p>{{this.ICinfo.companyType}}</p>
              </td>
              <th>
                <p>经营状态</p>
              </th>
              <td>
                <p>{{this.ICinfo.operateStatus}}</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>是否上市</p>
              </th>
              <td>
                <p>{{this.ICinfo.listed}}</p>
              </td>
              <th>
                <p>所属行业</p>
              </th>
              <td>
                <p>{{this.ICinfo.trade}}</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>登记机关</p>
              </th>
              <td>
                <p>{{this.ICinfo.registerOffice}}</p>
              </td>
              <th>
                <p>统一社会信用代码</p>
              </th>
              <td>
                <p>{{this.ICinfo.creditCode}}</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>注册地址</p>
              </th>
              <td>
                <p>{{this.ICinfo.registerPlace}}</p>
              </td>
              <th>
                <p>归口管理经营单元</p>
              </th>
              <td>
                <p>{{this.ICinfo.department}}</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>经营范围</p>
              </th>
              <td colspan="3">
                <p>{{this.ICinfo.range}}</p>
              </td>

            </tr>
          </table>
        </div>
      </div>
      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>董监高人员信息</h4>
        </div>
        <div class="tablelist">
          <table>
            <thead>
              <tr>
                <th>
                  <p>职务</p>
                </th>
                <th>
                  <p>姓名</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in jobInfo" :key="index">
                <td>
                  <p>{{item.job}}</p>
                </td>
                <td>
                  <p>
                    <a href="">{{item.name}}</a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>变更记录</h4>
          <el-select v-model="value" placeholder="请选择" popper-class="dropDown">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="tablelist">
          <table>
            <thead>
              <tr>
                <th width="80px">
                  <p>序号</p>
                </th>
                <th>
                  <p>变更项目</p>
                </th>
                <th width="290px">
                  <p>变更前</p>
                </th>
                <th width="290px">
                  <p>变更后</p>
                </th>
                <th>
                  <p>变更时间</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in changeRecord" :key="index">
                <td>
                  <p>{{item.num}}</p>
                </td>
                <td>
                  <p>{{item.changeItem}}</p>
                </td>
                <td>
                  <p v-for="(e,i) in item.beforeChange" :key="i">{{e}}</p>
                </td>
                <td>
                  <p v-for="(e,i) in item.afterChange" :key="i">{{e}}</p>
                </td>
                <td>
                  <p>{{item.changeDate}}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="prev, pager, next, total" :total="100">
        </el-pagination>
      </div>
      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>审批流程及其他文件</h4>
        </div>
        <div class="tablelist">
          <table>
            <thead>
              <tr>
                <th>
                  <p>序号</p>
                </th>
                <th>
                  <p>文件类型</p>
                </th>
                <th>
                  <p>文件名称</p>
                </th>
                <th>
                  <p>文件</p>
                </th>
                <th>
                  <p>上传日期</p>
                </th>
                <th>
                  <p>上传人</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in approvalProcess" :key="index">
                <td>
                  <p>{{item.num}}</p>
                </td>
                <td>
                  <p>{{item.fileType}}</p>
                </td>
                <td>
                  <p>{{item.fileName}}</p>
                </td>
                <td>
                  <p>
                    <a href="">{{item.file}}</a>
                  </p>
                </td>
                <td>
                  <p>{{item.uploadDate}}</p>
                </td>
                <td>
                  <p>{{item.uploadPerson}}</p>
                </td>
              </tr>
              <!-- <tr>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>营业证件</p>
                </td>
                <td>
                  <p>营业执照</p>
                </td>
                <td>
                  <p>
                    <a href="">营业执照.jpg</a>
                  </p>
                </td>
                <td>
                  <p>2015-03-31</p>
                </td>
                <td>
                  <p>张三</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>营业证件</p>
                </td>
                <td>
                  <p>营业执照</p>
                </td>
                <td>
                  <p>
                    <a href="">营业执照.jpg</a>
                  </p>
                </td>
                <td>
                  <p>2015-03-31</p>
                </td>
                <td>
                  <p>张三</p>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
      <div class="main1">
        <div class="title">
          <span class="line"></span>
          <h4>联系人信息</h4>
        </div>
        <div class="tablelist">
          <table>
            <thead>
              <tr>
                <th>
                  <p>联系人姓名</p>
                </th>
                <th>
                  <p>身份证号</p>
                </th>
                <th>
                  <p>职务</p>
                </th>
                <th>
                  <p>手机</p>
                </th>
                <th>
                  <p>座机</p>
                </th>
                <th>
                  <p>微信</p>
                </th>
                <th>
                  <p>联系地址</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in contactInfo" :key="index">
                <td>
                  <p>
                    <!-- <a href="">詹纯新</a> -->
                    <router-link to="/contactinfo">{{item.contactName}}</router-link>
                  </p>
                </td>
                <td>
                  <p>{{item.IDcard}}</p>
                </td>
                <td>
                  <p>{{item.job}}</p>
                </td>
                <td>
                  <p>{{item.mobile}}</p>
                </td>
                <td>
                  <p>{{item.phone}}</p>
                </td>
                <td>
                  <p>{{item.wechat}}</p>
                </td>
                <td>
                  <p>{{item.address}}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ICinfo: [],
      jobInfo: [],
      changeRecord: [],
      approvalProcess: [],
      contactInfo: [],
      currentPage1: 1,
      total: "",
      options: [
        {
          value: "选项1",
          label: "不限"
        },
        {
          value: "选项2",
          label: "名称变更"
        },
        {
          value: "选项3",
          label: "注册资本变更"
        },
        {
          value: "选项4",
          label: "经营范围变更"
        }
      ],
      value: "变更项目"
    };
  },
  mounted() {
    this.getCompanyInfo();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getCompanyInfo() {
      let url = "../../static/data/companyInfo.json";

      this.$axios.get(url).then(res => {
        this.ICinfo = res.data.ICinfo;
        this.jobInfo = res.data.jobInfo;
        this.changeRecord = res.data.changeRecord;
        this.approvalProcess = res.data.approvalProcess;
        this.contactInfo = res.data.contactInfo;
        console.log(this.jobInfo);
        console.log(res.data);
      });
    }
  }
};
</script>
<style lang="less" scoped>
@borderColor: #e1e1e1;
@tableBorderColor: #ceeca6;

.basicInfo {
  .companyInfo {
    height: 138px;
    border: 1px solid @borderColor;
    background: #fff;
    margin-bottom: 10px;
  }
  .main {
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
        .el-select {
          float: right;
          margin-top: 10px;
        }
      }
      .tablelist {
        table {
          width: 100%;
          text-align: center;
          font-size: 14px;
          border-top: 1px solid @tableBorderColor;
          border-left: 1px solid @tableBorderColor;
          thead {
            background: #f1fae6;
            th {
              height: 38px;
              vertical-align: middle;
              border-right: 1px solid @tableBorderColor;
              border-bottom: 1px solid @tableBorderColor;
              p {
                color: #999;
                font-weight: bold;
              }
            }
          }
          tbody {
            td {
              height: 38px;
              vertical-align: middle;
              border-right: 1px solid @tableBorderColor;
              border-bottom: 1px solid @tableBorderColor;
              a {
                color: #51aff8;
              }
            }
          }
          th {
            background: #f1fae6;
            height: 38px;
            vertical-align: middle;
            border-right: 1px solid @tableBorderColor;
            border-bottom: 1px solid @tableBorderColor;
            padding: 13px;
            box-sizing: border-box;
            p {
              color: #999;
              font-weight: bold;
            }
          }
          td {
            height: 38px;
            vertical-align: middle;
            border-right: 1px solid @tableBorderColor;
            border-bottom: 1px solid @tableBorderColor;
            padding: 6px 13px;
            box-sizing: border-box;
            a {
              color: #51aff8;
            }
            p {
              line-height: 26px;
              .orange {
                color: #ff8a00;
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
  .red {
    color: #ff0000;
  }
}
</style>

