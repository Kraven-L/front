<template>
<!-- 此处用的element的table组件实现竖直表格导致数据格式难处理，舍弃此页面 而采用原生table写的表格的页面 -->
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
                <div class="tablelist-1">
                    <el-table :data="tableData" :border=true :fit=true element-loading-text="列表正在加载中" :span-method="arraySpanMethod" @row-click="cancleChange" @cell-mouse-enter="cancleChange">
                        <el-table-column prop="num" label="公司编码" width=180></el-table-column>
                        <el-table-column prop="fileType" label="000001"></el-table-column>
                        <el-table-column prop="uploadDate" label="成立日期" width=180></el-table-column>
                        <el-table-column prop="uploadPerson" label="2011-06-08"></el-table-column>
                    </el-table>
                </div>
            </div>

            <div class="main1">
                <div class="title">
                    <span class="line"></span>
                    <h4>董监高人员信息</h4>
                </div>
                <div class="tablelist">
                    <el-table :data="tableData1" :border=true :fit=true element-loading-text="列表正在加载中">
                        <el-table-column prop="job" label="职务" align="center" width=200></el-table-column>
                        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                    </el-table>
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
                    <el-table :data="tableData2" :border=true :fit=true element-loading-text="列表正在加载中">
                        <el-table-column prop="num" label="序号" align="center" width=80></el-table-column>
                        <el-table-column prop="changeItem" label="变更项目" align="center"></el-table-column>
                        <el-table-column prop="beforeChange" label="变更前" align="center"></el-table-column>
                        <el-table-column prop="afterChange" label="变更后" align="center"></el-table-column>
                        <el-table-column prop="changeDate" label="变更日期" align="center"></el-table-column>
                    </el-table>
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
                    <el-table :data="tableData3" :border=true :fit=true element-loading-text="列表正在加载中">
                        <el-table-column prop="num" label="序号" align="center" width=80></el-table-column>
                        <el-table-column prop="fileType" label="文件类型" align="center"></el-table-column>
                        <el-table-column prop="fileName" label="文件名称" align="center"></el-table-column>
                        <el-table-column label="文件" align="center" width=290 show-overflow-tooltip>
                            <template slot-scope="scope">
                                <router-link to="/companyinfo">{{scope.row.file}}</router-link>
                            </template>
                        </el-table-column>
                        <el-table-column prop="uploadDate" label="上传日期" align="center"></el-table-column>
                        <el-table-column prop="uploadPerson" label="上传人" align="center"></el-table-column>

                    </el-table>
                </div>
            </div>
            <div class="main1">
                <div class="title">
                    <span class="line"></span>
                    <h4>联系人信息</h4>
                </div>
                <div class="tablelist">
                    <el-table :data="tableData4" :border=true :fit=true element-loading-text="列表正在加载中">
                        <el-table-column label="联系人姓名" align="center" width=110 show-overflow-tooltip>
                            <template slot-scope="scope">
                                <router-link to="/companyinfo">{{scope.row.name}}</router-link>
                            </template>
                        </el-table-column>
                        <el-table-column prop="IDNum" label="身份证号" align="center" width=210></el-table-column>
                        <el-table-column prop="job" label="职务" align="center" width=120></el-table-column>
                        <el-table-column prop="mobilephone" label="手机" align="center" width=140></el-table-column>
                        <el-table-column prop="telephone" label="座机" align="center" width=140></el-table-column>
                        <el-table-column prop="weChat" label="微信" align="center" width=140></el-table-column>
                        <el-table-column prop="address" label="地址" align="center" show-overflow-tooltip></el-table-column>

                    </el-table>
                </div>
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
      currentPage1: 5,
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
        tr > td {
          border-color: #ceeca6;
        //   background: #f1fae6;
        }
        tr > th {
          background: #f1fae6;
        }
      }
      .tablelist-1 {
        thead {
          color: #666;
        }
        tr td,
        tr th {
          border-color: #ceeca6;
          &:nth-child(2n + 1) {
            color: #999;
            background-color: #f1fae6;
            >div{
                font-weight: bold;
            }
          }
        }
      }
      .el-pagination {
        margin: 15px 0;
        text-align: right;
      }
      .el-table--border,
      .el-table th.is-leaf,
      .el-table--border th {
        border-color: #ceeca6;
      }
      .el-table--border::after,
      .el-table--group::after,
      .el-table::before {
        background-color: #ceeca6;
      }
      a {
        color: #51aff8;
      }
    }
  }
}
</style>

