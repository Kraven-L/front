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
          <h4>董监高人员信息</h4>
        </div>
        <div class="tablelist">
          <table style="text-align:left">
            <tr>
              <th width="180">
                <p>职务</p>
              </th>
              <td>
                <p>000001</p>
              </td>
              <th>
                <p>成立日期</p>
              </th>
              <td>
                <p>2011-06-08</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>注册资本</p>
              </th>
              <td>
                <p><span class="orange">120000</span>万元</p>
              </td>
              <th>
                <p>法人代表</p>
              </th>
              <td>
                <p>
                  <a href="">詹纯新</a>
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <p>企业类型</p>
              </th>
              <td>
                <p>股份有限公司（非上市、对外投资企业投资）</p>
              </td>
              <th>
                <p>经营状态</p>
              </th>
              <td>
                <p>存续（在营、开业、在册）</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>是否上市</p>
              </th>
              <td>
                <p>否</p>
              </td>
              <th>
                <p>所属行业</p>
              </th>
              <td>
                <p>工程机械</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>登记机关</p>
              </th>
              <td>
                <p>芜湖市工商行政管理局</p>
              </td>
              <th>
                <p>统一社会信用代码</p>
              </th>
              <td>
                <p>91340200575745062A</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>注册地址</p>
              </th>
              <td>
                <p>安徽省芜湖市三山经济开发区峨溪路16号</p>
              </td>
              <th>
                <p>归口管理经营单元</p>
              </th>
              <td>
                <p>投融资管理部</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>经营范围</p>
              </th>
              <td colspan="3">
                <p>工程机械、建筑机械、农业机械、海洋机械、矿山机械、船舶、机床、改装车、专用车的研发、生产、销售、维修及租赁（特种业务凭许可经营）；机械、船舶和机床类的发动机、变速箱、桥、液压电控系统等零部件、总成的研发、生产和销售；自营和代理各类商品和技术的进出口（国家限定公司经营或禁止进出口的商品和技术除外）；品牌设计与推广，知识产权申报代理、咨询服务，广告设计、制作、代理和发布，会议展览服务，工程勘察勘探服务。</p>
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
              <tr>
                <td>
                  <p>董事长</p>
                </td>
                <td>
                  <p><a href="">詹纯新</a></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>董事</p>
                </td>
                <td>
                  <p><a href="">张晓明，李大仁，李四，小明，小王</a></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>监事</p>
                </td>
                <td>
                  <p><a href="">李大仁，李四，小明，小王</a></p>
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
              <tr>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>董监高变更</p>
                </td>
                <td>
                  <p class="red">王聪 [退出]</p>
                  <p class="red">江明 [退出]</p>
                  <p class="red">李江 [退出]</p>
                  <p class="red">徐辉 [退出]</p>
                  <p class="red">方晓 [退出]</p>
                  <p>王金富</p>
                  <p class="red">尹同跃 [退出]</p>
                </td>
                <td>
                  <p class="red">陈文 [新增]</p>
                  <p class="red">殷正富 [新增]</p>
                  <p>王金富</p>
                  <p class="red">张智泉 [新增]</p>
                </td>
                <td>
                  <p>2015-03-31</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>2</p>
                </td>
                <td>
                  <p>注册资金变更</p>
                </td>
                <td>
                  <p><span class="red">30000</span>万人民币</p>
                </td>
                <td>
                  <p><span class="red">17000</span>万人民币（-43.33%）</p>
                </td>
                <td>
                  <p>2015-03-31</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>3</p>
                </td>
                <td>
                  <p>法定代表人变更</p>
                </td>
                <td>
                  <p class="red">尹同跃</p>
                </td>
                <td>
                  <p class="red">殷正富</p>
                </td>
                <td>
                  <p>2015-03-31</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="prev, pager, next, total" :total="100">
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
              </tr>
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
              <tr>
                <td>
                  <p>
                    <a href="">詹纯新</a>
                  </p>
                </td>
                <td>
                  <p>123456198807181523</p>
                </td>
                <td>
                  <p>董事长</p>
                </td>
                <td>
                  <p>18178787878</p>
                </td>
                <td>
                  <p>073188989898</p>
                </td>
                <td>
                  <p>18178787878</p>
                </td>
                <td>
                  <p>长沙市岳麓区中联重科麓谷工业园</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <a href="">詹纯新</a>
                  </p>
                </td>
                <td>
                  <p>123456198807181523</p>
                </td>
                <td>
                  <p>董事长</p>
                </td>
                <td>
                  <p>18178787878</p>
                </td>
                <td>
                  <p>073188989898</p>
                </td>
                <td>
                  <p>18178787878</p>
                </td>
                <td>
                  <p>长沙市岳麓区中联重科麓谷工业园</p>
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
      tableData: [
        {
          num: "注册资本",
          fileType: "120000万元",
          uploadDate: "法人代表",
          uploadPerson: "詹纯新"
        },
        {
          num: "企业类型",
          fileType: "股份有限公司（非上市、对外投资企业投资）",
          uploadDate: "经营状态",
          uploadPerson: "存续（在营、开业、在册）"
        },
        {
          num: "是否上市",
          fileType: "否",
          uploadDate: "所属行业",
          uploadPerson: "工程机械"
        },
        {
          num: "登记机关",
          fileType: "芜湖市工商行政管理局",
          uploadDate: "统一社会信用代码",
          uploadPerson: "91340200575745062A"
        },
        {
          num: "注册地址",
          fileType: "安徽省芜湖市三山经济开发区峨溪路16号",
          uploadDate: "归口管理经营单元",
          uploadPerson: "投融资管理部"
        },
        {
          num: "经营范围",
          fileType:
            "工程机械、建筑机械、农业机械、海洋机械、矿山机械、船舶、机床、改装车、专用车的研发、生产、销售、维修及租赁（特种业务凭许可经营）；机械、船舶和机床类的发动机、变速箱、桥、液压电控系统等零部件、总成的研发、生产和销售；自营和代理各类商品和技术的进出口（国家限定公司经营或禁止进出口的商品和技术除外）；品牌设计与推广，知识产权申报代理、咨询服务，广告设计、制作、代理和发布，会议展览服务，工程勘察勘探服务。"
        }
      ],
      tableData1: [
        {
          job: "董事长",
          name: "詹纯新"
        },
        {
          job: "董事",
          name: "张晓明，李大仁，李四，小明，小王"
        },
        {
          job: "监事",
          name: "李大仁，李四，小明，小王"
        }
      ],
      tableData2: [
        {
          num: 1,
          changeItem: "董监高变更",
          beforeChange:
            "王聪 [退出]" +
            " 江明 [退出] 李江 [退出] 徐辉 [退出] 方晓 [退出] 王金富 尹同跃[退出]",
          afterChange: "陈文 [新增]  殷正富 [新增]  王金富  张智泉 [新增]",
          changeDate: "2015-03-31"
        },
        {
          num: 2,
          changeItem: "注册资金变更",
          beforeChange: "30000万人民币",
          afterChange: "17000万人民币（-43.33%）",
          changeDate: "2015-03-31"
        },
        {
          num: 3,
          changeItem: "法定代表人变更",
          beforeChange: "尹同跃",
          afterChange: "殷正富",
          changeDate: "2015-03-31"
        },
        {
          num: 4,
          changeItem: "",
          beforeChange: "",
          afterChange: "",
          changeDate: ""
        },
        {
          num: 5,
          changeItem: "",
          beforeChange: "",
          afterChange: "",
          changeDate: ""
        },
        {
          num: 6,
          changeItem: "",
          beforeChange: "",
          afterChange: "",
          changeDate: ""
        },
        {
          num: 7,
          changeItem: "",
          beforeChange: "",
          afterChange: "",
          changeDate: ""
        },
        {
          num: 8,
          changeItem: "",
          beforeChange: "",
          afterChange: "",
          changeDate: ""
        },
        {
          num: 9,
          changeItem: "",
          beforeChange: "",
          afterChange: "",
          changeDate: ""
        },
        {
          num: 10,
          changeItem: "",
          beforeChange: "",
          afterChange: "",
          changeDate: ""
        }
      ],
      tableData3: [
        {
          num: 1,
          fileType: "营业证件",
          fileName: "营业执照",
          file: "营业执照aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg",
          uploadDate: "2015-03-31",
          uploadPerson: "张三"
        },
        {
          num: 2,
          fileType: "公司章程",
          fileName: "中联重机公司公司章程",
          file: "中联重机公司公司章程.jpg",
          uploadDate: "2015-03-31",
          uploadPerson: "李四"
        },
        {
          num: 3,
          fileType: "公司章程",
          fileName: "中联重机公司公司章程",
          file: "中联重机公司公司章程.jpg",
          uploadDate: "2015-03-31",
          uploadPerson: "李四"
        }
      ],
      tableData4: [
        {
          name: "詹纯新",
          IDNum: "12334545656767878789",
          job: "董事长",
          mobilephone: "18178787878",
          telephone: "07318989898",
          weChat: "18178787878",
          address: "长沙市岳麓区中联重科麓谷工业园asdasdasdaaaaaaaaaaaaaaaaa"
        },
        {
          name: "詹纯新",
          IDNum: "12334545656767878789",
          job: "董事长",
          mobilephone: "18178787878",
          telephone: "07318989898",
          weChat: "18178787878",
          address: "长沙市岳麓区中联重科麓谷工业园"
        }
      ],
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      total: "",
      dataList: [],
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
        // console.log(res.data.indexList);
        this.dataList = res.data.indexList;
        this.total = res.data.total;
      });
    },

    //合并单元格
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 5) {
        if (columnIndex === 1) {
          return [1, 3];
        } else if (columnIndex === 0) {
          return [1, 1];
        }
      }
    },
    cancleChange() {
      // console.log(1)
    }
  }
};
</script>
<style lang="less">
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
    height: 2500px;
    border: 1px solid @borderColor;
    background-color: #fff;
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
              .orange{
                color: #ff8a00;
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
  .red{
    color: #ff0000;
  }
}
</style>

